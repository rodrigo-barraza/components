/**
 * NavigationRailComponent — M3 Navigation Rail
 *
 * A vertical bar for switching between 3–7 primary destinations on
 * mid-to-large viewports. Follows Material Design 3 specifications:
 *
 * - Fixed 80px width with vertically stacked icon+label destinations
 * - Active indicator pill (56×32) using secondaryContainer color
 * - Optional FAB slot above destinations
 * - Optional menu/hamburger icon at the top
 * - Keyboard navigation: ArrowUp/Down cycles, Home/End jumps
 * - Full ARIA: role="navigation", tablist pattern on destinations
 */
export default function NavigationRailComponent({ items, activeItem, onNavigate, fab, menuIcon, alignment, labelsHidden, bottomSlot, LinkComponent, className, ariaLabel, }: {
    items?: any[];
    activeItem: any;
    onNavigate: any;
    fab: any;
    menuIcon: any;
    alignment?: string;
    labelsHidden?: boolean;
    bottomSlot: any;
    LinkComponent: any;
    className?: string;
    ariaLabel?: string;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=NavigationRailComponent.d.ts.map