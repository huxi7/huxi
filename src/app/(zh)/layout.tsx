/**
 * [INPUT]: 依赖共享根文档与中文元信息。
 * [OUTPUT]: 导出中文根布局。
 * [POS]: 中文页面的 HTML 语言边界。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { SiteDocument } from "@/components/site-document";
import { pageMetadata, siteViewport } from "@/data/metadata";
export const metadata = pageMetadata("zh");
export const viewport = siteViewport;
export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="zh">{children}</SiteDocument>;
}
