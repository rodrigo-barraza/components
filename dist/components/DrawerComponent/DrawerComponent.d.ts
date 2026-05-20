/**
 * DrawerComponent — M3 Side Sheet / slide-in drawer panel.
 *
 * A reusable panel that slides in from either side of the viewport.
 * Supports click-outside dismiss, Escape key, optional scrim overlay,
 * structured sections with label/value grids, and arbitrary children.
 */
export default function DrawerComponent({ open, onClose, title, anchor, width, scrim, dismissible, headerActions, sections, children, className, id, }: {
    open: any;
    onClose: any;
    title?: string;
    anchor?: string;
    width?: number;
    scrim?: boolean;
    dismissible?: boolean;
    headerActions: any;
    sections?: any[];
    children: any;
    className: any;
    id: any;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DrawerComponent.d.ts.map