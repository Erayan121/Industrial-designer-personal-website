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

for (const text of [
  "郭梓扬",
  "Erayan",
  "Industrial Designer",
  "Komorebi",
  "Tendio",
  "Vkiku",
  "Kidspark",
  "Senhorae",
  "Janet Motor",
]) {
  assert.equal(html.includes(text), true, `index.html should contain ${text}`);
}

assert.match(html, /lang="en"/);
assert.match(html, /aria-label="Switch language"/);
assert.match(html, /prefers-reduced-motion/);
assert.match(css, /oklch\(/);
assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
assert.match(js, /pointermove/);
assert.match(js, /IntersectionObserver/);
