import fs from "fs";

const src = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/public/css/style.css",
  "utf8",
);
const j = src.indexOf(":root");
let out = src.slice(j >= 0 ? j : 0);

// Normalize curly/smart quotes that break PostCSS / browsers
out = out
  .replace(/[\u201C\u201D\u2018\u2019\u00AB\u00BB]/g, '"')
  .replace(/url\((['"]?)\.\.\/images\//g, "url($1/media/assets/images/")
  .replace(/url\((['"]?)\.\.\/img\//g, "url($1/media/assets/img/")
  .replace(/url\((['"]?)fonts\//g, "url($1/css/fonts/");

out = out.replace(/body\s*\{\s*line-height:\s*1\s*\}/g, "/* body reset skipped */");

const media = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/public/css/media.css",
  "utf8",
);
const mediaOut = media
  .replace(/[\u201C\u201D\u2018\u2019\u00AB\u00BB]/g, '"')
  .replace(/url\((['"]?)\.\.\/images\//g, "url($1/media/assets/images/")
  .replace(/url\((['"]?)\.\.\/img\//g, "url($1/media/assets/img/");

const bridge = `
/* Bridge: original .center == our container */
.center {
  position: relative;
  max-width: 1252px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
}
.center1366, .center1366np {
  position: relative;
  max-width: 1396px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
}
.w-clear::after { content:""; display:block; clear:both; }
.d-flex { display:flex; }
.flex-wrap { flex-wrap:wrap; }
.justify-content-between { justify-content:space-between; }
.align-items-center { align-items:center; }
.align-items-start { align-items:flex-start; }
.text-decoration-none { text-decoration:none !important; }
.row { display:flex; flex-wrap:wrap; margin:0 -15px; }
.col-12 { width:100%; padding:0 15px; box-sizing:border-box; }
.col-sm-6, .col-md-6 { width:100%; padding:0 15px; box-sizing:border-box; }
@media (min-width:576px){ .col-sm-6{ width:50%; } }
@media (min-width:768px){ .col-md-6{ width:50%; } }
`;

const final = bridge + "\n" + out + "\n" + mediaOut;
const destDir = "C:/Users/Admin/Downloads/minhphu-web/public/media/css";
fs.mkdirSync(destDir, { recursive: true });
fs.writeFileSync("C:/Users/Admin/Downloads/minhphu-web/public/css/original.css", final);
fs.writeFileSync(`${destDir}/original.css`, final);
console.log("wrote", final.length, "bytes");
console.log("sample", (final.match(/url\([^)]*bg-gt[^)]*\)/) || [])[0]);
// check for bad quotes around that line
const line = final.split("\n").find((l) => l.includes("bg-gt"));
console.log("line codes", [...(line || "")].slice(70, 90).map((c) => c.charCodeAt(0)));
