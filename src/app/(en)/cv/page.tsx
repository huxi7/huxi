/**
 * [INPUT]: 依赖简历过渡组件与英文元信息。
 * [OUTPUT]: 导出英文 CV 页面。
 * [POS]: /cv/ 的稳定内容入口。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { PlaceholderPage } from "@/components/placeholder-page";
import { pageMetadata } from "@/data/metadata";
export const metadata = pageMetadata("en", "cv");
export default function Page() { return <PlaceholderPage locale="en" page="cv" />; }
