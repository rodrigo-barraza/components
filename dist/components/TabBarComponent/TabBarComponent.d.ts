import styles from "./TabBarComponent.module.css";
/**
 * TabBarComponent — M3 Tabs
 *
 * Material Design 3 compliant tab bar with sliding active indicator,
 * state layers, and full ARIA tablist/tab keyboard navigation.
 *
 * Variants:
 *   • "primary"   — Full-width active indicator, on-surface active text
 *   • "secondary" — Shorter indicator, secondary coloring
 *
 * Layouts:
 *   • "inline"  — Icon + label side-by-side (default, 48px height)
 *   • "stacked" — Icon above label (64px height)
 *
 * }>} tabs
 */
export default function TabBarComponent({ tabs, activeTab, onChange, variant, layout, scrollable, className, onTabHover, glowingTabs, ariaLabel, }: {
    tabs?: any[];
    activeTab: any;
    onChange: any;
    variant?: string;
    layout?: string;
    scrollable?: boolean;
    className: any;
    onTabHover: any;
    glowingTabs?: any[];
    ariaLabel: any;
}): import("react/jsx-runtime").JSX.Element;
export { styles as tabBarStyles };
//# sourceMappingURL=TabBarComponent.d.ts.map