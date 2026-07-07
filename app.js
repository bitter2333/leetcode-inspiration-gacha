const categories = [
  { id: "algorithm", label: "算法", mark: "A" },
  { id: "database", label: "数据库", mark: "D" },
  { id: "shell", label: "Shell", mark: "S" },
  { id: "concurrency", label: "多线程", mark: "M" },
  { id: "javascript", label: "JavaScript", mark: "J" },
  { id: "pandas", label: "pandas", mark: "P" },
];

const difficulties = ["简单", "中等", "困难"];

const problems = [
  {
    title: "两数之和",
    category: "算法",
    difficulty: "简单",
    slug: "two-sum",
    hint: "用哈希表记录已见数字，把寻找补数的过程压到一次遍历里。",
  },
  {
    title: "有效的括号",
    category: "算法",
    difficulty: "简单",
    slug: "valid-parentheses",
    hint: "遇到左括号入栈，遇到右括号检查栈顶是否匹配。",
  },
  {
    title: "合并两个有序链表",
    category: "算法",
    difficulty: "简单",
    slug: "merge-two-sorted-lists",
    hint: "维护一个哑节点，让尾指针始终接上较小的节点。",
  },
  {
    title: "无重复字符的最长子串",
    category: "算法",
    difficulty: "中等",
    slug: "longest-substring-without-repeating-characters",
    hint: "滑动窗口配合字符最后出现位置，窗口左边界只向右移动。",
  },
  {
    title: "三数之和",
    category: "算法",
    difficulty: "中等",
    slug: "3sum",
    hint: "排序后固定一个数，再用双指针收缩，并跳过重复值。",
  },
  {
    title: "岛屿数量",
    category: "算法",
    difficulty: "中等",
    slug: "number-of-islands",
    hint: "扫描网格，遇到陆地就 DFS/BFS 淹没整座岛。",
  },
  {
    title: "合并 K 个升序链表",
    category: "算法",
    difficulty: "困难",
    slug: "merge-k-sorted-lists",
    hint: "优先队列每次弹出最小节点，也可以用分治合并降低复杂度。",
  },
  {
    title: "接雨水",
    category: "算法",
    difficulty: "困难",
    slug: "trapping-rain-water",
    hint: "每个位置能接的水由左右最高墙的较小值决定。",
  },
  {
    title: "滑动窗口最大值",
    category: "算法",
    difficulty: "困难",
    slug: "sliding-window-maximum",
    hint: "维护一个递减双端队列，队首永远是当前窗口最大值。",
  },
  {
    title: "组合两个表",
    category: "数据库",
    difficulty: "简单",
    slug: "combine-two-tables",
    hint: "保留 Person 表所有行时，优先想到 LEFT JOIN。",
  },
  {
    title: "第二高的薪水",
    category: "数据库",
    difficulty: "中等",
    slug: "second-highest-salary",
    hint: "去重后排序偏移，或者用子查询筛掉最高薪水。",
  },
  {
    title: "部门工资前三高的所有员工",
    category: "数据库",
    difficulty: "困难",
    slug: "department-top-three-salaries",
    hint: "窗口函数 DENSE_RANK 能自然处理并列排名。",
  },
  {
    title: "第十行",
    category: "Shell",
    difficulty: "简单",
    slug: "tenth-line",
    hint: "可以用 sed 直接打印指定行，注意文件不足十行的情况。",
  },
  {
    title: "转置文件",
    category: "Shell",
    difficulty: "中等",
    slug: "transpose-file",
    hint: "awk 逐行逐列缓存字段，最后按列输出。",
  },
  {
    title: "有效电话号码",
    category: "Shell",
    difficulty: "困难",
    slug: "valid-phone-numbers",
    hint: "用 grep 的扩展正则匹配两种合法格式，别漏掉行首行尾。",
  },
  {
    title: "按序打印",
    category: "多线程",
    difficulty: "简单",
    slug: "print-in-order",
    hint: "用锁、信号量或条件变量建立 first、second、third 的先后关系。",
  },
  {
    title: "交替打印 FooBar",
    category: "多线程",
    difficulty: "中等",
    slug: "print-foobar-alternately",
    hint: "两个同步信号交替释放，让 foo 和 bar 轮流执行。",
  },
  {
    title: "哲学家进餐",
    category: "多线程",
    difficulty: "困难",
    slug: "the-dining-philosophers",
    hint: "核心是避免环形等待，可以限制同时拿叉人数或统一拿锁顺序。",
  },
  {
    title: "数组原型对象的最后一个元素",
    category: "JavaScript",
    difficulty: "简单",
    slug: "array-prototype-last",
    hint: "扩展 Array.prototype 时，空数组要返回 -1。",
  },
  {
    title: "防抖",
    category: "JavaScript",
    difficulty: "中等",
    slug: "debounce",
    hint: "每次调用都清掉旧定时器，只让最后一次延迟执行。",
  },
  {
    title: "带取消功能的延迟函数",
    category: "JavaScript",
    difficulty: "困难",
    slug: "promise-time-limit",
    hint: "把原 Promise 和超时拒绝 Promise 放进 Promise.race。",
  },
  {
    title: "创建 DataFrame",
    category: "pandas",
    difficulty: "简单",
    slug: "create-a-dataframe-from-list",
    hint: "关注列名和二维列表到 DataFrame 的映射关系。",
  },
  {
    title: "修改列",
    category: "pandas",
    difficulty: "中等",
    slug: "modify-columns",
    hint: "列级运算可直接赋值回原列，避免逐行循环。",
  },
  {
    title: "重塑数据：融合",
    category: "pandas",
    difficulty: "困难",
    slug: "reshape-data-melt",
    hint: "melt 会把宽表压成长表，关键是 id_vars 和 value_vars。",
  },
];

const state = {
  categories: new Set(categories.map((category) => category.label)),
  difficulty: "中等",
  drawing: false,
};

const machine = document.querySelector("#machine");
const drawButton = document.querySelector("#draw-button");
const statusText = document.querySelector("#status-text");
const resultCard = document.querySelector("#result-card");
const resultCategory = document.querySelector("#result-category");
const resultDifficulty = document.querySelector("#result-difficulty");
const resultTitle = document.querySelector("#result-title");
const resultHint = document.querySelector("#result-hint");
const problemLink = document.querySelector("#problem-link");
const categoryOptions = document.querySelector("#category-options");
const difficultyOptions = document.querySelector("#difficulty-options");

function createCategoryOptions() {
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip is-active";
    button.dataset.category = category.label;
    button.setAttribute("aria-pressed", "true");
    button.innerHTML = `
      <span class="chip-mark">${category.mark}</span>
      <span class="chip-name">${category.label}</span>
    `;
    button.addEventListener("click", () => toggleCategory(button, category.label));
    categoryOptions.append(button);
  });
}

function createDifficultyOptions() {
  difficulties.forEach((difficulty) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `difficulty${difficulty === state.difficulty ? " is-active" : ""}`;
    button.dataset.difficulty = difficulty;
    button.setAttribute("aria-pressed", String(difficulty === state.difficulty));
    button.textContent = difficulty;
    button.addEventListener("click", () => setDifficulty(difficulty));
    difficultyOptions.append(button);
  });
}

function toggleCategory(button, category) {
  if (state.drawing) return;

  if (state.categories.has(category) && state.categories.size === 1) {
    statusText.textContent = "至少保留一个题目类型，扭蛋机才不会空转。";
    return;
  }

  if (state.categories.has(category)) {
    state.categories.delete(category);
  } else {
    state.categories.add(category);
  }

  button.classList.toggle("is-active", state.categories.has(category));
  button.setAttribute("aria-pressed", String(state.categories.has(category)));
  updateReadyText();
}

function setDifficulty(difficulty) {
  if (state.drawing) return;

  state.difficulty = difficulty;
  document.querySelectorAll(".difficulty").forEach((button) => {
    const isActive = button.dataset.difficulty === difficulty;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  updateReadyText();
}

function updateReadyText() {
  const categoryText = [...state.categories].join("、");
  const poolSize = getPool().length;
  statusText.textContent = `已选择 ${categoryText}，${state.difficulty}难度，可抽取 ${poolSize} 道题。`;
}

function getPool() {
  return problems.filter(
    (problem) => state.categories.has(problem.category) && problem.difficulty === state.difficulty,
  );
}

function pickProblem() {
  const pool = getPool();
  if (pool.length > 0) {
    return pool[Math.floor(Math.random() * pool.length)];
  }

  const backup = problems.filter((problem) => state.categories.has(problem.category));
  return backup[Math.floor(Math.random() * backup.length)];
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function drawProblem() {
  if (state.drawing) return;

  state.drawing = true;
  drawButton.disabled = true;
  resultCard.classList.add("is-empty");
  problemLink.classList.add("is-disabled");
  statusText.textContent = "球仓正在晃动，灵感胶囊加速中...";

  machine.classList.remove("is-opening", "is-dropping", "is-drawing", "is-shaking");
  void machine.offsetWidth;
  machine.classList.add("is-shaking", "is-drawing");

  await wait(1150);
  statusText.textContent = "旋钮锁定，胶囊准备落下。";
  machine.classList.add("is-dropping");

  await wait(1050);
  statusText.textContent = "胶囊打开，题目出炉。";
  machine.classList.add("is-opening");

  await wait(520);
  const problem = pickProblem();
  showResult(problem);

  await wait(180);
  machine.classList.remove("is-shaking", "is-drawing", "is-dropping", "is-opening");
  drawButton.disabled = false;
  state.drawing = false;
}

function showResult(problem) {
  resultCard.classList.remove("is-empty");
  resultCategory.textContent = problem.category;
  resultDifficulty.textContent = problem.difficulty;
  resultTitle.textContent = problem.title;
  resultHint.textContent = problem.hint;
  problemLink.href = `https://leetcode.cn/problems/${problem.slug}/`;
  problemLink.classList.remove("is-disabled");
  statusText.textContent = `抽中了「${problem.title}」。再转一次，换一颗胶囊。`;
}

createCategoryOptions();
createDifficultyOptions();
updateReadyText();
drawButton.addEventListener("click", drawProblem);
