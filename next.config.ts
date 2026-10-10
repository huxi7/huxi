/**
 * [INPUT]: 依赖 Next.js 的运行阶段与页面扩展名识别。
 * [OUTPUT]: 导出静态站点配置。
 * [POS]: 构建边界；仅开发阶段识别 page.dev.tsx。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function configure(phase: string): NextConfig {
  return {
    output: "export",
    trailingSlash: true,
    poweredByHeader: false,
    devIndicators: false,
    pageExtensions: [
      "ts", "tsx", "js", "jsx",
      ...(phase === PHASE_DEVELOPMENT_SERVER ? ["dev.tsx"] : []),
    ],
    turbopack: { root: process.cwd() },
  };
}
