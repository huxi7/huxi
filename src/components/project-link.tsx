/**
 * [INPUT]: 依赖经过筛选的项目资料与统一的小图标。
 * [OUTPUT]: 导出 ProjectLink 单行项目行。
 * [POS]: 首页与设计样本共用；默认展示技术栈图标，悬停或聚焦时换出跳转地址。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { ArrowUpRight } from "lucide-react";
import type { Locale, Project } from "@/data/site";
import { ProjectIcon, SocialIcon, TechIcon, techBrands } from "./icons";

export function ProjectLink({ project, locale }: { project: Project; locale: Locale }) {
  const sourceOnGitHub = project.address === "source on GitHub";
  const stack = project.technologies.map((tech) => techBrands[tech].title).join("、");
  const target = sourceOnGitHub ? "GitHub" : project.address;
  return <a
    href={project.href}
    target="_blank"
    rel="noopener noreferrer"
    className="project-row -mx-2.5 flex flex-col gap-0.5 rounded-lg px-2.5 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
    aria-label={`${project.name}：${project.description[locale]} · ${stack} · ${target}`}
  >
    <span className="flex min-w-0 items-center gap-1.5 leading-[1.6]">
      <span className="project-mark shrink-0 text-ink"><ProjectIcon name={project.icon} className="size-3.5" /></span>
      <span className="pencil-underline shrink-0 font-medium text-ink">{project.name}</span>
      <span className="shrink-0 text-copy" aria-hidden="true">~</span>
      <span className="truncate text-copy">{project.description[locale]}</span>
    </span>
    <span className="project-aside shrink-0 sm:justify-end" aria-hidden="true">
      <span className="project-stack">
        {project.technologies.map((tech) => <span key={tech} title={techBrands[tech].title}><TechIcon name={tech} /></span>)}
      </span>
      <span className="project-dest">
        {sourceOnGitHub ? <SocialIcon name="github" className="size-3.5" /> : <span className="truncate">{project.address}</span>}
        <ArrowUpRight className="link-arrow size-3 shrink-0" strokeWidth={1.4} />
      </span>
    </span>
  </a>;
}
