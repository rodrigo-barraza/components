/**
 * ThemePickerComponent — Dropup theme selector for sidebar footers.
 *
 * Displays the current theme as a trigger button. Clicking opens a dropup
 * popover with all available themes rendered as selectable buttons, each
 * showing a color swatch, icon, and label.
 */
interface ThemePickerProps {
    theme: string;
    themes?: string[];
    onSelectTheme: (theme: string) => void;
    collapsed?: boolean;
    className?: string;
}
export default function ThemePickerComponent({ theme, themes, onSelectTheme, collapsed, className, }: ThemePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ThemePickerComponent.d.ts.map