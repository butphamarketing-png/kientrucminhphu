import fs from "fs";
const h = fs.readFileSync(`${process.env.TEMP}/mp-home.html`, "utf8");
const cssLinks = [...h.matchAll(/href="([^"]+\.css[^"]*)"/g)].map((m) => m[1]);
console.log("CSS:", cssLinks.join("\n"));
const fonts = [...h.matchAll(/fonts\.googleapis[^"']+/g)];
console.log("FONTS:", fonts.map((m) => m[0]));
// root vars
const style = fs.readFileSync(`${process.env.TEMP}/mp-style.css`, "utf8");
console.log("ROOT", style.slice(0, 800));
console.log("\n--color", (style.match(/--color[^;]+;/g) || []).slice(0, 20));
