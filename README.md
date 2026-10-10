# huxi — 个人主页

连接作品、写作与履历的个人入口。英文默认，中文位于 `/zh/`，两种语言都使用展示名 huxi。

技术栈：Next.js 16 + React 19 + TypeScript + Tailwind CSS 4。静态导出，无后端。

## 运行

```sh
npm install
npm run dev        # http://localhost:3000
```

开发样本位于 `/design/`，也可从首页页脚进入；生产构建自动排除。

## 构建

```sh
npm run build
```

产物 `out/` 是可直接托管的静态站点。构建末尾运行导出契约（`scripts/verify-export.mjs`），确认六个双语页面存在，且设计路由与样本代码未进入产物。生产不需要 Node.js 服务。

## 结构

```
src/app/        分语言路由与根布局（英文根路径、中文 /zh/）
src/components/ 页面组件、呼吸与批注交互
src/data/       双语文案、项目与外链的唯一来源
src/design/     仅开发注册的设计样本
src/styles/     Tailwind 主题与全局规则
```

每个目录的 `CLAUDE.md` 描述其职责与接口，协作约定见 `AGENTS.md`。

## 修改内容

- `src/data/site.ts`：双语文案、头像路径、项目与社交链接。填写其中 `destinations` 的外部地址后，首页 Blog / CV 入口改为该地址。
- `src/styles/globals.css`：主题色、字体、页面宽度与呼吸关键帧。
- `src/data/motion.ts`：一次呼吸的时长。

## 素材与致谢

- `public/avatar.jpg`：本人头像原图，页面内仅做圆形裁切。
- 技术图标取自 [Simple Icons](https://simpleicons.org/)（CC0），保留官方品牌色。
- 结构密度参考 [ruru.build](https://ruru.build/) 与 [sn0w.fyi](https://sn0w.fyi/)；页面代码与呼吸标记为本项目独立实现。

个人项目，当前仅本地开发，尚未配置正式域名。
