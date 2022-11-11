import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "可用性", icon: "fa-solid fa-users", link: "/new-user/#谁适合阅读本文档" },
  { text: "文档纠错", icon: "fa-solid fa-bug", link: "/correct.html" },
  { text: "中国学馆联盟", icon: "fa-solid fa-building-columns", link: "https://asi.ac.cn" },
  { text: "关于", icon: "fa-solid fa-at", link: "/about.html" },
]);
