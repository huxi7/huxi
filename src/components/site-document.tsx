/**
 * [INPUT]: 依赖 Geist Sans 本地字体与语言标识。
 * [OUTPUT]: 导出 SiteDocument 根 HTML 结构。
 * [POS]: 两组根布局复用单一 Sans 字体；汉字由系统字体补齐。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import type { Locale } from "@/data/site";
import "@/styles/globals.css";

export function SiteDocument({ children, locale }: { children: ReactNode; locale: Locale }) {
  return <html lang={locale === "zh" ? "zh-CN" : "en"} className={GeistSans.variable}>
    <body className="min-h-svh bg-paper font-sans">{children}</body>
  </html>;
}
