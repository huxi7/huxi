/**
 * [INPUT]: 依赖单一内容源、静态路由、项目行与局部批注。
 * [OUTPUT]: 导出 HomePage 双语首页。
 * [POS]: 服务端内容编排；正文无需等待客户端脚本。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import Link from "next/link";
import { ArrowUpRight, ArrowRight, BookOpen } from "lucide-react";
import { copy, destination, identity, projects, type Locale } from "@/data/site";
import { ProjectIcon, SocialIcon, TechIcon } from "./icons";
import { DetailNote } from "./detail-note";
import { ProjectLink } from "./project-link";
import { SiteShell } from "./site-shell";

export function HomePage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return <SiteShell locale={locale}>
    <section aria-labelledby="intro-title" className="arrive">
      <h1 id="intro-title" aria-label={text.title} className="mb-3 text-[20px] leading-7 font-semibold tracking-[-0.035em]">{text.greeting}<DetailNote label={text.nameLabel} className="name-note" note={<><span className="name-pronunciation">hū xī</span><span className="note-divider" aria-hidden="true">/</span><span>{text.nameNote}</span></>}>huxi</DetailNote>{text.titleEnd}</h1>
      <div className="space-y-2.5 text-[14px] leading-[1.65] text-copy">
        <p>{text.introductionStart}<DetailNote label={text.detailLabel} className="pencil-note" note={text.detailNote}>{text.introductionDetail}</DetailNote>{text.introductionEnd}</p>
        <p>{text.craftStart}<span className="tech-mention"><TechIcon name="typescript" />TypeScript</span>{text.craftMiddle}<span className="tech-mention tech-react"><TechIcon name="react" />React</span>{text.craftEnd}</p>
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
      <p className="mt-3 mb-4 text-[12px] leading-5 text-copy"><span aria-hidden="true" className="mr-1.5">~</span>{text.aside}</p>
    </section>

    <div className="arrive arrive-later">
      <section aria-labelledby="projects-title" className="section-divider pt-4 pb-3">
        <h2 id="projects-title" className="section-label mb-1.5">{text.projects}</h2>
        <div>{projects.map((project) => <ProjectLink key={project.name} project={project} locale={locale} />)}</div>
      </section>

      <section aria-labelledby="writing-title" className="section-divider pt-4 pb-4">
        <h2 id="writing-title" className="section-label mb-3">{text.writing}</h2>
        <p className="max-w-[31rem] leading-[1.6] text-copy">{text.writingText}</p>
        <Link href={destination(locale, "blog")} className="reading-link -mx-2.5 mt-2.5 flex items-center justify-between gap-4 rounded-lg px-2.5 py-2.5">
          <span className="inline-flex items-center gap-2 text-ink"><BookOpen className="reading-icon" size={14} strokeWidth={1.5} aria-hidden="true" /><span className="pencil-underline">Blog</span><span className="soon-note">{text.soon}</span></span>
          <ArrowRight size={15} className="link-arrow text-copy" aria-hidden="true" strokeWidth={1.5} />
        </Link>
      </section>

      <section aria-labelledby="elsewhere-title" className="section-divider pt-4">
        <h2 id="elsewhere-title" className="section-label mb-3.5">{text.elsewhere}</h2>
        <div className="-ml-2.5 flex flex-wrap items-center gap-x-2 gap-y-3">
          <DetailNote href={identity.github} label="GitHub · solink7" className="social-detail" note="GitHub ↗"><SocialIcon name="github" /></DetailNote>
          <DetailNote href={identity.x} label="X · @bblink777" className="social-detail" note="X ↗"><SocialIcon name="x" className="size-3.5" /></DetailNote>
          <Link href={destination(locale, "cv")} className="cv-link" aria-label={`${text.cv} · ${text.soon}`}><SocialIcon name="cv" /><span className="font-mono text-[11px]">CV</span><span className="cv-caption" aria-hidden="true">{text.soon}</span></Link>
        </div>
      </section>
    </div>
  </SiteShell>;
}
