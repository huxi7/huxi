/**
 * [INPUT]: 依赖博客过渡组件与中文元信息。
 * [OUTPUT]: 导出中文 Blog 页面。
 * [POS]: /zh/blog/ 的稳定内容入口。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { PlaceholderPage } from "@/components/placeholder-page";
import { pageMetadata } from "@/data/metadata";
export const metadata = pageMetadata("zh", "blog");
export default function Page() { return <PlaceholderPage locale="zh" page="blog" />; }
