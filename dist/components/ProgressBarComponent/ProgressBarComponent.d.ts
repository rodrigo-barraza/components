/**
 * ProgressBarComponent — M3 Linear Progress Indicator.
 *
 * Two modes:
 *   • **Determinate** — pass `value` (0–100) to show a definite progress bar
 *   • **Indeterminate** — omit `value` to show the M3 infinite sliding animation
 */
export default function ProgressBarComponent({ value, variant, size, label, showValue, animated, striped, className, ...rest }: {
    [x: string]: any;
    value: any;
    variant?: string;
    size?: string;
    label: any;
    showValue?: boolean;
    animated?: boolean;
    striped?: boolean;
    className: any;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ProgressBarComponent.d.ts.map