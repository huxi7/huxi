/**
 * [INPUT]: 依赖 Next.js 生成的 out/ 静态产物。
 * [OUTPUT]: 对六个页面及开发代码排除边界执行断言。
 * [POS]: 生产构建的最后一关；不依赖开发服务器状态。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import path from "node:path";

const output = path.resolve("out");
const routes = [
  ["index.html", "en"], ["blog/index.html", "en"], ["cv/index.html", "en"],
  ["zh/index.html", "zh-CN"], ["zh/blog/index.html", "zh-CN"], ["zh/cv/index.html", "zh-CN"],
];

for (const [file, language] of routes) {
  const html = await readFile(path.join(output, file), "utf8");
  assert.match(html, new RegExp(`<html[^>]*lang="${language}"`), `${file}: wrong HTML language`);
  assert.match(html, /<h1[\s>]/, `${file}: missing prerendered heading`);
  assert.match(html, /huxi/, `${file}: missing identity`);
  assert.doesNotMatch(html, /href="\/design\/?"/, `${file}: development navigation leaked`);
}

await assert.rejects(access(path.join(output, "design")), "Design route must not be exported");

async function verifyDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await verifyDirectory(file);
    else if (/\.(html|js|json|txt)$/.test(entry.name)) {
      const text = await readFile(file, "utf8");
      assert.ok(!text.includes("HUXI_DESIGN_WORKBENCH"), `Development workbench leaked: ${file}`);
    }
  }
}
await verifyDirectory(output);
process.stdout.write("Static export verified: 6 localized pages; no design route, link, or workbench payload.\n");
