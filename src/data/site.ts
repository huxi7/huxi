/**
 * [INPUT]: 用户提供的头像、公开身份与已核验的项目事实。
 * [OUTPUT]: 导出双语内容、项目清单与本地路径函数。
 * [POS]: 内容唯一来源；页面组件不持有个人资料副本。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
export type Locale = "en" | "zh";
export type PageKind = "home" | "blog" | "cv";
export type Tech = "typescript" | "react" | "bun" | "python" | "fastapi" | "sqlite" | "vite" | "appwrite";

export const identity = {
  name: "huxi",
  avatar: "/avatar.jpg",
  github: "https://github.com/huxi7",
  x: "https://x.com/bblink777",
  folune: "https://folune.huxi7.com/",
};

// ---- 后续发布入口 ------------------------------------------------------
// 填入绝对地址即可让首页入口指向独立博客或简历；留空时使用本地过渡页。
export const destinations: Record<"blog" | "cv", string | null> = {
  blog: null,
  cv: null,
};

export function pagePath(locale: Locale, page: PageKind = "home") {
  const prefix = locale === "zh" ? "/zh" : "";
  return `${prefix}${page === "home" ? "" : `/${page}`}/`;
}

export function destination(locale: Locale, page: "blog" | "cv") {
  return destinations[page] ?? pagePath(locale, page);
}

export interface Project {
  name: string;
  icon: "folune" | "lamp" | "movies";
  description: Record<Locale, string>;
  href: string;
  address: string;
  technologies: Tech[];
}

export const projects: Project[] = [
  {
    name: "Folune",
    icon: "folune",
    description: {
      en: "Notes, canvas, and AI in one quiet place.",
      zh: "笔记、画布与 AI，一处安静的空间。",
    },
    href: identity.folune,
    address: "folune.huxi7.com",
    technologies: ["typescript", "react", "bun"],
  },
  {
    name: "Freedom Lamp",
    icon: "lamp",
    description: {
      en: "Savings become free days, lit up on a life grid.",
      zh: "把储蓄换算成自由天数，点亮人生方格。",
    },
    href: "https://github.com/huxi7/financial-freedom-lamp",
    address: "source on GitHub",
    technologies: ["python", "fastapi", "sqlite"],
  },
  {
    name: "MovieHunt",
    icon: "movies",
    description: {
      en: "Search films, open the details, see what's trending.",
      zh: "搜索电影、查看详情，看看大家在找什么。",
    },
    href: "https://movie.776799.xyz",
    address: "movie.776799.xyz",
    technologies: ["react", "vite", "appwrite"],
  },
];

export const copy = {
  en: {
    title: "I'm huxi",
    greeting: "I'm ",
    titleEnd: "",
    nameLabel: "What huxi means",
    nameNote: "a breath, in Chinese.",
    detailLabel: "A note on the little details",
    detailNote: "small things, made with care.",
    foluneNote: "A note. An idea. A connection.",
    description: "An undergraduate student and full-stack developer, building thoughtful software with care. Projects, notes, and a little room to think.",
    introductionStart: "I'm an undergraduate student and full-stack developer, with a love for music. I chase perfection, down to ",
    introductionDetail: "the little details",
    introductionEnd: ".",
    curiosity: "I'm drawn to things I don't yet understand. I like asking why, trying things for myself, and letting what I learn spark new ideas.",
    nowStart: "These days, I'm making ",
    nowEnd: " — a quieter place for notes, AI, and connected ideas.",
    closing: "Still learning, still making. A small corner for my work and thoughts along the way.",
    aside: "a little room to think.",
    projects: "Project",
    writing: "Writing",
    writingText: "On building software, learning by doing, and thinking with tools. An open notebook, in the making.",
    cv: "CV",
    soon: "soon",
    breathe: "Take a breath",
    breathHint: "a moment, just for you.",
    back: "Back to home",
    skip: "Skip to content",
    language: "Language",
    blog: {
      eyebrow: "An open notebook",
      title: "Some thoughts take a little time.",
      body: "This will be a place for notes on software, the things I'm learning, and questions worth staying with.",
      detail: "I'm still gathering the first pieces. Until then, you can follow what I'm making on GitHub or find me on X.",
      closing: "Room for a first page.",
    },
    resume: {
      eyebrow: "Curriculum vitae",
      title: "A little more about the person behind the work.",
      body: "I'm huxi, an undergraduate student and full-stack developer. I build software with TypeScript and React, with a close eye for the details.",
      detail: "I'm putting together a fuller picture of my education, projects, and experience. For now, my work is the best place to start.",
      closing: "A fuller picture, coming together.",
    },
  },
  zh: {
    title: "你好，我是 huxi",
    greeting: "你好，我是 ",
    titleEnd: "",
    nameLabel: "huxi 名字的含义",
    nameNote: "呼吸，也是我的名字。",
    detailLabel: "关于小细节的一句批注",
    detailNote: "小小的地方，也值得认真。",
    foluneNote: "一条记录。一个想法。一点联系。",
    description: "在校大学生，全栈开发，用心打磨软件的每一处。这里有我的作品、思考，以及一点留给想法的空白。",
    introductionStart: "在校大学生，全栈开发，也爱听点音乐。追求完美，在意",
    introductionDetail: "每个细节",
    introductionEnd: "。",
    curiosity: "我总会被还不懂的事物吸引，喜欢问个为什么，也喜欢亲手试一试。学到的新东西，常常会长成一个有趣的点子。",
    nowStart: "最近正在打磨 ",
    nowEnd: "，为记录、AI 和彼此相连的想法，留一个安静的地方。",
    closing: "一边学习，一边创造。在这一小处，留下作品与沿途的思考。",
    aside: "给思考，留一点空白。",
    projects: "项目",
    writing: "写作",
    writingText: "写做软件的过程、学习中的发现，以及借助工具思考的尝试。一本公开的笔记，正在准备。",
    cv: "CV",
    soon: "准备中",
    breathe: "留一次呼吸的时间",
    breathHint: "这一小会儿，留给自己。",
    back: "回到首页",
    skip: "跳至正文",
    language: "语言",
    blog: {
      eyebrow: "一本公开的笔记",
      title: "有些想法，需要一点时间。",
      body: "这里将记录我做软件的过程、学习中的发现，以及那些值得多想一会儿的问题。",
      detail: "第一批文字还在整理。在它们准备好之前，可以先到 GitHub 看看我在做什么，或在 X 上找到我。",
      closing: "为第一页，留一点空白。",
    },
    resume: {
      eyebrow: "Curriculum vitae",
      title: "从作品，再多认识我一点。",
      body: "我是 huxi，在校大学生，全栈开发。用 TypeScript 和 React 构建软件，也认真打磨其中细小的体验。",
      detail: "我正在整理自己的教育经历、项目与实践，尝试把这段成长写得更完整。现在，可以先从作品认识我。",
      closing: "让自己的轮廓，慢慢完整。",
    },
  },
} as const;
