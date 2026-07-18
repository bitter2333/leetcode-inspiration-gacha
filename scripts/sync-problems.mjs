import { mkdir, writeFile } from "node:fs/promises";

const categories = [
  { apiSlug: "algorithms", label: "算法" },
  { apiSlug: "database", label: "数据库" },
  { apiSlug: "shell", label: "Shell" },
  { apiSlug: "concurrency", label: "多线程" },
  { apiSlug: "javascript", label: "JavaScript" },
  { apiSlug: "pandas", label: "pandas" },
];

const difficultyMap = {
  1: "简单",
  2: "中等",
  3: "困难",
};

const fallbackHints = {
  算法: "先识别数据规模与核心约束，再选择合适的数据结构或算法范式。",
  数据库: "先确认表关系、筛选条件和聚合粒度，再决定 JOIN、子查询或窗口函数。",
  Shell: "先明确输入行格式，再用管道、正则或 awk/sed 把转换步骤拆开。",
  多线程: "先画出线程执行顺序，再用锁、信号量或条件变量表达同步关系。",
  JavaScript: "先明确函数调用时机与返回值，再处理异步、闭包和边界情况。",
  pandas: "先观察表格形状和列含义，再选择筛选、聚合、合并或重塑操作。",
};

async function fetchCategory(category) {
  const response = await fetch(`https://leetcode.cn/api/problems/${category.apiSlug}/`);

  if (!response.ok) {
    throw new Error(`${category.label} request failed: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();

  return payload.stat_status_pairs
    .filter((item) => !item.stat.question__hide && !item.paid_only)
    .map((item) => ({
      id: item.stat.frontend_question_id,
      title: item.stat.question__title,
      category: category.label,
      difficulty: difficultyMap[item.difficulty.level] || "中等",
      slug: item.stat.question__title_slug,
      hint: fallbackHints[category.label],
      paidOnly: Boolean(item.paid_only),
    }));
}

const bySlug = new Map();

for (const category of categories) {
  console.log(`Syncing ${category.label}...`);
  const problems = await fetchCategory(category);

  for (const problem of problems) {
    if (!bySlug.has(problem.slug)) {
      bySlug.set(problem.slug, problem);
    }
  }
}

const results = [...bySlug.values()].filter((p) => !p.paidOnly).sort((a, b) => {
  const categoryOrder =
    categories.findIndex((category) => category.label === a.category) -
    categories.findIndex((category) => category.label === b.category);

  if (categoryOrder !== 0) return categoryOrder;
  return String(a.id).localeCompare(String(b.id), "zh-CN", { numeric: true });
});

await mkdir("data", { recursive: true });
await writeFile("data/problems.json", `${JSON.stringify(results, null, 2)}\n`, "utf8");
await writeFile(
  "data/problems.js",
  `window.LEETCODE_PROBLEMS = ${JSON.stringify(results, null, 2)};\n`,
  "utf8",
);

console.log(`Wrote ${results.length} problems to data/problems.json and data/problems.js`);


