/**
 * [INPUT]: 依赖静态路径、双语文案与 IdentityAvatar。
 * [OUTPUT]: 导出 SiteShell、SiteHeader 与仅开发时显示的 SiteFooter。
 * [POS]: 统一 600px 主栏与原版头像；语言文字对齐内容内缘。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { copy, pagePath, type Locale, type PageKind } from "@/data/site";
import { IdentityAvatar } from "./identity-avatar";

export function SiteHeader({ locale, page = "home" }: { locale: Locale; page?: PageKind }) {
  const text = copy[locale];
  // ---- 单键切换：指向另一种语言，标签即为点击后所得 ----
  const other: Locale = locale === "en" ? "zh" : "en";
  return <header className="site-header flex items-center justify-between">
    <IdentityAvatar label={text.breathe} hint={text.breathHint} />
    <nav aria-label={text.language} className="site-language">
      <Link href={pagePath(other, page)} hrefLang={other === "zh" ? "zh-CN" : "en"} lang={other === "zh" ? "zh-CN" : "en"} aria-label={other === "zh" ? "切换为中文" : "Switch to English"} className="quiet-link rounded-sm py-2 underline decoration-transparent underline-offset-4 hover:text-ink hover:decoration-ink/30"><span>{other === "zh" ? "中" : "EN"}</span></Link>
    </nav>
  </header>;
}

export function SiteFooter() {
  if (process.env.NODE_ENV !== "development") return null;
  return <footer className="mt-6 flex flex-wrap items-center justify-between gap-4 pb-2 caption">
    <Link href="/design/" className="quiet-link" aria-label="Open development design system">
      <SlidersHorizontal size={11} aria-hidden="true" /><span>Design</span><ArrowUpRight size={11} aria-hidden="true" />
    </Link>
  </footer>;
}

export function SiteShell({ children, locale, page = "home" }: { children: ReactNode; locale: Locale; page?: PageKind }) {
  return <div lang={locale === "zh" ? "zh-CN" : "en"} className="site-shell mx-auto w-full max-w-page px-6">
    <a href="#content" className="fixed top-3 left-3 z-50 -translate-y-24 rounded bg-ink px-3 py-2 text-paper focus:translate-y-0">{copy[locale].skip}</a>
    <SiteHeader locale={locale} page={page} />
    <main id="content" tabIndex={-1}>{children}</main>
    <SiteFooter />
  </div>;
}
