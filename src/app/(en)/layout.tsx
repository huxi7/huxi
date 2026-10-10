/**
 * [INPUT]: 依赖共享根文档与英文元信息。
 * [OUTPUT]: 导出英文根布局。
 * [POS]: 英文页面的 HTML 语言边界。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { SiteDocument } from "@/components/site-document";
import { pageMetadata, siteViewport } from "@/data/metadata";
export const metadata = pageMetadata("en");
export const viewport = siteViewport;
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
