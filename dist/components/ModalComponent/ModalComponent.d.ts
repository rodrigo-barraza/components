/**
 * ModalComponent — Structured modal dialog with header, body, and footer.
 *
 * Renders a full-screen overlay with a centered panel. Supports Escape
 * and click-outside dismissal, React Portal mounting, body scroll lock,
 * focus trapping with focus restoration, and four size presets.
 */
export default function ModalComponent({ title, onClose, footer, size, variant, className, id, children, }: {
    title: any;
    onClose: any;
    footer: any;
    size?: string;
    variant?: string;
    className: any;
    id: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ModalComponent.d.ts.map