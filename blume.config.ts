import { defineConfig } from "blume";

export default defineConfig({
  title: "Ultraso",
  description: "Tài liệu về siêu âm lâm sàng.",

  feedback: false,

  github: {
    owner: "MedPocket",
    repo: "ultraso",
    branch: "main",
  },

  i18n: {
    defaultLocale: "vi",
    locales: [{ code: "vi", label: "Tiếng Việt" }],
    hideDefaultLocalePrefix: true,
  },

  seo: {
    og: {
      site: false,
      logo: false,
    },
  },

  theme: {
    accent: "green",
    radius: "md",
    mode: "light",
    fonts: {
      body: "inter",
      display: "inter",
    },
  },

  deployment: {
    base: process.env.NETLIFY === "true" ? "/" : "/ultraso",
  },
});
