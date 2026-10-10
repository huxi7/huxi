/**
 * [INPUT]: 依赖 Geist 包中的本地字体与语言标识。
 * [OUTPUT]: 导出 SiteDocument 根 HTML 结构。
 * [POS]: 两组根布局复用文档结构，分别输出正确语言。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Locale } from "@/data/site";
import "@/styles/globals.css";

export function SiteDocument({ children, locale }: { children: ReactNode; locale: Locale }) {
  return <html lang={locale === "zh" ? "zh-CN" : "en"} className={`${GeistSans.variable} ${GeistMono.variable}`}>
    <body className="min-h-svh bg-paper font-sans">{children}</body>
  </html>;
}
