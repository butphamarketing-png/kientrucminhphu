import sharp from "sharp";
import { copyFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "public/brand/favicon-source.jpg");

// Same file as kientrucminhphu.com shortcut icon — full logo on white
copyFileSync(src, join(root, "public/brand/favicon.jpg"));

const meta = await sharp(src).metadata();
const side = Math.min(meta.width, meta.height);
const left = Math.floor((meta.width - side) / 2);
const top = Math.floor((meta.height - side) / 2);

const square = sharp(src).extract({ left, top, width: side, height: side });

const sizes = [
  [16, "public/brand/favicon-16.png"],
  [32, "public/brand/favicon-32.png"],
  [48, "public/brand/favicon-48.png"],
  [192, "public/brand/favicon-192.png"],
  [512, "public/brand/favicon-512.png"],
  [180, "public/brand/apple-touch-icon.png"],
  [32, "src/app/icon.png"],
];

for (const [size, rel] of sizes) {
  await square
    .clone()
    .resize(size, size, { fit: "cover" })
    .png()
    .toFile(join(root, rel));
  console.log("wrote", rel);
}

const png16 = await square.clone().resize(16, 16).png().toBuffer();
const png32 = await square.clone().resize(32, 32).png().toBuffer();
const png48 = await square.clone().resize(48, 48).png().toBuffer();

function pngToIco(buffers, dims) {
  const count = buffers.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const entries = buffers.map((buf, i) => {
    const e = { buf, offset, size: buf.length, dim: dims[i] };
    offset += buf.length;
    return e;
  });
  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);
  let o = 6;
  for (const e of entries) {
    const d = e.dim;
    out.writeUInt8(d === 256 ? 0 : d, o);
    out.writeUInt8(d === 256 ? 0 : d, o + 1);
    out.writeUInt8(0, o + 2);
    out.writeUInt8(0, o + 3);
    out.writeUInt16LE(1, o + 4);
    out.writeUInt16LE(32, o + 6);
    out.writeUInt32LE(e.size, o + 8);
    out.writeUInt32LE(e.offset, o + 12);
    o += 16;
  }
  for (const e of entries) e.buf.copy(out, e.offset);
  return out;
}

const ico = pngToIco([png16, png32, png48], [16, 32, 48]);
for (const p of [
  "public/brand/favicon.ico",
  "public/favicon.ico",
  "src/app/favicon.ico",
]) {
  writeFileSync(join(root, p), ico);
  console.log("wrote", p);
}

console.log("done — full logo favicon", side, "x", side);
