/**
 * [INPUT]: 依赖 Blog/CV 的双语过渡文案与真实社交地址。
 * [OUTPUT]: 导出 PlaceholderPage。
 * [POS]: 为未来内容保留入口；与首页共用双语标题和正文排版。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { copy, identity, pagePath, type Locale } from "@/data/site";
import { SiteShell } from "./site-shell";

export function PlaceholderPage({ locale, page }: { locale: Locale; page: "blog" | "cv" }) {
  const text = copy[locale];
  const content = page === "blog" ? text.blog : text.resume;
  return <SiteShell locale={locale} page={page}>
    <article className="placeholder-content arrive">
      <Link href={pagePath(locale)} className="quiet-link caption mb-12"><ArrowLeft size={13} aria-hidden="true" />{text.back}</Link>
      <p className="caption mb-4">{content.eyebrow}</p>
      <h1 className="page-title max-w-[29rem]">{content.title}</h1>
      <div className="reading-copy mt-6 max-w-[30rem] space-y-paragraph">
        <p>{content.body}</p><p>{content.detail}</p>
      </div>
      <div className="caption mt-7 flex items-center gap-5">
        <a href={identity.github} target="_blank" rel="noopener noreferrer" className="quiet-link">GitHub<ArrowUpRight size={12} aria-hidden="true" /></a>
        <a href={identity.x} target="_blank" rel="noopener noreferrer" className="quiet-link">X<ArrowUpRight size={12} aria-hidden="true" /></a>
      </div>
      <div className="section-divider caption mt-16 pt-5"><span className="mr-2 text-accent" aria-hidden="true">·</span>{content.closing}</div>
    </article>
  </SiteShell>;
}
