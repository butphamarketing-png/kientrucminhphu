import fs from "fs";
import https from "https";

const out = "C:/Users/Admin/Downloads/minhphu-web/scripts/origin-home.html";

function fetchHtml() {
  return new Promise((resolve, reject) => {
    https
      .get("https://kientrucminhphu.com/", (res) => {
        let data = "";
        res.setEncoding("utf8");
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

const html = fs.existsSync(out)
  ? fs.readFileSync(out, "utf8")
  : await fetchHtml();
if (!fs.existsSync(out)) fs.writeFileSync(out, html);

function snip(label, start, len = 2000) {
  const i = html.indexOf(start);
  console.log("\n====", label, i, "====");
  if (i >= 0) console.log(html.slice(i, i + len).replace(/\s+/g, " ").slice(0, 2000));
}
snip("menu-mobile", 'id="menu-mobile"', 1600);
snip("fix-toolbar", "fix-toolbar", 1400);
snip("phonering", "phonering", 900);
snip("icon-phone", "icon-phone", 900);
snip("intro-btn", "intro-btn", 400);

const h = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/src/components/Header.tsx",
  "utf8",
);
console.log(
  "\nHeader classes:",
  [...h.matchAll(/className=\"([^\"]+)\"/g)].map((m) => m[1]).filter((x) => /menu|logo|ham|search|bar/.test(x)),
);
const css = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/public/css/style.css",
  "utf8",
);
console.log(
  "CSS menu classes:",
  [...css.matchAll(/\.(menu-[a-z0-9-]+)/g)].map((m) => m[1]).filter((v, i, a) => a.indexOf(v) === i).slice(0, 20),
);
