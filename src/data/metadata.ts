/**
 * [INPUT]: 依赖双语内容与 Next.js Metadata 类型。
 * [OUTPUT]: 导出页面元信息生成函数与浅色视口配置。
 * [POS]: 首页标题固定为 huxi；摘要随语言与页面变化。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import type { Metadata, Viewport } from "next";
import { copy, type Locale, type PageKind } from "./site";

export const siteViewport: Viewport = { themeColor: "#fafaf8" };

export function pageMetadata(locale: Locale, page: PageKind = "home"): Metadata {
  const text = copy[locale];
  const title = page === "home" ? "huxi" : `${page === "blog" ? "Blog" : "CV"} — huxi`;
  const description = page === "home" ? text.description : page === "blog" ? text.blog.body : text.resume.body;
  return {
    title, description,
    icons: { icon: "/icon.svg" },
    robots: { index: page === "home", follow: true },
    openGraph: { type: "website", siteName: "huxi", title, description, locale: locale === "zh" ? "zh_CN" : "en_US" },
    twitter: { card: "summary", title, description },
  };
}
