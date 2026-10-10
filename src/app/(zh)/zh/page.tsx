/**
 * [INPUT]: 依赖 HomePage 的静态内容编排。
 * [OUTPUT]: 导出中文首页。
 * [POS]: /zh/ 的路由入口。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { HomePage } from "@/components/home-page";
export default function Page() { return <HomePage locale="zh" />; }
