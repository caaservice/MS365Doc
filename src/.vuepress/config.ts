import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/msdocs",

  lang: "zh-CN",
  title: "MS365教育版用户手册",
  description: "中国学馆联盟Microsoft365工作站文档中心",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
