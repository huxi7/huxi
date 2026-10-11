# src/components/
> L2 | 父级: ../CLAUDE.md

identity-avatar.tsx: 本地头像与同心呼吸环共用一个入口；一轮呼吸后归位，减少动态效果时不播放。
icons.tsx: 技术品牌图标、项目符号与 GitHub/X 社交图标；品牌色值在此唯一定义，不请求外部图片。
detail-note.tsx: 局部批注与外链预览；响应悬停、聚焦、轻点与 Escape。
site-shell.tsx: 共享 40px 头像页眉与 600px 主栏；12px 语言文字对齐内容内缘；容器声明内容语言；开发页脚提供样本入口。
site-document.tsx: 分语言根文档；公开界面只加载本地 Geist Sans。
home-page.tsx: 服务端双语首页；用语义类控制分区节奏，复用项目行与局部批注。
project-link.tsx: 服务端项目行；14px 正文、500 字重项目名；间距由全局样式定义；技术图标在悬停或聚焦时换成地址。
placeholder-page.tsx: Blog 与 CV 过渡页；与首页共用双语排版，不制造文章或履历。

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
