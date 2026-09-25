import { defineComponents } from "blume";

import Footer from "./components/Footer.astro";
import KaTeX from "./components/KaTeX.astro";

export default defineComponents({
  layout: {
    Footer,
    PageFooter: KaTeX,
  },
});
