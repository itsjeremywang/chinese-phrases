// Mini mode: one phrase at a time, sized for a phone home-screen app.
// Uses the same saved progress as the full app (in the same browser or home-screen app).

const STORAGE_KEY = "chinese-phrases-progress";
const POSITION_KEY = "chinese-phrases-mini-position"; // last phrase shown, so it reopens where you left off
const FILTER_KEY = "chinese-phrases-mini-filter";

let progress = load(STORAGE_KEY, {});
let filter = load(FILTER_KEY, "all");
let order = [];
let index = 0;

const $ = (id) => document.getElementById(id);
const current = () => PHRASES[order[index]];

// ---------- Saving ----------

function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be blocked; the page still works, it just won't remember.
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
  // Reopen on the last phrase you saw, if it's still in this list
  const last = load(POSITION_KEY, null);
  const found = order.findIndex((i) => PHRASES[i].hanzi === last);
  index = found === -1 ? 0 : found;
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
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  if (chineseVoice) utterance.voice = chineseVoice;
  utterance.rate = 0.9;
  speechSynthesis.speak(utterance);
}

// ---------- Rendering ----------

const STATUS_LABELS = { new: "New", learning: "Learning", known: "Known" };

function render() {
  // Characters known (same rule as the full app: in any phrase marked "Know it")
  const known = new Set();
  PHRASES.forEach((p) => {
    if (statusOf(p) === "known") for (const ch of p.hanzi) known.add(ch);
  });
  const knownTop = TOP_200.filter((ch) => known.has(ch)).length;
  $("chars-known").textContent = knownTop;
  $("bar-fill").style.width = `${(knownTop / TOP_200.length) * 100}%`;

  const empty = order.length === 0;
  $("empty").hidden = !empty;
  $("study").hidden = empty;
  $("counter").textContent = empty ? "0 / 0" : `${index + 1} / ${order.length}`;
  if (empty) return;

  const phrase = current();
  const status = statusOf(phrase);
  $("hanzi").textContent = phrase.hanzi;
  $("pinyin").textContent = phrase.pinyin;
  $("meaning").textContent = phrase.meaning;
  $("badge").textContent = STATUS_LABELS[status];
  $("badge").className = `badge ${status}`;
  $("mark-learning").classList.toggle("active", status === "learning");
  $("mark-known").classList.toggle("active", status === "known");
  save(POSITION_KEY, phrase.hanzi);
}

// ---------- Actions ----------

function go(step) {
  if (order.length === 0) return;
  index = (index + step + order.length) % order.length;
  render();
}

// Mark the current phrase, then move on to the next one.
function mark(status) {
  if (order.length === 0) return;
  const phrase = current();
  progress = load(STORAGE_KEY, {}); // pick up anything marked in the full version
  progress[phrase.hanzi] = status;
  save(STORAGE_KEY, progress);

  if (matchesFilter(phrase)) index++;
  else order.splice(index, 1);
  if (index >= order.length) index = 0;
  render();
}

// ---------- Event wiring ----------

$("filter").value = filter;
$("filter").onchange = (e) => {
  filter = e.target.value;
  save(FILTER_KEY, filter);
  buildOrder();
  index = 0;
  render();
};
$("hanzi").onclick = () => speak(current().hanzi);
$("prev").onclick = () => go(-1);
$("next").onclick = () => go(1);
$("mark-known").onclick = () => mark("known");
$("mark-learning").onclick = () => mark("learning");

// Swipe left for next, right for previous
let touchX = null;
let touchY = null;
$("card").addEventListener("touchstart", (e) => {
  touchX = e.touches[0].clientX;
  touchY = e.touches[0].clientY;
}, { passive: true });
$("card").addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  const dy = e.changedTouches[0].clientY - touchY;
  touchX = null;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
});

// Keyboard, for testing on a computer
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "SELECT") return;
  if (e.key === "ArrowRight") go(1);
  if (e.key === "ArrowLeft") go(-1);
});

// Coming back to the app (e.g. after using the full version) picks up the latest progress
window.addEventListener("pageshow", () => {
  progress = load(STORAGE_KEY, {});
  render();
});

buildOrder();
render();
