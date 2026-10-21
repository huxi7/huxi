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
README.md - 项目简介、开发构建命令与许可证入口
LICENSE - AGPL-3.0 完整许可文本
</config>

## 约定
- 英文位于根路径；中文位于 /zh/。
- 两种语言均使用展示名 huxi。
- 页首使用 36px 真实头像；点击范围为 64px。
- 两组根布局分别输出正确的 html lang。
- 公开内容来自 src/data/site.ts。
- Tailwind 主题来自 src/styles/globals.css。
- 客户端代码只负责呼吸、局部批注和设计样本。
- 批注支持悬停、聚焦、轻点与 Escape。
- 普通交互使用中性灰；苔绿用于呼吸、批注与焦点；技术图标保留官方品牌色。
- 640px 以上项目行单行呈现；右侧技术图标在悬停或聚焦时换成地址。
- 隐藏主滚动条；内容按阅读节奏自然滚动。
- 主标题 20/28px、600 字重；正文 14/23.1px。
- 分区标题 14/20px、400 字重，与项目正文同字号。
- 分区上留白 16px；项目行上下各留 8px。
- 中英文共用字号与行高；正文自然对齐。
- 英文主标题字距 -.035em；中文主标题字距为 0。
- 保留 huxi 暖白底、灰绿文字与苔绿细节。
- 英文统一 Geist Sans；汉字由系统字体补齐。
- 旁白、语言切换与 CV 使用 12/20px 辅助文字。
- 文字与分隔线同宽，距主栏内缘 6px。
- 语言文字、项目右侧与 CV 共用内容右缘。
- 博客与 CV 当前是可访问的过渡页。
- 首页底部左侧放社交图标；右侧放 CV 文字入口。
- /design/ 只在开发时注册。
- 生产构建必须通过静态导出契约验证。
- 页面使用本地字体；不接入统计服务。
- 严格 JSON 与生成文件不添加契约注释。

法则：极简·稳定·导航·版本精确。
