/**
 * MetricBadgeComponent — Generic inline metric pill with optional icon,
 * count-up tween animation, and tooltip.
 *
 * Replaces the pattern of 17+ nearly-identical badge components in prism-client
 * (CostBadge, TokenCountBadge, RequestCountBadge, ThroughputBadge, etc.) with
 * a single parameterized component.
 */
export default function MetricBadgeComponent({ value, label, icon, tooltip, formatFn, color, tween, tweenDuration, round, mini, hideWhenZero, className, }: {
    value: any;
    label: any;
    icon: any;
    tooltip: any;
    formatFn: any;
    color: any;
    tween?: boolean;
    tweenDuration?: number;
    round?: boolean;
    mini?: boolean;
    hideWhenZero?: boolean;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MetricBadgeComponent.d.ts.map