/**
 * [INPUT]: 依赖 @tailwindcss/postcss 的主题与工具类编译。
 * [OUTPUT]: 导出 PostCSS 插件配置。
 * [POS]: Next.js 样式构建入口。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
export default { plugins: { "@tailwindcss/postcss": {} } };
