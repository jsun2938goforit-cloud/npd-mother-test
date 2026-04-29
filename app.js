const questions = [
  "当你跟她说你很累、很难过，她会把话题转回到自己身上，或者说「你有什么好累的，我才累」？",
  "你生病、失败、或者遇到困难的时候，她的第一反应是担心你，还是担心这件事会让她难堪、或者增加她的麻烦？",
  "她觉得你有义务满足她的需求，比如陪她、听她说话、按她的方式生活；但当你有需求时，她会觉得你是在无理取闹或者太自私？",
  "她会用内疚感来让你做你不想做的事？比如「我为你付出了这么多，你就这样对我」，或者用沉默、哭泣来施加压力？",
  "当你提起某件让你受伤的事，她会说「根本没有这回事」「你记错了」「你想太多了」，让你开始怀疑自己的记忆和感受是不是真实的？",
  "在外人或亲戚面前，她是温柔体贴的好妈妈；但回到家里，她对你的方式完全变了。你有时候甚至觉得那个「外面的她」才是表演？",
  "她会反复提起自己的牺牲和付出，说没有她就没有你的今天，但你无论怎么表达感谢，她都觉得不够？",
  "她需要你不断肯定她、夸她。一旦你表达不满或有不同意见，她会立刻崩溃、愤怒或者冷战？",
  "当你变得更好看、更成功，或者有了自己的生活，你有没有感觉她不是在为你高兴，而是有一种隐隐的不舒服，甚至会找机会打压你？",
  "她会说，她当年如果不是为了这个家、为了你，她本来可以有多了不起的成就，而且这句话你听过很多次？",
  "她非常在意外人怎么看你们家，不允许家里的事被外人知道，但她在家里对你的方式和对外人展示的完全是两个人？",
  "当你取得成绩、过得不错，她会泼冷水、挑毛病，或者把你的成功归功于她的培养？",
  "她很少真正道歉。就算道歉，也是「我都是为了你好」，或者道完歉立刻反过来说你的不是？",
  "她答应过你的事，经常没有兑现；但当你提起，她会说你记错了，或者找理由说是你的问题？",
  "她会用冷战、不理你、或者突然变得疏远来惩罚你；不是为了冷静，而是让你感到焦虑，主动去哄她？",
  "她会不敲门直接进你的房间、翻看你的东西，或者在你不知情的情况下把你的私事告诉别人？",
  "从小到大，你有没有觉得自己更像是在照顾她的情绪，而不是她在照顾你？她的心情好不好，决定了整个家的氛围？",
  "家里有矛盾的时候，她会要求你站在她那边。如果你表示理解对方，她会觉得你是在背叛她？",
  "在她身边，你需要小心翼翼地观察她的情绪，提前猜测她会不会不高兴，然后调整自己的行为来避免冲突？",
  "长大之后，你发现自己在亲密关系里很难相信别人真的爱你，或者总是不自觉地把别人的需求放在自己前面？"
];

const dimensions = [
  "缺乏同理心",
  "缺乏同理心",
  "特权感与关系利用",
  "特权感与关系利用",
  "煤气灯效应",
  "公私两面性",
  "需要钦佩与夸大自我",
  "需要钦佩与夸大自我",
  "竞争心理",
  "幻想成就",
  "特殊感与形象维护",
  "嫉妒与贬低",
  "傲慢与从不道歉",
  "承诺不兑现",
  "沉默惩罚",
  "边界入侵",
  "角色倒置",
  "忠诚绑架",
  "情绪化反应",
  "代际影响"
];

const options = [
  { label: "经常这样", score: 2 },
  { label: "偶尔这样", score: 1 },
  { label: "几乎没有", score: 0 }
];

const pauseMessages = {
  7: "你已经完成了一部分。能把这些细节看清楚，并不容易，请慢一点，不需要逼自己立刻给出结论。",
  14: "还剩最后几题。不管结果是什么，愿意来到这里看见自己，已经是一件很重要的事。"
};

const results = [
  {
    min: 0,
    max: 13,
    level: "轻度感知",
    avatar: "light",
    title: "你们之间有摩擦，但你的感受值得被认真对待",
    tagline: "像一阵偶尔吹乱心绪的风，你已经开始分辨哪些感受属于自己。",
    band: "这一档通常表示关系里存在一些不舒服的互动，但未必形成稳定的高压模式。你可以先从记录感受和观察边界开始，不需要急着下结论。",
    body: [
      "你感受到的困扰是真实的。它可能更多来自两代人之间不同的表达方式，也可能来自长期没有被好好回应的需求。",
      "请记住，想要被好好对待，是每个人都有权利要求的事。你不需要为关系里的不舒服感到内疚，也不需要说服自己「已经很好了」。"
    ]
  },
  {
    min: 14,
    max: 26,
    level: "中度感知",
    avatar: "medium",
    title: "你可能花了很多年，在一段需要小心翼翼的关系里",
    tagline: "你不是太敏感，你只是长期学会了先看她的脸色，再安放自己的感受。",
    band: "这一档说明这些互动可能已经反复出现，并影响你对自己的判断。你也许经常自我怀疑、压低需求，或习惯先照顾她的情绪。",
    body: [
      "这些模式可能已经在影响你对自己的看法。你也许花了很多年在猜测别人的情绪、压缩自己的需求、怀疑自己是不是太敏感。",
      "你不是太敏感。你只是在一段需要小心翼翼的关系里，学会了保护自己。接下来，你可以开始慢慢把空间还给自己。"
    ]
  },
  {
    min: 27,
    max: 40,
    level: "高度感知",
    avatar: "high",
    title: "你不是一个人，很多女儿都在慢慢把自己找回来",
    tagline: "这更像一段长期高压的关系痕迹。现在重要的不是证明谁有病，而是先把你保护好。",
    band: "这一档表示多个关系模式可能长期叠加，并对你的亲密关系、安全感和自我价值感造成明显影响。建议你把自我保护、边界练习和专业支持放到更重要的位置。",
    body: [
      "你描述的这些模式，可能已经系统性地影响了你对自己的认知和对关系的期待。你也许很早就学会了：我的感受不重要，我需要先满足她。",
      "这不是你天生的样子。这更像是你在那段关系里学会的生存方式。看见它，是把自己找回来的第一步。"
    ]
  }
];

let view = "intro";
let introIndex = 0;
let questionIndex = 0;
let answers = Array(questions.length).fill(null);

const card = document.querySelector("#card");
const appShell = document.querySelector("#appShell");
const progressWrap = document.querySelector("#progressWrap");
const progressBar = document.querySelector("#progressBar");
const progressLabel = document.querySelector("#progressLabel");
const progressCount = document.querySelector("#progressCount");
let guidePanel = null;

function cloneTemplate(id) {
  return document.querySelector(id).content.cloneNode(true);
}

function showProgress(visible) {
  progressWrap.hidden = !visible;
}

function updateLayout() {
  const focusMode = view !== "intro";
  appShell.classList.toggle("is-focus-mode", focusMode);
}

function updateProgress() {
  const current = questionIndex + 1;
  const percent = (current / questions.length) * 100;
  progressBar.style.width = `${percent}%`;
  progressLabel.textContent = `第 ${current} 题`;
  progressCount.textContent = `${current} / ${questions.length}`;
}

function render() {
  updateLayout();
  card.replaceChildren();

  if (view === "intro") {
    showProgress(false);
    renderIntroStep();
    return;
  }

  if (view === "question") {
    showProgress(true);
    updateProgress();
    renderQuestion();
    return;
  }

  if (view === "pause") {
    showProgress(true);
    updateProgress();
    const fragment = cloneTemplate("#pauseTemplate");
    fragment.querySelector("#pauseText").textContent = pauseMessages[questionIndex];
    card.append(fragment);
    window.setTimeout(() => {
      view = "question";
      render();
    }, 3800);
    return;
  }

  if (view === "buffer") {
    showProgress(false);
    card.append(cloneTemplate("#bufferTemplate"));
    return;
  }

  renderResult();
}

function renderIntroStep() {
  const templates = [
    "#welcomeTemplate",
    "#methodTemplate"
  ];
  card.append(cloneTemplate(templates[introIndex]));
}

function renderQuestion() {
  const fragment = cloneTemplate("#questionTemplate");
  const answer = answers[questionIndex];
  const backButton = fragment.querySelector('[data-action="back"]');
  const nextButton = fragment.querySelector('[data-action="next"]');
  const optionsWrap = fragment.querySelector("#options");

  fragment.querySelector("#questionKicker").textContent = `第 ${questionIndex + 1} 题 · 共 ${questions.length} 题｜${dimensions[questionIndex]}`;
  fragment.querySelector("#questionTitle").textContent = questions[questionIndex];
  backButton.hidden = questionIndex === 0;
  nextButton.textContent = questionIndex === questions.length - 1 ? "查看结果" : "下一题";
  nextButton.disabled = answer === null;

  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.type = "button";
    button.textContent = option.label;
    button.dataset.action = "select";
    button.dataset.score = String(option.score);
    if (answer === option.score) button.classList.add("is-selected");
    optionsWrap.append(button);
  });

  card.append(fragment);
}

function renderResult() {
  showProgress(false);
  const score = answers.reduce((sum, value) => sum + Number(value || 0), 0);
  const result = results.find((item) => score >= item.min && score <= item.max) || results[2];
  const fragment = cloneTemplate("#resultTemplate");
  const copy = fragment.querySelector("#resultCopy");
  const scoreBands = fragment.querySelector("#scoreBands");
  const avatar = fragment.querySelector("#resultAvatar");

  avatar.classList.add(`is-${result.avatar}`);
  fragment.querySelector("#resultLevel").textContent = result.level;
  fragment.querySelector("#resultTitle").textContent = result.title;
  fragment.querySelector("#scoreLine").textContent = `本次得分 ${score} / 40`;
  fragment.querySelector("#resultTagline").textContent = result.tagline;

  result.body.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    copy.append(p);
  });

  results.forEach((item) => {
    const band = document.createElement("div");
    band.className = item === result ? "score-band is-current" : "score-band";
    band.innerHTML = `
      <strong>${item.min}-${item.max} 分｜${item.level}</strong>
      <span>${item.band}</span>
    `;
    scoreBands.append(band);
  });

  card.append(fragment);
}

function openGuidePanel() {
  if (guidePanel) return;
  guidePanel = cloneTemplate("#guideTemplate").firstElementChild;
  document.body.append(guidePanel);
}

function closeGuidePanel() {
  if (!guidePanel) return;
  guidePanel.remove();
  guidePanel = null;
}

function start() {
  view = "question";
  questionIndex = 0;
  answers = Array(questions.length).fill(null);
  render();
}

function nextIntro() {
  introIndex = Math.min(introIndex + 1, 1);
  render();
}

function previousIntro() {
  introIndex = Math.max(introIndex - 1, 0);
  render();
}

function goNext() {
  if (answers[questionIndex] === null) return;

  const nextIndex = questionIndex + 1;
  if (nextIndex >= questions.length) {
    view = "buffer";
  } else {
    questionIndex = nextIndex;
    view = pauseMessages[questionIndex] ? "pause" : "question";
  }
  render();
}

function goBack() {
  if (questionIndex === 0) return;
  questionIndex -= 1;
  view = "question";
  render();
}

function restart() {
  view = "intro";
  introIndex = 0;
  questionIndex = 0;
  answers = Array(questions.length).fill(null);
  render();
}

card.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;
  if (action === "intro-next") nextIntro();
  if (action === "intro-back") previousIntro();
  if (action === "start") start();
  if (action === "next") goNext();
  if (action === "back") goBack();
  if (action === "result") {
    view = "result";
    render();
  }
  if (action === "restart") restart();
  if (action === "guide") openGuidePanel();
  if (action === "select") {
    answers[questionIndex] = Number(target.dataset.score);
    render();
  }
});

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  if (target.dataset.action === "close-guide") closeGuidePanel();
});

render();
