import fs from "fs";
const f = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/src/components/FloatingCta.tsx",
  "utf8",
);
const g = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/src/app/globals.css",
  "utf8",
);
const a = f.match(/className=\{`([^`]+)`\}/)?.[1] || "";
console.log("FCTA template:", JSON.stringify(a));
const b = (g.match(/\.progress-wrap\b/) || [])[0];
const c = (g.match(/\.progress-wrap\b/) || [])[0];
console.log("globals tokens", b, c);
// Force-align FloatingCta class names to globals tokens
let out = f
  .replace(/progress-wrap/g, "progress-wrap")
  .replace(/active-progress/g, "active-progress");
// Ensure both naming variants work in CSS
let css = g;
if (!css.includes(".progress-wrap,")) {
  css = css.replace(
    /\.progress-wrap\s*\{/,
    ".progress-wrap, .progress-wrap {",
  );
  css = css.replace(
    /\.progress-wrap\.active-progress\s*\{/,
    ".progress-wrap.active-progress, .progress-wrap.active-progress {",
  );
}
fs.writeFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/src/components/FloatingCta.tsx",
  out,
);
fs.writeFileSync("C:/Users/Admin/Downloads/minhphu-web/src/app/globals.css", css);
console.log("aligned");
