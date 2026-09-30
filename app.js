// Main app logic: shows one phrase at a time and speaks Chinese aloud.

let index = 0;
let order = PHRASES.map((_, i) => i); // display order (changed by Shuffle)
let answerShown = false;

const $ = (id) => document.getElementById(id);

// ---------- Speech ----------

let chineseVoice = null;

function pickVoice() {
  const voices = speechSynthesis.getVoices();
  chineseVoice =
    voices.find((v) => v.lang === "zh-CN") ||
    voices.find((v) => v.lang.startsWith("zh")) ||
    null;
  $("voice-warning").hidden = voices.length === 0 || chineseVoice !== null;
}

speechSynthesis.onvoiceschanged = pickVoice;
pickVoice();

function speak(text) {
  speechSynthesis.cancel(); // stop anything already playing
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  if (chineseVoice) utterance.voice = chineseVoice;
  utterance.rate = $("slow-toggle").checked ? 0.6 : 0.9;
  speechSynthesis.speak(utterance);
}

// ---------- Rendering ----------

function escapeHtml(s) {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function render() {
  const phrase = PHRASES[order[index]];
  const quiz = $("quiz-toggle").checked;

  $("counter").textContent = `${index + 1} / ${PHRASES.length}`;
  $("hanzi").textContent = phrase.hanzi;
  $("pinyin").textContent = phrase.pinyin;
  $("meaning").textContent = phrase.meaning;

  const hideAnswer = quiz && !answerShown;
  $("reveal").classList.toggle("hidden", hideAnswer);
  $("show-answer").hidden = !hideAnswer;

  const list = $("examples");
  list.innerHTML = "";
  phrase.examples.forEach((ex) => {
    const li = document.createElement("li");
    // Highlight the phrase inside the sentence
    const zhHtml = escapeHtml(ex.zh).split(phrase.hanzi).join(`<mark>${phrase.hanzi}</mark>`);
    li.innerHTML = `
      <button title="Play sentence">🔊</button>
      <div>
        <div class="ex-zh">${zhHtml}</div>
        ${hideAnswer ? "" : `<div class="ex-pinyin">${escapeHtml(ex.pinyin)}</div>
        <div class="ex-en">${escapeHtml(ex.en)}</div>`}
      </div>`;
    li.querySelector("button").onclick = () => speak(ex.zh);
    list.appendChild(li);
  });
}

function go(step) {
  index = (index + step + PHRASES.length) % PHRASES.length;
  answerShown = false;
  render();
}

function shuffle() {
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  index = 0;
  answerShown = false;
  render();
}

// ---------- Event wiring ----------

$("prev").onclick = () => go(-1);
$("next").onclick = () => go(1);
$("shuffle").onclick = shuffle;
$("play").onclick = () => speak(PHRASES[order[index]].hanzi);
$("hanzi").onclick = () => speak(PHRASES[order[index]].hanzi);
$("show-answer").onclick = () => { answerShown = true; render(); };
$("quiz-toggle").onchange = () => { answerShown = false; render(); };

document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT") return;
  if (e.key === "ArrowRight") go(1);
  if (e.key === "ArrowLeft") go(-1);
  if (e.key === " ") { e.preventDefault(); speak(PHRASES[order[index]].hanzi); }
});

render();
