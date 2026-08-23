import fs from "fs";

const files = [
  "C:/Users/Admin/Downloads/minhphu-web/public/css/style.css",
  "C:/Users/Admin/Downloads/minhphu-web/public/media/css/original.css",
];

for (const f of files) {
  let s = fs.readFileSync(f, "utf8");
  const before = (s.match(/bg_hotline\.png\)/g) || []).length;
  // Fix: url("/path.png)  -> url("/path.png")
  s = s.replace(/bg_hotline\.png\)/g, 'bg_hotline.png")');
  // Also fix any similar broken quotes: .png); with odd quotes before
  s = s.replace(/url\("([^"]+\.(?:png|jpg|jpeg|webp|svg|gif))\)/gi, 'url("$1")');
  fs.writeFileSync(f, s);
  const after = JSON.stringify(
    s.slice(Math.max(0, s.indexOf("bg_hotline") - 20), s.indexOf("bg_hotline") + 40),
  );
  console.log(f, "fixed", before, after);
}
