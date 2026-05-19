/**
 * StatusBadgeComponent — Semantic badge for service health status.
 *
 * Renders a pulsing dot indicator alongside a Noto Emoji glyph:
 *   ✓ (U+2713 CHECK MARK) for healthy
 *   ✗ (U+2717 BALLOT X) for down
 *
 * The glyphs are rendered in the monochrome "Noto Emoji" typeface
 * via the `--font-emoji` design token.
 *
 * @param {boolean} healthy — Whether the service is healthy
 * @param {string} [className] — Additional CSS class
 */
export default function StatusBadgeComponent({ healthy, className, ...rest }: {
    [x: string]: any;
    healthy: any;
    className: any;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=StatusBadgeComponent.d.ts.map