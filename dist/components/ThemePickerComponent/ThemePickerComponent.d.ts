/**
 * Theme metadata — icon, label, and representative colors for each built-in theme.
 *
 * `color` is the primary `--accent-color` and `secondary` is `--accent-secondary`
 * from each theme's CSS custom properties. Both are rendered as a dual-swatch so
 * the user can visually identify each theme's full palette at a glance.
 */
interface ThemeCatalogEntry {
    label: string;
    icon: string;
    background: string;
    surface: string;
    elevated: string;
    primary: string;
    secondary: string;
    tertiary: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    borderColor: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
}
/**
 * ThemePickerComponent — Dropup theme selector for sidebar footers.
 *
 * Displays the current theme as a trigger button. Clicking opens a dropup
 * popover with all available themes rendered as selectable buttons, each
 * showing a dual-color swatch (primary + secondary), icon, and label.
 */
interface ThemePickerProps {
    theme: string;
    themes?: string[];
    onSelectTheme: (theme: string) => void;
    collapsed?: boolean;
    className?: string;
    /** Dynamic metadata for custom user themes (overlays onto THEME_CATALOG) */
    customThemeMeta?: Record<string, ThemeCatalogEntry>;
}
export default function ThemePickerComponent({ theme, themes, onSelectTheme, collapsed, className, customThemeMeta, }: ThemePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ThemePickerComponent.d.ts.map