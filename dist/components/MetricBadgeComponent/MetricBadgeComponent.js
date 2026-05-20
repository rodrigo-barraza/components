import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useTweenValue from "../../hooks/useTweenValue.js";
import TooltipComponent from "../TooltipComponent/TooltipComponent.js";
import styles from "./MetricBadgeComponent.module.css";
/**
 * MetricBadgeComponent — Generic inline metric pill with optional icon,
 * count-up tween animation, and tooltip.
 *
 * Replaces the pattern of 17+ nearly-identical badge components in prism-client
 * (CostBadge, TokenCountBadge, RequestCountBadge, ThroughputBadge, etc.) with
 * a single parameterized component.
 */
export default function MetricBadgeComponent({ value, label, icon, tooltip, formatFn, color, tween = false, tweenDuration = 600, round = true, mini = false, hideWhenZero = true, className = "", }) {
    const [displayValue, tweening] = useTweenValue(value, {
        duration: tweenDuration,
        round,
        enabled: tween,
    });
    if (hideWhenZero && (!value || value <= 0))
        return null;
    const formattedValue = formatFn
        ? formatFn(displayValue)
        : round
            ? Math.round(displayValue).toLocaleString()
            : displayValue.toLocaleString();
    const tooltipLabel = tooltip || `${Math.round(value).toLocaleString()}${label ? ` ${label}` : ""}`;
    // Resolve color class or inline style
    const colorClass = color && styles[color] ? styles[color] : "";
    const customColorStyle = color && !styles[color]
        ? { "--metric-color": color }
        : undefined;
    return (_jsx(TooltipComponent, { label: tooltipLabel, position: "top", children: _jsxs("span", { className: [
                styles.badge,
                colorClass,
                !colorClass && color ? styles.custom : "",
                mini ? styles.mini : "",
                tweening ? styles.tweening : "",
                className,
            ].filter(Boolean).join(" "), style: customColorStyle, children: [icon && _jsx("span", { className: styles.icon, children: icon }), _jsx("span", { children: formattedValue }), label && _jsx("span", { children: label })] }) }));
}
//# sourceMappingURL=MetricBadgeComponent.js.map