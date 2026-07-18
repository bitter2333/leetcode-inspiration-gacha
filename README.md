<p align="center">
  <img src="https://img.shields.io/badge/LeetCode-刷题必备-orange?style=flat-square&logo=leetcode" alt="LeetCode">
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/纯前端-零依赖-blue?style=flat-square" alt="Pure Frontend">
  <img src="https://img.shields.io/badge/题库-3000+-brightgreen?style=flat-square" alt="Problems">
</p>

<h1 align="center">力扣灵感扭蛋机</h1>

<p align="center">
  <i>转动旋钮，摇出你今天的刷题灵感。</i>
  <br><br>
  <a href="https://leetcode.bitter2333.xyz"><b>在线体验 &rarr;</b></a>
</p>

---

## 这是什么

一台**会动的扭蛋机**，装满了力扣（LeetCode）题目胶囊。选择题型与难度，按下旋转按钮，球仓开始晃动，胶囊叮叮当当滚落，打开之后——今天的刷题目标就跳出来了。

不是又一个平淡的选题工具，而是一次**有声音、有动画、有仪式感**的抽题体验。

## 效果预览

> 打开 [leetcode.bitter2333.xyz](https://leetcode.bitter2333.xyz) 直接体验

| 扭蛋动画 | 抽题结果 |
|:---:|:---:|
| 球仓晃动 → 旋钮旋转 → 胶囊掉落 → 开盖 | 结果卡片展示题目 / 分类 / 难度 / 提示 / 直达链接 |

## 亮点功能

### 交互体验

| 功能 | 说明 |
|------|------|
| **扭蛋机动画** | 完整五阶段动画链：球仓晃动 &rarr; 旋钮旋转 &rarr; 胶囊掉落 &rarr; 开盖弹出 &rarr; 卡片展示 |
| **音效系统** | Web Audio API 合成，现代可爱风格——上行音阶、碎铃叮当、清脆开盖、和弦琶音，一键静音 |
| **彩纸庆祝** | Canvas 粒子特效，抽取数量越多越热闹（1 连抽 70 粒，10 连抽 340 粒） |
| **空格快捷键** | 无论焦点在哪里，按空格即抽题 |

### 抽题策略

| 功能 | 说明 |
|------|------|
| **6 大题型** | 算法 / 数据库 / Shell / 多线程 / JavaScript / pandas，支持多选 |
| **3 档难度** | 简单 / 中等 / 困难，支持单选 |
| **4 档连抽** | 1 / 3 / 5 / 10 连抽，同轮题目保证不重复 |
| **智能降级** | 题库不足时自动降档，不会空转 |

### 数据与部署

| 功能 | 说明 |
|------|------|
| **可更新题库** | 一键 `node scripts/sync-problems.mjs` 从力扣中文站同步 3000+ 题 |
| **自动过滤 Plus** | 同步和加载时自动跳过付费会员专属题目 |
| **响应式** | 桌面 / 平板 / 手机均适配 |
| **零依赖部署** | 纯静态 HTML + CSS + JS，扔到任意 Web 服务器或直接双击打开 |

## 技术栈

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Web_Audio_API-5A0FC8?style=flat-square" alt="Web Audio API">
  <img src="https://img.shields.io/badge/Canvas_API-FF6384?style=flat-square" alt="Canvas API">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js">
</p>

- **纯前端**：HTML + CSS + JavaScript，无框架、无构建工具
- **音效**：Web Audio API 实时合成，零音频文件
- **粒子**：Canvas 2D 自绘，零第三方库
- **数据同步**：Node.js 脚本调用 LeetCode 中文站 API

## 项目结构

```
力扣灵感扭蛋机/
├── index.html              # 主页面
├── app.js                  # 核心逻辑（状态管理、抽题、音效、彩纸）
├── styles.css              # 全套样式（扭蛋机渲染、动画、响应式）
├── data/
│   ├── problems.js         # 运行时可加载题库（3000+ 题）
│   └── problems.json       # 题库 JSON 格式
├── scripts/
│   └── sync-problems.mjs   # 题库同步脚本（从力扣 API 拉取）
└── README.md
```

## 使用方式

### 在线

直接访问 **[leetcode.bitter2333.xyz](https://leetcode.bitter2333.xyz)**

### 本地

```bash
# 克隆仓库
git clone https://github.com/bitter2333/leetcode-inspiration-gacha.git

# 直接用浏览器打开
start index.html

# 或者起一个本地服务
npx serve .
```

### 更新题库

```bash
node scripts/sync-problems.mjs
```

脚本会从力扣中文站拉取最新题目列表，自动过滤 Plus 会员专属题，生成 `data/problems.js` 和 `data/problems.json`。

## 为什么做这个

刷题最难的不是解题，是**选题**。

对着力扣几千道题发呆，不知道今天刷什么——这就是决策疲劳。扭蛋机把这个决策变成一个**有趣的小仪式**：轻轻一摇，灵感自动蹦出来。

## License

MIT License. 随意使用、修改、分发。

---

<p align="center">
  如果这个项目帮到了你，欢迎给个 <b>Star</b> 支持一下。
</p>
