// Main app logic: shows one phrase at a time, speaks Chinese aloud,
// and remembers which phrases you know (saved in this browser).

const STORAGE_KEY = "chinese-phrases-progress";

let progress = loadProgress(); // e.g. { "你好": "known", "谢谢": "learning" }
let filter = "all";
let order = [];                // indexes into PHRASES that match the filter, in display order
let index = 0;                 // current position within `order`
let answerShown = false;

const $ = (id) => document.getElementById(id);
const current = () => PHRASES[order[index]];

// ---------- Saving progress ----------

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Storage can be blocked (e.g. private browsing); the app still works, it just won't remember.
  }
}

function statusOf(phrase) {
  return progress[phrase.hanzi] || "new";
}

function matchesFilter(phrase) {
  const status = statusOf(phrase);
  if (filter === "all") return true;
  if (filter === "notknown") return status !== "known";
  return status === filter;
}

function buildOrder() {
  order = PHRASES.map((_, i) => i).filter((i) => matchesFilter(PHRASES[i]));
  index = 0;
}

// A character counts as "known" if it appears in any phrase you know,
// and "learning" if it only appears in phrases you're still learning.
function charStatuses() {
  const result = {};
  PHRASES.forEach((phrase) => {
    const status = statusOf(phrase);
    if (status === "new") return;
    for (const ch of phrase.hanzi) {
      if (status === "known") result[ch] = "known";
      else if (!result[ch]) result[ch] = "learning";
    }
  });
  return result;
}

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

const STATUS_LABELS = { new: "New", learning: "Learning", known: "Known" };

function render() {
  renderProgress();

  const empty = order.length === 0;
  $("empty").hidden = !empty;
  $("study").hidden = empty;
  if (empty) return;

  const phrase = current();
  const status = statusOf(phrase);
  const hideAnswer = $("quiz-toggle").checked && !answerShown;

  $("counter").textContent = `${index + 1} / ${order.length}`;
  $("badge").textContent = STATUS_LABELS[status];
  $("badge").className = `badge ${status}`;
  $("hanzi").textContent = phrase.hanzi;
  const phraseRank = TOP_400_PHRASES.indexOf(phrase.hanzi);
  $("phrase-rank").textContent = phraseRank >= 0 ? `#${phraseRank + 1} most common phrase` : "";
  $("pinyin").textContent = phrase.pinyin;
  $("meaning").textContent = phrase.meaning;
  $("reveal").classList.toggle("hidden", hideAnswer);
  $("show-answer").hidden = !hideAnswer;
  $("mark-learning").classList.toggle("active", status === "learning");
  $("mark-known").classList.toggle("active", status === "known");

  // Character breakdown: one tile per character
  const breakdown = $("breakdown");
  breakdown.innerHTML = "";
  for (const ch of phrase.hanzi) {
    const [pinyin, meaning] = CHARS[ch] || ["", ""];
    const rank = TOP_200.indexOf(ch);
    const tile = document.createElement("button");
    tile.className = "char-tile";
    tile.title = "Click to hear this character";
    tile.innerHTML = `
      <span class="ct-char">${ch}</span>
      <span class="ct-pinyin">${escapeHtml(pinyin)}</span>
      <span class="ct-meaning">${escapeHtml(meaning)}</span>
      ${rank >= 0 ? `<span class="ct-rank">#${rank + 1} most common</span>` : ""}`;
    tile.onclick = () => speak(ch);
    breakdown.appendChild(tile);
  }

  // Example sentences
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

function renderProgress() {
  const chars = charStatuses();
  const knownTop = TOP_200.filter((ch) => chars[ch] === "known").length;
  $("chars-known").textContent = knownTop;
  $("bar-fill").style.width = `${(knownTop / TOP_200.length) * 100}%`;

  const counts = { new: 0, learning: 0, known: 0 };
  PHRASES.forEach((p) => counts[statusOf(p)]++);
  $("phrase-stats").textContent =
    `Phrases: ${counts.known} known · ${counts.learning} learning · ${counts.new} new`;

  if (!$("grid-panel").hidden) {
    const grid = $("char-grid");
    grid.innerHTML = "";
    TOP_200.forEach((ch, i) => {
      const cell = document.createElement("button");
      cell.className = `grid-char ${chars[ch] || ""}`;
      cell.textContent = ch;
      cell.title = `#${i + 1} · ${(CHARS[ch] || [""])[0]}`;
      cell.onclick = () => jumpToChar(ch);
      grid.appendChild(cell);
    });
  }
}

// ---------- Actions ----------

function go(step) {
  if (order.length === 0) return;
  index = (index + step + order.length) % order.length;
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

// Mark the current phrase, then move on to the next one.
function mark(status) {
  if (order.length === 0) return;
  const phrase = current();
  progress[phrase.hanzi] = status;
  saveProgress();

  if (matchesFilter(phrase)) {
    index++;
  } else {
    order.splice(index, 1); // it no longer belongs in this list; the next phrase slides into place
  }
  if (index >= order.length) index = 0;
  answerShown = false;
  render();
}

function setFilter(value) {
  filter = value;
  $("filter").value = value;
  buildOrder();
  answerShown = false;
  render();
}

// Jump to the first phrase that uses a character (from the character grid).
function jumpToChar(ch) {
  setFilter("all");
  const found = order.findIndex((i) => PHRASES[i].hanzi.includes(ch));
  if (found === -1) {
    $("grid-note").textContent = `${ch} doesn't appear in a phrase yet.`;
    return;
  }
  $("grid-note").textContent = "";
  index = found;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Reset asks for a second click instead of a pop-up (pop-ups are blocked on shared pages).
let resetArmed = false;
let resetTimer = null;

function resetProgress() {
  if (!resetArmed) {
    resetArmed = true;
    $("reset").textContent = "Click again to clear all progress";
    resetTimer = setTimeout(() => {
      resetArmed = false;
      $("reset").textContent = "Reset";
    }, 4000);
    return;
  }
  clearTimeout(resetTimer);
  resetArmed = false;
  $("reset").textContent = "Reset";
  progress = {};
  saveProgress();
  buildOrder();
  render();
}

// ---------- Event wiring ----------

$("prev").onclick = () => go(-1);
$("next").onclick = () => go(1);
$("shuffle").onclick = shuffle;
$("play").onclick = () => speak(current().hanzi);
$("hanzi").onclick = () => speak(current().hanzi);
$("show-answer").onclick = () => { answerShown = true; render(); };
$("quiz-toggle").onchange = () => { answerShown = false; render(); };
$("mark-known").onclick = () => mark("known");
$("mark-learning").onclick = () => mark("learning");
$("filter").onchange = (e) => setFilter(e.target.value);
$("reset").onclick = resetProgress;
$("grid-toggle").onclick = () => {
  const panel = $("grid-panel");
  panel.hidden = !panel.hidden;
  $("grid-toggle").textContent = panel.hidden ? "Show characters" : "Hide characters";
  renderProgress();
};

document.addEventListener("keydown", (e) => {
  if (["INPUT", "SELECT"].includes(e.target.tagName)) return;
  if (e.key === "ArrowRight") go(1);
  if (e.key === "ArrowLeft") go(-1);
  if (e.key === " ") { e.preventDefault(); if (order.length) speak(current().hanzi); }
  if (e.key === "k" || e.key === "K") mark("known");
  if (e.key === "l" || e.key === "L") mark("learning");
});

buildOrder();
render();
