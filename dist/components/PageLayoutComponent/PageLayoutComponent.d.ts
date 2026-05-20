/**
 * PageLayoutComponent — Unified page wrapper composing NavigationSidebar +
 * MobileHeader + main content area.
 *
 * Encapsulates the repeated pattern of sidebar + mobile drawer management
 * that was duplicated across iron-client and portal-client.
 */
export default function PageLayoutComponent({ children, brandIcon, brandLabel, items, sections, activeItem, storageKey, LinkComponent, mainStyle, mainClassName, theme, themes, setTheme, bottomActions, mobileHeaderActions, mobileBreakpoint, sidebarProps, }: {
    children: any;
    brandIcon: any;
    brandLabel: any;
    items: any;
    sections: any;
    activeItem: any;
    storageKey: any;
    LinkComponent: any;
    mainStyle: any;
    mainClassName: any;
    theme: any;
    themes: any;
    setTheme: any;
    bottomActions: any;
    mobileHeaderActions: any;
    mobileBreakpoint?: number;
    sidebarProps?: {};
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PageLayoutComponent.d.ts.map