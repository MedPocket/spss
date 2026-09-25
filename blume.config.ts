import type { AstroIntegration } from "astro";

import { defineConfig } from "blume";

const katexIntegration = (): AstroIntegration => ({
  name: "katex-auto-render",
  hooks: {
    "astro:config:setup": ({ injectScript }) => {
      injectScript(
        "page",
        `
import "katex/dist/katex.min.css";
import renderMathInElement from "katex/dist/contrib/auto-render.mjs";

function renderMath() {
  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true },
    ],
    throwOnError: false,
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderMath);
} else {
  renderMath();
}
document.addEventListener("astro:page-load", renderMath);
`,
      );
    },
  },
});

export default defineConfig({
  title: "SPSS",
  description: "Ứng dụng SPSS trong thống kê và phân tích số liệu.",

  feedback: false,

  github: {
    owner: "MedPocket",
    repo: "spss",
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

  integrations: [katexIntegration()],

  deployment: {
    base: process.env.NETLIFY === "true" ? "/" : "/spss",
  },
});
