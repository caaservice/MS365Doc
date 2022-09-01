import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "MS365教育版用户手册",
  description: "中国学馆联盟Microsoft365工作站文档中心",

  base: "/",

  theme,
});
