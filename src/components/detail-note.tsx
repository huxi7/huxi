/**
 * [INPUT]: 依赖 React 状态、浏览器边界与调用方批注。
 * [OUTPUT]: 导出 DetailNote，支持文字批注与外链预览。
 * [POS]: 局部客户端交互；正文和预览由服务端提供。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
"use client";

import { useId, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function DetailNote({ children, note, label, href, className = "" }: {
  children: ReactNode;
  note: ReactNode;
  label: string;
  href?: string;
  className?: string;
}) {
  const id = useId();
  const trigger = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const popover = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  useLayoutEffect(() => {
    if (!open) return;
    function fitToViewport() {
      const bounds = popover.current?.getBoundingClientRect();
      if (!bounds) return;
      const gutter = 24;
      const adjustment = Math.max(gutter - bounds.left, Math.min(0, window.innerWidth - gutter - bounds.right));
      if (Math.abs(adjustment) > 0.5) setOffset((value) => value + adjustment);
    }
    fitToViewport();
    window.addEventListener("resize", fitToViewport);
    return () => window.removeEventListener("resize", fitToViewport);
  }, [open]);

  function reveal() {
    if (open) return;
    setOffset(0);
    setOpen(true);
  }
  const attributes = {
    className: "detail-trigger",
    "aria-label": label,
    "aria-describedby": open ? id : undefined,
    onFocus: () => {
      if (trigger.current?.matches(":focus-visible")) reveal();
    },
    onBlur: () => setOpen(false),
  };

  return <span
    className={`detail-note ${className}`}
    data-open={open}
    onPointerEnter={(event) => { if (event.pointerType === "mouse") reveal(); }}
    onPointerLeave={() => { if (!trigger.current?.matches(":focus-visible")) setOpen(false); }}
    onKeyDown={(event) => {
      if (event.key === "Escape") {
        setOpen(false);
        event.stopPropagation();
      }
    }}
  >
    {href
      ? <a {...attributes} ref={(element) => { trigger.current = element; }} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
      : <button {...attributes} ref={(element) => { trigger.current = element; }} type="button" aria-expanded={open} aria-controls={id} onClick={() => { if (open) setOpen(false); else reveal(); }}>{children}</button>}
    <span ref={popover} id={id} role="tooltip" aria-hidden={!open} className="detail-popover" style={{ "--detail-offset": `${offset}px` } as CSSProperties}>{note}</span>
  </span>;
}
