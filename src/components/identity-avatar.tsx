/**
 * [INPUT]: 依赖本地头像、动态效果偏好与共享呼吸时长。
 * [OUTPUT]: 导出支持悬停、聚焦与轻点的 IdentityAvatar。
 * [POS]: 共享页眉的身份入口；两个同心呼吸环围绕头像舒展一次。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { breathMotion } from "@/data/motion";
import { identity } from "@/data/site";

export function IdentityAvatar({ label, hint }: { label: string; hint: string }) {
  const playing = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [isBreathing, setIsBreathing] = useState(false);

  useEffect(() => () => clearTimeout(timer.current), []);

  function breathe() {
    if (playing.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    playing.current = true;
    setIsBreathing(true);
    // ---- 一轮呼吸结束后归位；时长来自共享契约 --------------------------
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      playing.current = false;
      setIsBreathing(false);
    }, breathMotion.duration * 1000);
  }

  return (
    <button
      type="button"
      aria-label={`${identity.name} · ${label}`}
      data-breathing={isBreathing}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") void breathe(); }}
      onFocus={(event) => { if (event.currentTarget.matches(":focus-visible")) void breathe(); }}
      onClick={() => void breathe()}
      className="identity-avatar"
    >
      <span className="identity-photo">
        <Image src={identity.avatar} alt={identity.name} width={400} height={400} unoptimized loading="eager" draggable={false} />
      </span>
      <svg
        viewBox="0 0 64 64"
        className="identity-breath"
        style={{ "--duration-breath": `${breathMotion.duration}s` } as CSSProperties}
        fill="none"
        aria-hidden="true"
      >
        <circle className="breath-hug" cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.25" opacity="0" />
        <circle className="breath-ripple" cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1" opacity="0" />
      </svg>
      <span className="identity-hint" aria-hidden="true">
        <span className="identity-pronunciation">hū xī</span>
        <span>{hint}</span>
      </span>
    </button>
  );
}
