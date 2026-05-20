/**
 * DialogComponent — M3 AlertDialog
 *
 * A focused, interruptive prompt that requires user acknowledgment.
 * Implements the Material Design 3 dialog pattern with proper
 * scrim, focus trapping, Escape dismissal, and accessible markup.
 *
 * @see https://m3.material.io/components/dialogs
 *
 * Anatomy: [scrim] → [container] → [icon?] → [headline?] → [body] → [actions]
 */
export default function DialogComponent({ open, onClose, icon, headline, onConfirm, confirmLabel, cancelLabel, hideCancel, confirmVariant, confirmDisabled, fullscreen, dismissible, className, id, children, }: {
    open: any;
    onClose: any;
    icon: any;
    headline: any;
    onConfirm: any;
    confirmLabel?: string;
    cancelLabel?: string;
    hideCancel?: boolean;
    confirmVariant?: string;
    confirmDisabled?: boolean;
    fullscreen?: boolean;
    dismissible?: boolean;
    className: any;
    id: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DialogComponent.d.ts.map