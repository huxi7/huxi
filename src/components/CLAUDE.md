# src/components/
> L2 | 父级: ../CLAUDE.md

identity-avatar.tsx: 本地头像与同心呼吸环共用一个入口；一轮呼吸后归位，减少动态效果时不播放。
icons.tsx: 技术品牌图标、项目符号与 GitHub/X 社交图标；品牌色值在此唯一定义，不请求外部图片。
detail-note.tsx: 局部批注与外链预览；响应悬停、聚焦、轻点与 Escape。
site-shell.tsx: 共享头像页眉与语言切换；页脚仅在开发时显示设计入口。
site-document.tsx: 分语言根文档与本地 Geist 字体。
home-page.tsx: 服务端首页；正文呈现个人身份与求知习惯；底部左侧社交图标，右侧 CV 文字入口。
project-link.tsx: 服务端单行项目行；右侧默认技术栈图标，悬停或聚焦换出跳转地址；源码入口使用 GitHub 图标。
placeholder-page.tsx: Blog 与 CV 过渡页；不制造文章或履历。

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
