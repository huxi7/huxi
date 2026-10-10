/**
 * [INPUT]: 依赖公开头像、批注、图标、项目行与呼吸参数。
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
    <h2 className="mb-6 flex items-center gap-3 text-[13px]"><span className="font-mono text-[10px] text-copy">{number}</span>{title}</h2>
    {children}
  </section>;
}

export function DesignPage() {
  return <main data-design-workbench="HUXI_DESIGN_WORKBENCH" className="mx-auto max-w-[920px] px-6 py-10 sm:px-10 sm:py-14">
    <header className="mb-12">
      <div className="mb-10 flex items-center justify-between">
        <Link href="/" className="quiet-link text-[12px]"><ArrowLeft size={13} aria-hidden="true" />huxi</Link>
        <span className="rounded-full border border-accent/20 px-2.5 py-1 font-mono text-[9px] tracking-wider text-accent">DEVELOPMENT ONLY</span>
      </div>
      <h1 className="text-[28px] font-medium tracking-[-.045em]">Design, quietly.</h1>
      <p className="mt-3 text-[13px] leading-6 text-copy">一套留白、墨色与呼吸的视觉约定。这里的样本和主页共用组件。</p>
    </header>

    <SampleSection number="01" title="色彩 / Color">
      <Palette />
      <p className="mt-5 text-[12px] leading-6 text-copy">苔绿用于呼吸、批注细线与焦点。技术图标保留官方品牌色；普通悬停使用中性灰；辅助正文保留足够的对比度。</p>
    </SampleSection>

    <SampleSection number="02" title="文字 / Typography">
      <div className="grid gap-8 sm:grid-cols-2">
        <div><p className="mb-3 font-mono text-[10px] text-copy">GEIST · 20 / 28 · 600</p><p className="text-[20px] leading-7 font-semibold tracking-[-.035em]">I'm huxi.</p><p className="mt-3 text-[14px] leading-[1.6] text-copy">Learning by building things I want to use.</p></div>
        <div><p className="mb-3 font-mono text-[10px] text-copy">SYSTEM CJK · 14 / 22.4</p><p className="text-[20px] leading-7 font-semibold tracking-[-.035em]">你好，我是 huxi。</p><p className="mt-3 text-[14px] leading-[1.6] text-copy">一边学习，一边创造。给思考，留一点空白。</p></div>
      </div>
      <p className="mt-7 font-mono text-[11px] text-copy">Geist Mono — quiet details, dates, and small notes.</p>
    </SampleSection>

    <SampleSection number="03" title="留白 / Space">
      <div className="flex flex-wrap items-end gap-8">
        {[4, 8, 12, 16, 24, 32].map((space) => <div key={space} className="space-y-3"><div className="rounded-sm bg-accent/25" style={{ width: space, height: 40 }} /><span className="font-mono text-[10px] text-copy">{space}</span></div>)}
      </div>
      <p className="mt-5 text-[12px] leading-6 text-copy">主栏最大 600px，左右留白各 24px。让文字的密度与节奏决定页面。</p>
    </SampleSection>

    <SampleSection number="04" title="真实组件 / Components">
      <div className="max-w-[552px]">
        <SiteHeader locale="en" />
        <p className="mb-5 text-[14px] leading-6 text-copy">A place for <DetailNote label={copy.en.detailLabel} className="pencil-note" note={copy.en.detailNote}>{copy.en.introductionDetail}</DetailNote>.</p>
        <div className="border-t border-rule">{projects.map((project) => <ProjectLink key={project.name} project={project} locale="en" />)}</div>
        <div className="-ml-2.5 mt-3 flex items-center gap-2">
          <DetailNote href={identity.github} label="GitHub · solink7" className="social-detail" note="GitHub ↗"><SocialIcon name="github" /></DetailNote>
          <DetailNote href={identity.x} label="X · @bblink777" className="social-detail" note="X ↗"><SocialIcon name="x" className="size-3.5" /></DetailNote>
        </div>
        <div className="mt-5 flex gap-6 text-[13px]"><Link href="/blog/" className="quiet-link">Blog<ArrowUpRight size={12} aria-hidden="true" /></Link><Link href="/cv/" className="quiet-link">CV<ArrowUpRight size={12} aria-hidden="true" /></Link></div>
      </div>
      <p className="mt-5 text-[12px] leading-6 text-copy">试试悬停、轻点和 Tab 键。按 Escape 收起批注。项目行单行呈现：左侧名称与一句描述，右侧默认是品牌色技术图标，悬停或聚焦换出跳转地址；社交图标保留 36px 点击范围。</p>
    </SampleSection>

    <SampleSection number="05" title="一次呼吸 / Motion">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3"><div className="min-w-64"><IdentityAvatar label="预览一次呼吸" hint={copy.en.breathHint} /></div><span className="font-mono text-[10px] text-copy">{breathMotion.duration.toFixed(1)}s · one breath</span></div>
      <p className="mt-5 max-w-[36rem] text-[12px] leading-6 text-copy">真实头像占 40px，交互区域占 64px。两个同心呼吸环围绕头像舒展，照片轻轻胀大后归位。一次交互只播放一轮，短句说明 huxi 的读音。减少动态效果时保留细边与短句，呼吸不播放。</p>
    </SampleSection>

    <footer className="border-t border-rule pt-6 text-[11px] leading-6 text-copy">颜色与排版：<code className="font-mono">src/styles/globals.css</code><br />文案与外链：<code className="font-mono">src/data/site.ts</code><br />呼吸节奏：<code className="font-mono">src/data/motion.ts</code></footer>
  </main>;
}
