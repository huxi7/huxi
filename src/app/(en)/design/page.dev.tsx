/**
 * [INPUT]: 依赖 src/design 的真实组件样本。
 * [OUTPUT]: 导出开发专用设计页面。
 * [POS]: /design/ 入口；生产路由发现阶段直接排除。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { DesignPage } from "@/design/design-page";
export const metadata = { title: "Design — huxi", robots: { index: false, follow: false } };
export default function Page() { return <DesignPage />; }
