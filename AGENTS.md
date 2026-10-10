# 协作入口

- 先读根目录 CLAUDE.md，再读目标目录的 CLAUDE.md。
- 修改代码时检查 INPUT、OUTPUT、POS 与固定 PROTOCOL 文件头。
- 文件、接口或职责改变时同步模块地图。
- 展示名始终使用 huxi；当前范围为本地静态个人站。
- 网页验证使用当前会话的浏览器工具；GitHub 使用插件或 gh。
- 开发样本通过 page.dev.tsx 注册，生产必须排除。
- 发布前运行 npm run build 并检查内置的导出契约。

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
