/**
 * [INPUT]: 依赖共享字体层级、文字与分隔线对齐、头像及呼吸参数。
 * [OUTPUT]: 导出开发专用 DesignPage。
 * [POS]: 主题与组件的可视样本；不进入生产路由图。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { IdentityAvatar } from "@/components/identity-avatar";
import { ProjectLink } from "@/components/project-link";
import { DetailNote } from "@/components/detail-note";
import { SocialIcon } from "@/components/icons";
import { SiteHeader } from "@/components/site-shell";
import { copy, identity, projects } from "@/data/site";
import { breathMotion } from "@/data/motion";
import { Palette } from "./palette";

function SampleSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="border-t border-rule py-8">
    <h2 className="mb-6 flex items-center gap-3 text-reading"><span className="text-caption text-copy">{number}</span>{title}</h2>
    {children}
  </section>;
}

export function DesignPage() {
  return <main data-design-workbench="HUXI_DESIGN_WORKBENCH" className="mx-auto max-w-[920px] px-6 py-10 sm:px-10 sm:py-14">
    <header className="mb-12">
      <div className="mb-10 flex items-center justify-between">
        <Link href="/" className="quiet-link text-caption"><ArrowLeft size={13} aria-hidden="true" />huxi</Link>
        <span className="rounded-full border border-accent/20 px-2.5 py-1 text-caption tracking-wider text-accent">DEVELOPMENT ONLY</span>
      </div>
      <h1 className="page-title">Design, quietly.</h1>
      <p className="mt-3 text-caption leading-6 text-copy">一套留白、墨色与呼吸的视觉约定。这里的样本和主页共用组件。</p>
    </header>

    <SampleSection number="01" title="色彩 / Color">
      <Palette />
      <p className="mt-5 text-caption leading-6 text-copy">苔绿用于呼吸、批注细线与焦点。技术图标保留官方品牌色；普通悬停使用中性灰；辅助正文保留足够的对比度。</p>
    </SampleSection>

    <SampleSection number="02" title="文字 / Typography">
      <div className="grid gap-8 sm:grid-cols-2">
        <div lang="en"><p className="mb-3 text-caption text-copy">GEIST · TITLE 20 / 28 · 600</p><p className="page-title">I'm huxi</p><p className="reading-copy mt-5">Learning by building things I want to use.</p></div>
        <div lang="zh-CN"><p className="mb-3 text-caption text-copy">苹方回退 · 正文 14 / 23.1 · 400</p><p className="page-title">你好，我是 huxi</p><p className="reading-copy mt-5">一边学习，一边创造。给思考，留一点空白。</p></div>
      </div>
      <p className="mt-7 text-caption text-copy">Geist Sans · 英文；PingFang SC · macOS 中文；Microsoft YaHei · Windows 中文。</p>
      <p className="mt-3 text-caption leading-6 text-copy">界面统一使用 Sans。主标题 20px / 28px、600 字重；分区标题 14px / 20px、400 字重；正文 14px / 23.1px、400 字重；旁白、语言切换与 CV 使用 12px / 20px。</p>
    </SampleSection>

    <SampleSection number="03" title="留白 / Space">
      <div className="flex flex-wrap items-end gap-8">
        {[4, 8, 12, 16, 24, 32].map((space) => <div key={space} className="space-y-3"><div className="rounded-sm bg-accent/25" style={{ width: space, height: 40 }} /><span className="text-caption text-copy">{space}</span></div>)}
      </div>
      <p className="mt-5 text-caption leading-6 text-copy">主栏最大 600px，外侧留白各 24px。文字与分隔线共用左右边缘，距主栏内缘 6px；语言标签、项目右侧与 CV 共用右缘。段落间距 10px，分区上留白 16px。</p>
    </SampleSection>

    <SampleSection number="04" title="真实组件 / Components">
      <div className="max-w-[552px]">
        <SiteHeader locale="en" />
        <p className="mb-5 text-[14px] leading-6 text-copy">A place for <DetailNote label={copy.en.detailLabel} className="pencil-note" note={copy.en.detailNote}>{copy.en.introductionDetail}</DetailNote>.</p>
        <div className="section-divider home-section"><h3 className="section-label home-projects-label">Project</h3>{projects.map((project) => <ProjectLink key={project.name} project={project} locale="en" />)}</div>
        <div className="-ml-2.5 mt-3 flex items-center gap-2">
          <DetailNote href={identity.github} label="GitHub · solink7" className="social-detail" note="GitHub ↗"><SocialIcon name="github" /></DetailNote>
          <DetailNote href={identity.x} label="X · @bblink777" className="social-detail" note="X ↗"><SocialIcon name="x" className="size-3.5" /></DetailNote>
        </div>
        <div className="mt-5 flex gap-6 text-caption"><Link href="/blog/" className="quiet-link">Blog<ArrowUpRight size={12} aria-hidden="true" /></Link><Link href="/cv/" className="quiet-link">CV<ArrowUpRight size={12} aria-hidden="true" /></Link></div>
      </div>
      <p className="mt-5 text-caption leading-6 text-copy">试试悬停、轻点和 Tab 键。按 Escape 收起批注。项目行单行呈现：左侧名称与一句描述，右侧默认是品牌色技术图标，悬停或聚焦换出跳转地址；社交图标位于紧凑底栏。</p>
    </SampleSection>

    <SampleSection number="05" title="一次呼吸 / Motion">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3"><div className="min-w-64"><IdentityAvatar label="预览一次呼吸" hint={copy.en.breathHint} /></div><span className="text-caption text-copy">{breathMotion.duration.toFixed(1)}s · one breath</span></div>
      <p className="mt-5 max-w-[36rem] text-caption leading-6 text-copy">页首与独立样本均使用 36px 头像，点击范围为 64px。两个同心呼吸环围绕头像舒展，照片轻轻胀大后归位。一次交互只播放一轮，短句说明 huxi 的读音。减少动态效果时保留细边与短句，呼吸不播放。</p>
    </SampleSection>

    <footer className="border-t border-rule pt-6 text-caption leading-6 text-copy">颜色与排版：<code className="font-sans">src/styles/globals.css</code><br />文案与外链：<code className="font-sans">src/data/site.ts</code><br />呼吸节奏：<code className="font-sans">src/data/motion.ts</code></footer>
  </main>;
}
