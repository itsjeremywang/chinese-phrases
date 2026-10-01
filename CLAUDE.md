# Chinese Phrases app

A beginner-friendly app for learning two-character Chinese phrases (simplified characters, pinyin, English meaning, audio, a per-character breakdown, and example sentences). Progress is tracked toward knowing the 200 most common characters.

## How it's built
- Plain HTML/CSS/JavaScript, no build step and no installs. Open `index.html` in a browser to run it.
- `phrases.js`: the phrase data (the `PHRASES` array). Kept as JS rather than JSON so it loads from `file://` without a server.
- `chars.js`: `TOP_200` (the 200 most frequent characters, from Jun Da's frequency list) and `CHARS` (character → [pinyin, meaning], used for the breakdown). Every character used in a phrase needs a `CHARS` entry.
- `app.js`: rendering, navigation, filtering, quiz mode, progress tracking (saved in `localStorage` under `chinese-phrases-progress`, keyed by phrase), and audio via the browser's Web Speech API (`speechSynthesis`, `zh-CN`).
- `styles.css`: styling, with light and dark mode.
- `serve.ps1`: optional tiny PowerShell web server (http://localhost:8123) used for previewing and testing; `../.claude/launch.json` points the preview tool at it.

- `phrases-common.js`: `TOP_400_PHRASES` (the 400 most common two-character words in spoken Chinese, from the OpenSubtitles zh_cn list in hermitdave/FrequencyWords, with traditional duplicates, fragments like 我要, names and profanity removed) and `PHRASES.push(...)` for the ones not already in `phrases.js`. Cards show a phrase's rank in this list.

## Coverage
Every `TOP_200` character appears in at least one phrase except 又 (almost always used on its own), and every `TOP_400_PHRASES` word is a phrase. The progress tracker counts characters only, not phrases (the owner's choice). Each example sentence must contain its phrase's exact characters so highlighting works.

## Conventions
- The owner is new to coding. Keep code simple and commented, and avoid frameworks or tools that need installing unless we agree to add them.
- Pinyin uses tone marks (nǐ hǎo), not tone numbers.
- The project uses Git. Commit after each working change with a plain-English message, so the owner can ask to undo or go back.

## Publishing
- Live site: https://itsjeremywang.github.io/chinese-phrases/ (GitHub Pages from `main`, public repo github.com/itsjeremywang/chinese-phrases). Pushing to `main` redeploys it within a minute or two.
- Commits use the GitHub no-reply email (set in this repo's git config); never commit the owner's personal email, since the repo is public.
- There's also a private claude.ai artifact copy, published from a single-file bundle of index.html + styles.css + the JS files. Shared pages block alert/confirm/prompt, so keep confirmations on the page.
