/**
 * ErrorFallbackComponent — Shared error recovery UI for Next.js
 * `error.js` route boundaries. Replaces inline-styled error pages
 * across all client projects with a single, theme-aware component.
 *
 * **Usage in error.js:**
 * ```js
 * "use client";
 * import ErrorFallbackComponent from "@rodrigo-barraza/components-library/src/components/ErrorFallbackComponent/ErrorFallbackComponent";
 * export default function Error({ error, reset }) {
 *   return <ErrorFallbackComponent error={error} reset={reset} />;
 * }
 * ```
 */
export default function ErrorFallbackComponent({ error, reset, title, logLabel, icon, }: {
    error: any;
    reset: any;
    title?: string;
    logLabel?: string;
    icon?: string;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ErrorFallbackComponent.d.ts.map