# Chinese Phrases app

A beginner-friendly app for learning two-character Chinese phrases (simplified characters, pinyin, English meaning, audio, and 2–3 example sentences).

## How it's built
- Plain HTML/CSS/JavaScript, no build step and no installs. Open `index.html` in a browser to run it.
- `phrases.js`: the phrase data (the `PHRASES` array). Kept as JS rather than JSON so it loads from `file://` without a server.
- `app.js`: rendering, navigation, quiz mode, and audio via the browser's Web Speech API (`speechSynthesis`, `zh-CN`).
- `styles.css`: styling, with light and dark mode.

## Conventions
- The owner is new to coding. Keep code simple and commented, and avoid frameworks or tools that need installing unless we agree to add them.
- Pinyin uses tone marks (nǐ hǎo), not tone numbers.
