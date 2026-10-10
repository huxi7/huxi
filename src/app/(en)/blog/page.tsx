/**
 * [INPUT]: 依赖博客过渡组件与英文元信息。
 * [OUTPUT]: 导出英文 Blog 页面。
 * [POS]: /blog/ 的稳定内容入口。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { PlaceholderPage } from "@/components/placeholder-page";
import { pageMetadata } from "@/data/metadata";
export const metadata = pageMetadata("en", "blog");
export default function Page() { return <PlaceholderPage locale="en" page="blog" />; }
