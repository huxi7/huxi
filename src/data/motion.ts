/**
 * [INPUT]: 无运行时依赖。
 * [OUTPUT]: 导出一次呼吸的时长。
 * [POS]: 呼吸时长的唯一来源；关键帧与缓动由 globals.css 定义。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
export const breathMotion = {
  duration: 2.4,
} as const;
