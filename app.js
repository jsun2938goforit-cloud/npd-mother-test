const GUIDE_LINK = "https://example.com";

const questions = [
  "当你跟她说你很累、很难过，她会把话题转回到自己身上，或者说「你有什么好累的，我才累」？",
  "你生病、失败、或者遇到困难的时候，她的第一反应是担心你，还是担心这件事会让她难堪、或者增加她的麻烦？",
  "她觉得你有义务满足她的需求，比如陪她、听她说话、按她的方式生活；但当你有需求时，她会觉得你是在无理取闹或者太自私？",
  "她会用内疚感让你做你不想做的事，比如「我为你付出了这么多，你就这样对我」，或者用沉默、哭泣来施加压力？",
  "她会反复提起自己的牺牲和付出，说没有她就没有你的今天；但你无论怎么表达感谢，她都觉得不够？",
  "她需要你不断肯定她、夸她。一旦你表达不满或有不同意见，她会立刻崩溃、愤怒或者冷战？",
  "她会说，如果当年不是为了这个家、为了你，她本来可以有多了不起的成就，而且这句话你听过很多次？",
  "她非常在意外人怎么看你们家，不允许家里的事被外人知道；但她在家里对你的方式和对外人展示的完全不同？",
  "当你取得成绩、过得不错，她会泼冷水、挑毛病，或者把你的成功归功于她的培养？",
  "她很少真正道歉。就算道歉，也是「我都是为了你好」，或者道完歉立刻反过来说你的不是？",
  "在她身边，你需要小心翼翼地观察她的情绪，提前猜测她会不会不高兴，然后调整自己的行为来避免冲突？",
  "长大之后，你发现自己在亲密关系里很难相信别人真的爱你，或者总是不自觉地把别人的需求放在自己前面？"
];

const options = [
  { label: "经常这样", score: 2 },
  { label: "偶尔这样", score: 1 },
  { label: "几乎没有", score: 0 }
];

const pauseMessages = {
  4: "你能回忆起这些细节，说明你一直在认真感受这段关系。请慢一点，不需要逼自己立刻给出结论。",
  8: "还有最后几个问题。不管结果是什么，愿意来到这里看见自己，已经是一件很重要的事。"
};

const results = [
  {
    min: 0,
    max: 8,
    level: "轻度感知",
    title: "你们之间有摩擦，但你的感受值得被认真对待",
    body: [
      "你感受到的困扰是真实的。它可能更多来自两代人之间不同的表达方式，也可能来自长期没有被好好回应的需求。",
      "请记住，想要被好好对待，是每个人都有权利要求的事。你不需要为关系里的不舒服感到内疚，也不需要说服自己「已经很好了」。"
    ]
  },
  {
    min: 9,
    max: 16,
    level: "中度感知",
    title: "你可能花了很多年，在一段需要小心翼翼的关系里",
    body: [
      "这些模式可能已经在影响你对自己的看法。你也许花了很多年在猜测别人的情绪、压缩自己的需求、怀疑自己是不是太敏感。",
      "你不是太敏感。你只是在一段需要小心翼翼的关系里，学会了保护自己。接下来，你可以开始慢慢把空间还给自己。"
    ]
  },
  {
    min: 17,
    max: 24,
    level: "高度感知",
    title: "你不是一个人，很多女儿都在慢慢把自己找回来",
    body: [
      "你描述的这些模式，可能已经系统性地影响了你对自己的认知和对关系的期待。你也许很早就学会了：我的感受不重要，我需要先满足她。",
      "这不是你天生的样子。这更像是你在那段关系里学会的生存方式。看见它，是把自己找回来的第一步。"
    ]
  }
];

let view = "intro";
let questionIndex = 0;
let answers = Array(questions.length).fill(null);

const card = document.querySelector("#card");
const progressWrap = document.querySelector("#progressWrap");
const progressBar = document.querySelector("#progressBar");
const progressLabel = document.querySelector("#progressLabel");
const progressCount = document.querySelector("#progressCount");

function cloneTemplate(id) {
  return document.querySelector(id).content.cloneNode(true);
}

function showProgress(visible) {
  progressWrap.hidden = !visible;
}

function updateProgress() {
  const current = questionIndex + 1;
  const percent = (current / questions.length) * 100;
  progressBar.style.width = `${percent}%`;
  progressLabel.textContent = `第 ${current} 题`;
  progressCount.textContent = `${current} / ${questions.length}`;
}

function render() {
  card.replaceChildren();

  if (view === "intro") {
    showProgress(false);
    card.append(cloneTemplate("#introTemplate"));
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
    }, 2200);
    return;
  }

  if (view === "buffer") {
    showProgress(false);
    card.append(cloneTemplate("#bufferTemplate"));
    return;
  }

  renderResult();
}

function renderQuestion() {
  const fragment = cloneTemplate("#questionTemplate");
  const answer = answers[questionIndex];
  const backButton = fragment.querySelector('[data-action="back"]');
  const nextButton = fragment.querySelector('[data-action="next"]');
  const optionsWrap = fragment.querySelector("#options");

  fragment.querySelector("#questionKicker").textContent = `第 ${questionIndex + 1} 题 · 共 ${questions.length} 题`;
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

  fragment.querySelector("#resultLevel").textContent = result.level;
  fragment.querySelector("#resultTitle").textContent = result.title;
  fragment.querySelector("#scoreLine").textContent = `本次得分：${score} / 24。分数只在当前页面计算，不会被保存。`;
  fragment.querySelector("#guideLink").href = GUIDE_LINK;

  result.body.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    copy.append(p);
  });

  card.append(fragment);
}

function start() {
  view = "question";
  questionIndex = 0;
  answers = Array(questions.length).fill(null);
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
  questionIndex = 0;
  answers = Array(questions.length).fill(null);
  render();
}

card.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;
  if (action === "start") start();
  if (action === "next") goNext();
  if (action === "back") goBack();
  if (action === "result") {
    view = "result";
    render();
  }
  if (action === "restart") restart();
  if (action === "select") {
    answers[questionIndex] = Number(target.dataset.score);
    render();
  }
});

render();
