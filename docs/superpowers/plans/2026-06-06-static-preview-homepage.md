# Static Preview Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a first static preview of Erayan's bilingual personal brand homepage using the confirmed hero photo and six work cover images.

**Architecture:** This preview uses plain `index.html`, `styles.css`, and `script.js` so it can be opened locally without installing dependencies. Images are copied into `public/assets/` with stable ASCII filenames. The structure stays compatible with a later Astro migration by keeping content sections and asset names explicit.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node.js verification script.

---

### Task 1: Preview Acceptance Test

**Files:**
- Create: `tests/site-check.mjs`
- Later checked: `index.html`
- Later checked: `styles.css`
- Later checked: `script.js`
- Later checked: `public/assets/*`

- [ ] **Step 1: Write the failing test**

```javascript
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "public/assets/hero-erayan.jpg",
  "public/assets/work-komorebi.png",
  "public/assets/work-tendio.jpg",
  "public/assets/work-vkiku.png",
  "public/assets/work-kidspark.png",
  "public/assets/work-senhorae.jpg",
  "public/assets/work-janet-motor.png",
];

for (const file of requiredFiles) {
  assert.equal(existsSync(file), true, `${file} should exist`);
}

const html = readFileSync("index.html", "utf8");
const css = readFileSync("styles.css", "utf8");
const js = readFileSync("script.js", "utf8");

for (const text of ["郭梓扬", "Erayan", "Industrial Designer", "Komorebi", "Tendio", "Vkiku", "Kidspark", "Senhorae", "Janet Motor"]) {
  assert.equal(html.includes(text), true, `index.html should contain ${text}`);
}

assert.match(html, /lang="en"/);
assert.match(html, /aria-label="Switch language"/);
assert.match(html, /prefers-reduced-motion/);
assert.match(css, /oklch\(/);
assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
assert.match(js, /pointermove/);
assert.match(js, /IntersectionObserver/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/site-check.mjs`

Expected: `AssertionError` because `index.html` does not exist yet.

### Task 2: Static Preview Files

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`
- Create/copy: `public/assets/hero-erayan.jpg`
- Create/copy: `public/assets/work-komorebi.png`
- Create/copy: `public/assets/work-tendio.jpg`
- Create/copy: `public/assets/work-vkiku.png`
- Create/copy: `public/assets/work-kidspark.png`
- Create/copy: `public/assets/work-senhorae.jpg`
- Create/copy: `public/assets/work-janet-motor.png`

- [ ] **Step 1: Copy confirmed images**

Copy each confirmed source file into `public/assets/` with the stable filenames listed above.

- [ ] **Step 2: Build the HTML**

Create a single page with hero, About, Works, and Contact sections. Include bilingual copy, the supplied hero image, and all six work cover images.

- [ ] **Step 3: Build the CSS**

Use OKLCH tokens, restrained typography, a black hero surface, responsive layouts, keyboard-visible focus, and reduced-motion handling.

- [ ] **Step 4: Build the JavaScript**

Add language switching, subtle pointer-driven hero depth, work-card reveal state on tap, and scroll reveal using `IntersectionObserver`.

- [ ] **Step 5: Run test to verify it passes**

Run: `node tests/site-check.mjs`

Expected: process exits successfully with no assertion failures.

### Task 3: Manual Preview

**Files:**
- Verify: `index.html`
- Verify: `styles.css`
- Verify: `script.js`

- [ ] **Step 1: Start a simple local server**

Run: `python -m http.server 4173`

Expected: local page available at `http://localhost:4173`.

- [ ] **Step 2: Inspect in browser**

Open the page and verify the hero image, bilingual controls, work gallery, hover/tap states, and responsive layout.

- [ ] **Step 3: Commit**

Run:

```bash
git add index.html styles.css script.js public/assets docs/superpowers/plans/2026-06-06-static-preview-homepage.md tests/site-check.mjs
git commit -m "feat: add static homepage preview"
git push
```
