/**
 * [INPUT]: 依赖浏览器解析后的主题变量与共享辅助文字样式。
 * [OUTPUT]: 导出显示实际色值的 Palette。
 * [POS]: 开发样本读取视觉基准，不维护第二份颜色配置。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
"use client";

import { useEffect, useState } from "react";

const tokens = [
  { name: "paper", label: "底色" },
  { name: "ink", label: "标题" },
  { name: "prose", label: "正文" },
  { name: "copy", label: "辅助文字" },
  { name: "accent", label: "苔绿" },
  { name: "rule", label: "分隔线" },
  { name: "hover", label: "悬停" },
];

export function Palette() {
  const [values, setValues] = useState<Record<string, string>>({});
  useEffect(() => {
    function readPalette() {
      const style = getComputedStyle(document.documentElement);
      setValues(Object.fromEntries(tokens.map(({ name }) => [name, style.getPropertyValue(`--color-${name}`).trim()])));
    }
    readPalette();
    const observer = new MutationObserver(readPalette);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, []);

  return <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
    {tokens.map(({ name, label }) => <div key={name}>
      <div className="h-16 rounded-md border border-ink/10" style={{ background: `var(--color-${name})` }} />
      <div className="mt-2 flex items-center justify-between gap-2 caption"><span>{label}</span><span>{name}</span></div>
      <p className="mt-1 caption">{values[name] || "—"}</p>
    </div>)}
  </div>;
}
