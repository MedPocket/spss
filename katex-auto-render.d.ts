declare module "katex/dist/contrib/auto-render.mjs" {
  export interface AutoRenderOptions {
    delimiters?: Array<{
      left: string;
      right: string;
      display: boolean;
    }>;
    ignoredTags?: string[];
    ignoredClasses?: string[];
    errorCallback?: (msg: string, err: Error) => void;
    preProcess?: (math: string) => string;
    throwOnError?: boolean;
    errorColor?: string;
    macros?: Record<string, unknown>;
    minRuleThickness?: number;
    colorIsTextColor?: boolean;
    maxSize?: number;
    maxExpand?: number;
    strict?: boolean | string | ((...args: unknown[]) => unknown);
    trust?: boolean | ((...args: unknown[]) => boolean);
    output?: "htmlAndMathml" | "html" | "mathml";
    leqno?: boolean;
    fleqn?: boolean;
  }

  export default function renderMathInElement(
    element: HTMLElement | null,
    options?: AutoRenderOptions,
  ): void;
}
