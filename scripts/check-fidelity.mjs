import fs from "fs";
import https from "https";

const out = "C:/Users/Admin/Downloads/minhphu-web/scripts/origin-home.html";

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return get(res.headers.location).then(resolve, reject);
        }
        let data = "";
        res.setEncoding("utf8");
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

let html = fs.existsSync(out) ? fs.readFileSync(out, "utf8") : "";
if (!html || html.length < 1000) {
  html = await get("https://kientrucminhphu.com/");
  fs.writeFileSync(out, html);
  console.log("downloaded", html.length);
}

function snip(label, start, len = 1800) {
  const i = html.indexOf(start);
  console.log("\n====", label, i, "====");
  if (i >= 0) console.log(html.slice(i, i + len).replace(/\s+/g, " ").slice(0, 1800));
}

snip("menu-mobile", 'id="menu-mobile"', 1600);
snip("fix-toolbar", "fix-toolbar", 1400);
snip("toolbar", 'class="toolbar"', 800);
snip("phonering-alo", "phonering-alo", 900);
snip("support-online", "support-online", 900);

const style = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/public/css/style.css",
  "utf8",
);
for (const needle of [
  "menu-bar-res",
  "menu-bar-res",
  "menu-mobile-width",
  "logo-menu-mobile",
  "logo-menu",
]) {
  console.log(needle, "in style.css?", style.includes("." + needle) || style.includes(needle));
}

const header = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/src/components/Header.tsx",
  "utf8",
);
console.log(
  "\nHeader menu-related classes:",
  [...header.matchAll(/className=\"([^\"]+)\"/g)]
    .map((m) => m[1])
    .filter((x) => /menu|logo|ham|search|bar/i.test(x)),
);

// broken quote check
const orig = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/public/media/css/original.css",
  "utf8",
);
const i = orig.indexOf("bg_hotline");
console.log("\nbg_hotline context:", JSON.stringify(orig.slice(Math.max(0, i - 30), i + 50)));
