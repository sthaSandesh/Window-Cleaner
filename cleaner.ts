import fs from "fs";
import path from "path";
import os from "os";

function cleanFolder(folderPath: string): void {
  if (!fs.existsSync(folderPath)) return;

  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const fullPath = path.join(folderPath, file);
    try {
      fs.rmSync(fullPath, {
        recursive: true,
        force: true
      });
    } catch {
      console.log("Skipped:", fullPath);
    }
  }
}

const paths = [
  os.tmpdir(),
  "C:\\Windows\\Temp",
  "C:\\Windows\\Prefetch"
];

for (const p of paths) {
  console.log(`Cleaning: ${p}`);
  cleanFolder(p);
}

console.log("Cleaning finished ✅");