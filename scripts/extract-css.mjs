import fs from "fs";
const css = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/public/css/original.css",
  "utf8",
);
const keys = [
  "field-content",
  "news-content",
  "contruction-content",
  "house-design-list",
  "house-design-click",
  "intro-left",
  "intro-right",
  "intro-title",
  "intro-short",
  "intro-desc",
  "intro-btn",
  "news-title",
  "newsletter",
  "footer-tit",
  "logo-menu",
  "btn-more",
  "slideshow",
  "control-slideshow",
  "news-img",
  "news-name",
  "news-desc",
  "center1366",
];
for (const p of keys) {
  const re = new RegExp(
    `[.#]?${p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^{\\n]*\\{[^}]*\\}`,
    "g",
  );
  const m = css.match(re) || [];
  console.log("\n---", p, m.length);
  m.slice(0, 5).forEach((x) => console.log(x.slice(0, 350)));
}
// also find .news{ and .newsletter{
for (const p of [".news{", ".newsletter{", ".field-content", ".news-content"]) {
  const i = css.indexOf(p);
  console.log("\nidx", p, i);
  if (i >= 0) console.log(css.slice(i, i + 400));
}
