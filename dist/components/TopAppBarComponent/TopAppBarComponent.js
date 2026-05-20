"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect, forwardRef, } from "react";
import styles from "./TopAppBarComponent.module.css";
/**
 * TopAppBarComponent — Material Design 3 Top App Bar.
 *
 * Displays navigation, title, and actions at the top of a screen.
 * Supports all four M3 sub-types and scroll-aware behavior.
 *
 * @see https://m3.material.io/components/app-bars/overview
 * @see https://m3.material.io/components/app-bars/specs
 *
 * Compound sub-components:
 *   TopAppBarComponent.Action  — trailing icon button (up to 3 per M3 spec)
 *
 * M3 Sub-types:
 *   • "center-aligned" — 64dp, centered title, 1 trailing action max
 *   • "small"          — 64dp, left-aligned title, up to 3 trailing actions
 *   • "medium"         — 112dp expanded → 64dp collapsed, headline-small title
 *   • "large"          — 152dp expanded → 64dp collapsed, headline-medium title
 *
 * Scroll behavior:
 *   • flat (elevation 0) when content is at the top
 *   • elevated (elevation 2) when content is scrolled
 *   • medium/large: expanded title collapses into the main row on scroll
 *
 * Accessibility:
 *   • Rendered as `<header>` landmark for screen readers
 *   • Navigation icon and actions have aria-labels
 *   • Title uses an appropriate heading level (configurable via headingLevel)
 *   • Focus-visible outlines on all interactive elements
 *

 *   M3 sub-type controlling title placement and bar height.


 */
export default function TopAppBarComponent({ variant = "small", title, navigationIcon, onNavigationClick, navigationAriaLabel = "Navigate back", position = "sticky", scrollTargetRef, scrollThreshold = 4, showScrollIndicator = false, headingLevel = 1, ariaLabel, className, style, children, ...rest }) {
    const barRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    // Determine whether we use an expanded row (medium/large)
    const isExpandable = variant === "medium" || variant === "large";
    /**
     * Scroll listener — controls elevation and collapse state.
     * Uses requestAnimationFrame for jank-free scroll tracking.
     */
    useEffect(() => {
        const scrollEl = scrollTargetRef?.current || (typeof window !== "undefined" ? window : null);
        if (!scrollEl)
            return;
        let rafId = null;
        const handleScroll = () => {
            if (rafId)
                cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const scrollTop = scrollEl === window
                    ? window.scrollY || document.documentElement.scrollTop
                    : scrollEl.scrollTop;
                setIsScrolled(scrollTop > scrollThreshold);
                // Scroll progress (for the optional indicator line)
                if (showScrollIndicator && scrollEl) {
                    const maxScroll = scrollEl === window
                        ? document.documentElement.scrollHeight - window.innerHeight
                        : scrollEl.scrollHeight - scrollEl.clientHeight;
                    setScrollProgress(maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0);
                }
            });
        };
        scrollEl.addEventListener("scroll", handleScroll, { passive: true });
        // Run once to catch initial scroll state (e.g. restored scroll position)
        handleScroll();
        return () => {
            scrollEl.removeEventListener("scroll", handleScroll);
            if (rafId)
                cancelAnimationFrame(rafId);
        };
    }, [scrollTargetRef, scrollThreshold, showScrollIndicator]);
    // Variant class mapping
    const variantClass = {
        "center-aligned": styles.centerAligned,
        small: styles.small,
        medium: styles.medium,
        large: styles.large,
    }[variant] || styles.small;
    // Position class
    const positionClass = position === "fixed"
        ? styles.fixed
        : position === "sticky"
            ? styles.sticky
            : "";
    const rootClasses = [
        styles.topAppBar,
        variantClass,
        positionClass,
        isScrolled && styles.elevated,
        isScrolled && isExpandable && styles.collapsed,
        className,
    ]
        .filter(Boolean)
        .join(" ");
    // Heading element for the title
    const Heading = `h${headingLevel}`;
    return (_jsxs("header", { ref: barRef, role: "banner", "aria-label": ariaLabel, className: rootClasses, style: style, ...rest, children: [_jsxs("div", { className: styles.mainRow, children: [navigationIcon && (_jsx("div", { className: styles.navSlot, children: _jsx("button", { type: "button", className: styles.navButton, "aria-label": navigationAriaLabel, onClick: onNavigationClick, children: navigationIcon }) })), _jsx("div", { className: styles.titleArea, children: _jsx(Heading, { className: styles.title, children: title }) }), children && _jsx("div", { className: styles.actionsSlot, children: children })] }), isExpandable && (_jsx("div", { className: styles.expandedRow, children: _jsx("span", { className: styles.expandedTitle, children: title }) })), showScrollIndicator && (_jsx("div", { className: styles.scrollIndicator, style: { width: `${scrollProgress * 100}%` }, "aria-hidden": "true" }))] }));
}
const TopAppBarAction = forwardRef(function TopAppBarAction({ icon: Icon, ariaLabel, disabled = false, onClick, className, children, ...rest }, ref) {
    const classes = [styles.actionButton, className].filter(Boolean).join(" ");
    return (_jsx("button", { ref: ref, type: "button", className: classes, "aria-label": ariaLabel, disabled: disabled, onClick: onClick, ...rest, children: children || (Icon && _jsx(Icon, { size: 24 })) }));
});
/* ── Attach sub-components ──────────────────────────────────────────── */
TopAppBarComponent.Action = TopAppBarAction;
//# sourceMappingURL=TopAppBarComponent.js.map