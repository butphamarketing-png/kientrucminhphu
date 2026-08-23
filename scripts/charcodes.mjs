import fs from "fs";
const f = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/src/components/FloatingCta.tsx",
  "utf8",
);
const g = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/src/app/globals.css",
  "utf8",
);
function codes(label, s) {
  console.log(label, s, [...s].map((c) => c.charCodeAt(0)).join(","));
}
const ft = f.match(/progress-[a-z]+/)?.[0] || "";
const gt = g.match(/progress-[a-z]+/)?.[0] || "";
const fa = f.match(/active-[a-z]+/)?.[0] || "";
const ga = g.match(/active-[a-z]+/)?.[0] || "";
codes("FCTA progress", ft);
codes("CSS progress", gt);
codes("FCTA active", fa);
codes("CSS active", ga);
console.log("equal progress?", ft === gt, "equal active?", fa === ga);

const fb = f.match(/btn-phone-[a-z]+/g) || [];
const gb = g.match(/btn-phone-[a-z]+/g) || [];
console.log("FCTA btn", fb);
console.log("CSS btn unique", [...new Set(gb)]);
