# Instructions for AI agents

## Project Structure

```
.
├── assets/             # Images and visual media assets for docs articles
├── docs/               # Documentation articles (Markdown / MDX)
│   ├── 01-co-ban/      # Section 1
│   │   ├── 01-vat-ly-sieu-am.mdx
│   │   ├── 02-modes.mdx
│   │   └── meta.ts     # Folder configuration (title, icon, order...)
│   ├── 02-ky-thuat-quet/
│   ├── 03-sieu-am-mo-mem/
│   ├── 04-sieu-am-san-khoa/
│   └── index.mdx       # Homepage content
├── AGENTS.md           # Instructions & structure for AI agents
├── STYLEGUIDE.md       # Writing, formatting, and clinical standards
└── blume.config.ts     # Blume site configuration
```

## Documentation

**Blume Documentation:** Refer to [https://useblume.dev/docs](https://useblume.dev/docs) whenever guidance on Blume components, navigation, or features is needed.

## Authoring Rules

Follow [**STYLEGUIDE.md**](./STYLEGUIDE.md) for all document formatting, style standards, medical terminology, and document structure.

## Review Checklist

- [ ] Run `bun install` after pulling remote changes and before getting started.
- [ ] Run `bun run typecheck`, `bun run lint lint` and `bun run fmt` to format, lint, type check.
- [ ] Check if `package.json` scripts necessary for validation, run via `bun run <script>`.
