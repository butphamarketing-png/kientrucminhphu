import fs from "fs";
const html = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/scripts/origin-home.html",
  "utf8",
);
function snip(label, start, len = 2000) {
  const i = html.indexOf(start);
  console.log("\n====", label, i, "====");
  if (i >= 0) console.log(html.slice(i, i + len).replace(/\s+/g, " ").slice(0, 2000));
}
snip("css", 'rel="stylesheet"', 1200);
snip("menu", 'id="menu"', 4000);
snip("intro", 'id="intro"', 2500);
snip("field", 'id="field"', 1800);
snip("contruction", 'id="contruction"', 1500);
snip("house", 'id="house-design"', 2000);
snip("news", 'news-newsletter', 2500);
snip("footer", 'id="footer"', 2000);
