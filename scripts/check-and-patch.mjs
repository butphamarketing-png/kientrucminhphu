import fs from "fs";
const h = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/src/components/Header.tsx",
  "utf8",
);
const g = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/src/app/globals.css",
  "utf8",
);
const f = fs.readFileSync(
  "C:/Users/Admin/Downloads/minhphu-web/src/components/FloatingCta.tsx",
  "utf8",
);
console.log("Header mobile classes", h.match(/menu-mobile[\w-]*/g));
console.log("globals mobile classes", g.match(/\.menu-mobile[\w-]*/g));
console.log(
  "FCTA classes",
  f.match(/progress-[\w-]+|active-[\w-]+|btn-phone-[\w-]+|fix-toolbar/g),
);
console.log(
  "globals phone/progress",
  g.match(/\.progress-[\w.-]+|\.btn-phone-[\w.-]+|\.fix-toolbar/g)?.slice(0, 20),
);
console.log(
  "icon-btn",
  fs.existsSync(
    "C:/Users/Admin/Downloads/minhphu-web/public/media/assets/images/icon-btn.png",
  ),
);
console.log(
  "fp-phone",
  fs.existsSync(
    "C:/Users/Admin/Downloads/minhphu-web/public/media/assets/images/fp-phone.png",
  ),
);
// Append mmenu styles if missing
if (!g.includes(".mmenu-overlay")) {
  const extra = `

/* mmenu-like mobile panel */
.mmenu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.45);
  z-index: 120;
  opacity: 0;
  visibility: hidden;
  transition: .25s;
}
.mmenu-overlay.open { opacity: 1; visibility: visible; }
#mmenu {
  position: fixed;
  top: 0; left: 0;
  width: min(320px, 88vw);
  height: 100%;
  background: #fff;
  z-index: 130;
  transform: translateX(-105%);
  transition: transform .3s ease;
  overflow-y: auto;
  box-shadow: 2px 0 16px rgba(0,0,0,.15);
}
#mmenu.open { transform: translateX(0); }
#mmenu .mmenu-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid #eee;
}
#mmenu .mmenu-close {
  border: 0; background: none; font-size: 20px; cursor: pointer; color: #333;
}
#mmenu > ul { list-style: none; margin: 0; padding: 8px 0 40px; }
#mmenu > ul > li { border-bottom: 1px solid #f0f0f0; }
#mmenu .mmenu-row { display: flex; align-items: center; }
#mmenu .mmenu-row > a,
#mmenu > ul > li > a {
  flex: 1;
  display: block;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: #1c1c1c;
}
#mmenu .mmenu-toggle {
  border: 0; background: none; padding: 12px 16px; cursor: pointer; color: #666;
}
#mmenu .mmenu-toggle .up { transform: rotate(180deg); display: inline-block; }
#mmenu .mmenu-sub { list-style: none; margin: 0; padding: 0 0 8px 12px; }
#mmenu .mmenu-sub a {
  display: block;
  padding: 8px 16px;
  font-size: 13px;
  color: #444;
  text-transform: none;
  font-weight: 500;
}
.search-drop, .search_box_hide {
  position: absolute;
  right: 0;
  top: calc(100% + 6px);
  z-index: 50;
  background: #fff;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 999px;
  overflow: hidden;
  width: 220px;
  box-shadow: 0 6px 18px rgba(0,0,0,.12);
}
.search-drop input, .search_box_hide input {
  width: 100%;
  border: 0;
  outline: none;
  padding: 10px 14px;
  font-size: 13px;
}
#menu-mobile .btn-search { position: relative; }
#menu .btn-search { position: relative; }
.logo-menu img, .logo-menu-mobile img { height: 52px; width: auto; object-fit: contain; }
@media (min-width: 992px) {
  #mmenu, .mmenu-overlay { display: none !important; }
}
`;
  fs.writeFileSync(
    "C:/Users/Admin/Downloads/minhphu-web/src/app/globals.css",
    g + extra,
  );
  console.log("appended mmenu styles");
}
