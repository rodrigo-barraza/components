/**
 * NavigationDrawerComponent — M3-inspired navigation drawer.
 *
 * Material Design 3 defines two drawer types:
 *   • standard — persistent, in-flow side panel
 *   • modal   — temporary overlay with scrim backdrop
 *
 * Compound sub-components:
 *   NavigationDrawerComponent.Item           — navigable destination
 *   NavigationDrawerComponent.SectionHeader  — group heading text
 *   NavigationDrawerComponent.Divider        — horizontal rule
 *   NavigationDrawerComponent.Footer         — bottom-pinned slot
 *
 * Accessibility (WAI-ARIA):
 *   • role="navigation" with aria-label
 *   • Modal: focus trapping, Escape to close, scrim click to close
 *   • Keyboard: Tab/Shift+Tab through items, Enter/Space to activate
 *
 * @see https://m3.material.io/components/navigation-drawer/overview
 */
declare function NavigationDrawerComponent({ variant, anchor, open, onClose, headline, ariaLabel, className, style, children, ...rest }: {
    [x: string]: any;
    variant?: string;
    anchor?: string;
    open?: boolean;
    onClose: any;
    headline: any;
    ariaLabel?: string;
    className: any;
    style: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace NavigationDrawerComponent {
    var Item: typeof DrawerItem;
    var SectionHeader: typeof DrawerSectionHeader;
    var Divider: typeof DrawerDivider;
    var Footer: typeof DrawerFooter;
}
export default NavigationDrawerComponent;
/**
 * DrawerItem — individual navigation destination.
 *
 * M3 spec: 56dp height, full-width rounded-pill shape,
 *          leading icon, label, optional trailing badge.
 */
declare function DrawerItem({ icon: Icon, label, badge, active, disabled, href, onClick, LinkComponent, className, children, ...rest }: {
    [x: string]: any;
    icon: any;
    label: any;
    badge: any;
    active?: boolean;
    disabled?: boolean;
    href: any;
    onClick: any;
    LinkComponent: any;
    className: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
/**
 * DrawerSectionHeader — labelled group heading.
 *
 * M3 spec: title-small typography, 56dp total height with padding.
 */
declare function DrawerSectionHeader({ className, children }: {
    className: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
/**
 * DrawerDivider — horizontal visual separator between sections.
 */
declare function DrawerDivider({ className }: {
    className: any;
}): import("react/jsx-runtime").JSX.Element;
/**
 * DrawerFooter — bottom-pinned slot for actions or secondary content.
 */
declare function DrawerFooter({ className, children }: {
    className: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=NavigationDrawerComponent.d.ts.map