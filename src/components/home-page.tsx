/**
 * [INPUT]: 依赖双语个人叙述、静态路由、项目行与局部批注。
 * [OUTPUT]: 导出 HomePage 双语首页。
 * [POS]: 服务端首页内容编排；双语版本共用排版类与交互组件。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import Link from "next/link";
import { ArrowUpRight, ArrowRight, BookOpen } from "lucide-react";
import { copy, destination, identity, projects, type Locale } from "@/data/site";
import { ProjectIcon, SocialIcon } from "./icons";
import { DetailNote } from "./detail-note";
import { ProjectLink } from "./project-link";
import { SiteShell } from "./site-shell";

export function HomePage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return <SiteShell locale={locale}>
    <section aria-labelledby="intro-title" className="home-intro arrive">
      <h1 id="intro-title" aria-label={text.title} className="page-title home-title">{text.greeting}<DetailNote label={text.nameLabel} className="name-note" note={<><span className="name-pronunciation">hū xī</span><span className="note-divider" aria-hidden="true">/</span><span>{text.nameNote}</span></>}>huxi</DetailNote>{text.titleEnd}</h1>
      <div className="reading-copy space-y-paragraph">
        <p>{text.introductionStart}<DetailNote label={text.detailLabel} className="pencil-note" note={text.detailNote}>{text.introductionDetail}</DetailNote>{text.introductionEnd}</p>
        <p>{text.curiosity}</p>
        <p>{text.nowStart}<DetailNote href={identity.folune} label="Folune" className="folune-note" note={<>
          <span className="preview-eyebrow"><ProjectIcon name="folune" className="size-3" />Folune</span>
          <svg className="idea-sketch" viewBox="0 0 200 58" fill="none" aria-hidden="true">
            <path className="idea-connection" d="M37 34C67 33 63 12 96 18S136 40 164 27" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
            <rect x="18" y="22" width="30" height="24" rx="5" fill="var(--color-paper)" stroke="currentColor" strokeWidth="1.1" transform="rotate(-6 33 34)" />
            <path d="M26 30h13M26 35h9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <circle cx="98" cy="19" r="9" fill="var(--color-tint)" stroke="currentColor" strokeWidth="1.1" />
            <circle cx="98" cy="19" r="2" fill="currentColor" />
            <rect x="150" y="16" width="29" height="25" rx="5" fill="var(--color-paper)" stroke="currentColor" strokeWidth="1.1" transform="rotate(5 165 29)" />
            <path d="M157 23h7v5h-7zm9 8h6v4h-6z" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span className="preview-caption">{text.foluneNote}</span>
        </>}><ProjectIcon name="folune" className="size-3.5" /><span>Folune</span><ArrowUpRight className="link-arrow" size={11} aria-hidden="true" /></DetailNote>{text.nowEnd}</p>
        <p>{text.closing}</p>
      </div>
      <p className="home-aside caption"><span aria-hidden="true" className="mr-1.5">~</span>{text.aside}</p>
    </section>

    <div className="arrive arrive-later">
      <section aria-labelledby="projects-title" className="section-divider home-section">
        <h2 id="projects-title" className="section-label home-projects-label">{text.projects}</h2>
        <div>{projects.map((project) => <ProjectLink key={project.name} project={project} locale={locale} />)}</div>
      </section>

      <section aria-labelledby="writing-title" className="section-divider home-section home-writing-section">
        <h2 id="writing-title" className="section-label home-writing-label">{text.writing}</h2>
        <p className="reading-copy home-writing-copy">{text.writingText}</p>
        <Link href={destination(locale, "blog")} className="reading-link home-reading-link flex items-center justify-between gap-2 rounded-md">
          <span className="inline-flex items-center gap-2 text-ink"><BookOpen className="reading-icon" size={14} strokeWidth={1.5} aria-hidden="true" /><span className="pencil-underline">Blog</span><span className="soon-note">{text.soon}</span></span>
          <ArrowRight size={15} className="link-arrow text-copy" aria-hidden="true" strokeWidth={1.5} />
        </Link>
      </section>

      <div className="section-divider home-socials flex items-center justify-between gap-6">
        <div className="home-social-links">
          <DetailNote href={identity.github} label="GitHub · solink7" className="social-detail" note="GitHub ↗"><SocialIcon name="github" /></DetailNote>
          <DetailNote href={identity.x} label="X · @bblink777" className="social-detail" note="X ↗"><SocialIcon name="x" className="size-3.5" /></DetailNote>
        </div>
        <Link href={destination(locale, "cv")} className="cv-link" aria-label={`${text.cv} · ${text.soon}`}><span>{text.cv}</span><span className="cv-caption" aria-hidden="true">{text.soon}</span></Link>
      </div>
    </div>
  </SiteShell>;
}
