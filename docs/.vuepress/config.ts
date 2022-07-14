import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "中学馆MS365手册",
  description: "中国学馆联盟Microsoft365工作站文档中心",

  base: "/",

  theme,
});
