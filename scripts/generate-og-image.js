import { createCanvas, loadImage } from "canvas";
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateOGImage() {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, "#222831");
  gradient.addColorStop(1, "#393E46");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);

  const faviconPath = path.join(
    dirname(__dirname),
    "public",
    "android-chrome-512x512.png"
  );
  const favicon = await loadImage(faviconPath);

  const size = 300;
  const x = (1200 - size) / 2;
  const y = (630 - size) / 2;

  ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 10;
  ctx.drawImage(favicon, x, y, size, size);

  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  ctx.font = 'bold 60px "Arial"';
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("Matheus Melotti", 600, y + size + 40);

  ctx.font = '40px "Arial"';
  ctx.fillText("Data Scientist", 600, y + size + 120);

  const buffer = canvas.toBuffer("image/png");
  const outputPath = path.join(dirname(__dirname), "public", "og-image.jpg");

  await sharp(buffer).jpeg({ quality: 90 }).toFile(outputPath);

  console.log("OG image generated successfully!");
}

generateOGImage().catch(console.error);
