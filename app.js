const categories = [
  { id: "algorithm", label: "算法", mark: "A" },
  { id: "database", label: "数据库", mark: "D" },
  { id: "shell", label: "Shell", mark: "S" },
  { id: "concurrency", label: "多线程", mark: "M" },
  { id: "javascript", label: "JavaScript", mark: "J" },
  { id: "pandas", label: "pandas", mark: "P" },
];

const difficulties = ["简单", "中等", "困难"];
const drawCounts = [1, 3, 5, 10];

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
    hint: "滑动窗口配合字符最后出现位置，窗口左边只向右移动。",
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
    hint: "用锁、信号量或条件变量建立 first、second、third 的先後关系。",
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
    hint: "每次调用都清掉旧定时器，只让最后一次延时执行。",
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
    hint: "列级运算可以直接赋值回原列，避免逐行循环。",
  },
  {
    title: "重塑数据：融合",
    category: "pandas",
    difficulty: "困难",
    slug: "reshape-data-melt",
    hint: "melt 会把宽表压成长表，关键是 id_vars 和 value_vars。",
  },
];

let problemBank = Array.isArray(window.LEETCODE_PROBLEMS) ? window.LEETCODE_PROBLEMS : problems;

const state = {
  categories: new Set(categories.map((c) => c.label)),
  difficulty: "中等",
  drawCount: 1,
  drawing: false,
};

const machine = document.querySelector("#machine");
const drawButton = document.querySelector("#draw-button");
const statusText = document.querySelector("#status-text");
const statusLabel = document.querySelector("#status-label");
const resultCard = document.querySelector("#result-card");
const resultItems = document.querySelector("#result-items");
const resultCategory = document.querySelector("#result-category");
const resultDifficulty = document.querySelector("#result-difficulty");
const resultTitle = document.querySelector("#result-title");
const resultHint = document.querySelector("#result-hint");
const problemLink = document.querySelector("#problem-link");
const categoryOptions = document.querySelector("#category-options");
const difficultyOptions = document.querySelector("#difficulty-options");
const drawCountOptions = document.querySelector("#draw-count-options");
const muteBtn = document.querySelector("#mute-btn");

// ── Sound Manager ──────────────────────────────────────────

class SoundManager {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  _ensure() {
    if (!this.ctx) {
      const Ctor = window.AudioContext || window.webkitAudioContext;
      if (!Ctor) return;
      this.ctx = new Ctor();
    }
    if (this.muted) return null;
    return this.ctx;
  }

  _tone(freq, dur, vol = 0.12, type = "sine", startDelay = 0) {
    const ctx = this._ensure();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.value = freq;
    const t = ctx.currentTime + startDelay;
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.start(t);
    osc.stop(t + dur);
  }

  click() { this._tone(800, 0.08, 0.12); }
  spin() {
    [523, 659, 784, 1047].forEach((f, i) => this._tone(f, 0.1, 0.1, "sine", i * 0.07));
  }
  rattle() {
    for (let i = 0; i < 6; i++) {
      this._tone(1200 + Math.random() * 600, 0.05, 0.05, "sine", i * 0.06);
    }
  }
  drop() {
    const ctx = this._ensure();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  }
  open() {
    this._tone(1200, 0.25, 0.18);
    this._tone(2400, 0.15, 0.06, "sine", 0);
  }
  result() {
    [523, 659, 784, 1047, 784, 1047].forEach((f, i) => this._tone(f, 0.15, 0.1, "sine", i * 0.1));
  }

  toggleMute() {
    this.muted = !this.muted;
    muteBtn.classList.toggle("is-muted", this.muted);
    const svg = muteBtn.querySelector("svg");
    if (this.muted) {
      svg.innerHTML =
        '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>';
    } else {
      svg.innerHTML =
        '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>';
    }
    return this.muted;
  }
}

const sound = new SoundManager();

// ── Confetti System ────────────────────────────────────────

class ConfettiSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.rafId = null;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 80) {
    const colors = ["#f16f5f", "#f6b842", "#45c4a1", "#5577d8", "#fff8d6", "#ff9f7c"];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: this.canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: this.canvas.height * 0.3,
        vx: (Math.random() - 0.5) * 12,
        vy: -Math.random() * 12 - 2,
        size: 4 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * Math.PI * 2,
        rotSpd: (Math.random() - 0.5) * 0.2,
        opacity: 1,
        shape: Math.random() > 0.5 ? "circle" : "rect",
        grav: 0.25 + Math.random() * 0.15,
      });
    }
    if (!this.rafId) this._animate();
  }

  _animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let alive = false;
    for (const p of this.particles) {
      p.vx *= 0.99;
      p.vy += p.grav;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotSpd;
      p.opacity -= 0.003;
      if (p.opacity <= 0) continue;
      alive = true;
      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rot);
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.fillStyle = p.color;
      if (p.shape === "circle") {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        this.ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      }
      this.ctx.restore();
    }
    if (alive) {
      this.rafId = requestAnimationFrame(() => this._animate());
    } else {
      this.particles = [];
      this.rafId = null;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

const confetti = new ConfettiSystem(document.querySelector("#confetti-canvas"));

// ── UI Builders ────────────────────────────────────────────

function createCategoryOptions() {
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip is-active";
    btn.dataset.category = cat.label;
    btn.setAttribute("aria-pressed", "true");
    btn.innerHTML = `
      <span class="chip-mark">${cat.mark}</span>
      <span class="chip-name">${cat.label}</span>
    `;
    btn.addEventListener("click", () => toggleCategory(btn, cat.label));
    categoryOptions.append(btn);
  });
}

function createDifficultyOptions() {
  difficulties.forEach((d) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `difficulty${d === state.difficulty ? " is-active" : ""}`;
    btn.dataset.difficulty = d;
    btn.setAttribute("aria-pressed", String(d === state.difficulty));
    btn.textContent = d;
    btn.addEventListener("click", () => { setDifficulty(d); sound.click(); });
    difficultyOptions.append(btn);
  });
}

function createDrawCountOptions() {
  drawCounts.forEach((n) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `draw-count-btn${n === state.drawCount ? " is-active" : ""}`;
    btn.dataset.count = n;
    btn.textContent = n;
    btn.addEventListener("click", () => { setDrawCount(btn, n); sound.click(); });
    drawCountOptions.append(btn);
  });
}

// ── State Mutators ────────────────────────────────────────

function toggleCategory(btn, cat) {
  if (state.drawing) return;
  if (state.categories.has(cat) && state.categories.size === 1) {
    statusLabel.textContent = "至少保留一个题目类型，扭蛋机才不会空转。";
    return;
  }
  if (state.categories.has(cat)) state.categories.delete(cat);
  else state.categories.add(cat);
  btn.classList.toggle("is-active", state.categories.has(cat));
  btn.setAttribute("aria-pressed", String(state.categories.has(cat)));
  updateReadyText();
}

function setDifficulty(d) {
  if (state.drawing) return;
  state.difficulty = d;
  document.querySelectorAll(".difficulty").forEach((btn) => {
    const on = btn.dataset.difficulty === d;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-pressed", String(on));
  });
  updateReadyText();
}

function setDrawCount(btn, n) {
  if (state.drawing) return;
  state.drawCount = n;
  document.querySelectorAll(".draw-count-btn").forEach((b) => {
    b.classList.toggle("is-active", Number(b.dataset.count) === n);
  });
  updateReadyText();
}

function updateReadyText() {
  const cats = [...state.categories].join("、");
  const pool = getPool().length;
  const n = state.drawCount;
  statusLabel.textContent =
    pool > 0
      ? `已选择 ${cats}，${state.difficulty}难度，可抽取 ${pool} 道题（连抽 ${n} 道）`
      : `当前筛选无匹配题目，换个难度或题型试试。`;
}

function getPool() {
  return problemBank.filter(
    (p) => state.categories.has(p.category) && p.difficulty === state.difficulty,
  );
}

function pickProblems(count) {
  const pool = getPool();
  const n = Math.min(count, pool.length);
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, n);
}

function wait(ms) {
  return new Promise((r) => window.setTimeout(r, ms));
}

// ── Main Draw ─────────────────────────────────────────────

async function drawProblem() {
  if (state.drawing) return;

  const pool = getPool();
  if (pool.length === 0) {
    statusLabel.textContent = "当前题型和难度没有可抽题目，换一个难度或多选题型试试。";
    return;
  }

  state.drawing = true;
  drawButton.disabled = true;
  resultCard.classList.add("is-empty");
  resultItems.innerHTML = "";
  statusLabel.textContent = "球仓正在晃动，灵感胶囊加速中...";

  machine.classList.remove("is-opening", "is-dropping", "is-drawing", "is-shaking");
  void machine.offsetWidth;
  machine.classList.add("is-shaking", "is-drawing");
  sound.spin();
  sound.rattle();

  await wait(1150);
  statusLabel.textContent = "旋钮锁定，胶囊准备落下...";
  machine.classList.add("is-dropping");
  sound.drop();

  await wait(1050);
  statusLabel.textContent = "胶囊打开，题目出炉！";
  machine.classList.add("is-opening");
  sound.open();

  await wait(520);

  const picked = pickProblems(state.drawCount);
  if (picked.length === 0) {
    statusLabel.textContent = "当前组合没有可抽题目，换个难度或题型试试。";
    drawButton.disabled = false;
    state.drawing = false;
    return;
  }

  showResults(picked);
  sound.result();
  confetti.burst(40 + picked.length * 30);

  await wait(180);
  machine.classList.remove("is-shaking", "is-drawing", "is-dropping", "is-opening");
  drawButton.disabled = false;
  state.drawing = false;
}

function showResults(problems) {
  resultCard.classList.remove("is-empty");

  problems.forEach((p, i) => {
    const item = document.createElement("div");
    item.className = "result-item";
    item.style.animationDelay = `${i * 0.08}s`;
    item.innerHTML = `
      <div class="result-meta">
        <span>${p.category}</span>
        <span>${p.difficulty}</span>
      </div>
      <h3>${p.title}</h3>
      <p>${p.hint}</p>
      <a class="problem-link" href="https://leetcode.cn/problems/${p.slug}/" target="_blank" rel="noreferrer">打开题目</a>
    `;
    resultItems.append(item);
  });

  statusLabel.textContent = `抽中了 ${problems.length} 道题！再转一次，换一批胶囊。`;
}

// ── Keyboard ──────────────────────────────────────────────

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !state.drawing && e.target === document.body) {
    e.preventDefault();
    drawProblem();
  }
});

// ── Mute Button ───────────────────────────────────────────

muteBtn.addEventListener("click", () => sound.toggleMute());

// ── Init ──────────────────────────────────────────────────

createCategoryOptions();
createDifficultyOptions();
createDrawCountOptions();
updateReadyText();

if (problemBank.length > problems.length) {
  statusLabel.textContent = `已加载 ${problemBank.length} 道本地题库题目，准备抽题。`;
}

drawButton.addEventListener("click", drawProblem);
