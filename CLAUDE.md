# huxi — 连接作品、写作与履历的个人主页
Next.js 16.4 + React 19.3 + TypeScript 7 + Tailwind CSS 4.3

<directory>
src/ - 页面、内容与设计变量（5 子目录：app、components、data、design、styles）
public/ - 随静态站点发布的品牌资源
scripts/ - 生产导出契约验证
</directory>

<config>
package.json - 固定直接依赖与开发、构建命令
package-lock.json - 固定完整依赖树
next.config.ts - 静态导出与开发专用页面识别
postcss.config.mjs - Tailwind CSS 编译入口
tsconfig.json - 严格 TypeScript 与 @/ 路径映射
next-env.d.ts - Next.js 生成的类型入口
.gitignore - 排除依赖、构建产物与本地配置
.nvmrc - 固定 Cloudflare Pages 构建的 Node 版本（22）
AGENTS.md - 协作入口与 Next.js 自动维护的版本提示
README.md - 运行方式、内容入口与素材依据
</config>

## 约定
- 英文位于根路径；中文位于 /zh/。
- 两种语言均使用展示名 huxi。
- 页首使用真实头像；同心呼吸环融入同一入口。
- 两组根布局分别输出正确的 html lang。
- 公开内容来自 src/data/site.ts。
- Tailwind 主题来自 src/styles/globals.css。
- 客户端代码只负责呼吸、局部批注和设计样本。
- 批注支持悬停、聚焦、轻点与 Escape。
- 普通交互使用中性灰；苔绿用于呼吸、批注与焦点；技术图标保留官方品牌色。
- 项目行单行呈现；右侧默认技术栈图标，悬停或聚焦换出跳转地址。
- 隐藏主滚动条；内容仍可滚动，当前文案单屏放下。
- 博客与 CV 当前是可访问的过渡页。
- 首页底部左侧放社交图标；右侧放 CV 文字入口。
- /design/ 只在开发时注册。
- 生产构建必须通过静态导出契约验证。
- 页面使用本地字体；不接入统计服务。
- 严格 JSON 与生成文件不添加契约注释。

法则：极简·稳定·导航·版本精确。
