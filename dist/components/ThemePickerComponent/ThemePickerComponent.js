"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from "react";
import * as Icons from "lucide-react";
import TooltipComponent from "../TooltipComponent/TooltipComponent.js";
import styles from "./ThemePickerComponent.module.css";
const THEME_CATALOG = {
    dark: {
        label: "Dark",
        icon: "Moon",
        background: "#0a0a0f",
        surface: "#13141c",
        elevated: "#1a1b26",
        primary: "#6366f1",
        secondary: "#a78bfa",
        tertiary: "#38bdf8",
        textPrimary: "#f8f8f8",
        textSecondary: "#8e95ae",
        textMuted: "#565c74",
        borderColor: "#ffffff",
        success: "#10b981",
        danger: "#ef4444",
        warning: "#f59e0b",
        info: "#3b82f6",
    },
    light: {
        label: "Light",
        icon: "Sun",
        background: "#f5f5f7",
        surface: "#ffffff",
        elevated: "#edeef2",
        primary: "#4f46e5",
        secondary: "#e11d48",
        tertiary: "#f59e0b",
        textPrimary: "#1a1a2e",
        textSecondary: "#64748b",
        textMuted: "#94a3b8",
        borderColor: "#000000",
        success: "#059669",
        danger: "#dc2626",
        warning: "#d97706",
        info: "#2563eb",
    },
    tropical: {
        label: "Tropical",
        icon: "Palmtree",
        background: "#1a120e",
        surface: "#241a14",
        elevated: "#2e221a",
        primary: "#ff6b6b",
        secondary: "#00ceaa",
        tertiary: "#fbbf24",
        textPrimary: "#faebd7",
        textSecondary: "#c4a882",
        textMuted: "#8a7560",
        borderColor: "#00ceaa",
        success: "#00d4aa",
        danger: "#ff5252",
        warning: "#ffb347",
        info: "#4fc3f7",
    },
    oceanic: {
        label: "Oceanic",
        icon: "Waves",
        background: "#060d18",
        surface: "#0b1628",
        elevated: "#111f38",
        primary: "#00b4d8",
        secondary: "#48e0a0",
        tertiary: "#a78bfa",
        textPrimary: "#d0e8f2",
        textSecondary: "#7ba7c2",
        textMuted: "#4a7a96",
        borderColor: "#00b4d8",
        success: "#48e0a0",
        danger: "#ff6b6b",
        warning: "#ffc857",
        info: "#90e0ef",
    },
    punk: {
        label: "Punk",
        icon: "Skull",
        background: "#0e0a10",
        surface: "#171119",
        elevated: "#211828",
        primary: "#ff2d9b",
        secondary: "#f0b429",
        tertiary: "#a78bfa",
        textPrimary: "#f0e6f4",
        textSecondary: "#b893c4",
        textMuted: "#7d5f8e",
        borderColor: "#ff2d9b",
        success: "#39ff76",
        danger: "#ff3d5a",
        warning: "#f0b429",
        info: "#a78bfa",
    },
    muted: {
        label: "Muted",
        icon: "CloudFog",
        background: "#dddee3",
        surface: "#e8e9ed",
        elevated: "#d2d4da",
        primary: "#7c8290",
        secondary: "#9f7aea",
        tertiary: "#7c8290",
        textPrimary: "#2d2d3f",
        textSecondary: "#6b7394",
        textMuted: "#949cb4",
        borderColor: "#000000",
        success: "#0c8346",
        danger: "#c92a2a",
        warning: "#c77c08",
        info: "#1d6fdb",
    },
    ember: {
        label: "Ember",
        icon: "Flame",
        background: "#120c08",
        surface: "#1c1410",
        elevated: "#261c16",
        primary: "#f59e0b",
        secondary: "#e06c4e",
        tertiary: "#34d399",
        textPrimary: "#f5ebe0",
        textSecondary: "#c2a68a",
        textMuted: "#8b7260",
        borderColor: "#f59e0b",
        success: "#34d399",
        danger: "#ef4444",
        warning: "#fbbf24",
        info: "#60a5fa",
    },
    arctic: {
        label: "Arctic",
        icon: "Snowflake",
        background: "#0a0e14",
        surface: "#101824",
        elevated: "#182030",
        primary: "#94cce0",
        secondary: "#a78bfa",
        tertiary: "#fbbf24",
        textPrimary: "#e0ecf2",
        textSecondary: "#8aaec6",
        textMuted: "#5a7a92",
        borderColor: "#94cce0",
        success: "#34d399",
        danger: "#f87171",
        warning: "#fbbf24",
        info: "#7dd3fc",
    },
    forest: {
        label: "Forest",
        icon: "TreePine",
        background: "#080e08",
        surface: "#0e1a0e",
        elevated: "#162416",
        primary: "#4ade80",
        secondary: "#fbbf24",
        tertiary: "#06b6d4",
        textPrimary: "#e0f0e0",
        textSecondary: "#8ab88a",
        textMuted: "#5a7a5a",
        borderColor: "#4ade80",
        success: "#34d399",
        danger: "#f87171",
        warning: "#fbbf24",
        info: "#67e8f9",
    },
    mono: {
        label: "Mono",
        icon: "Contrast",
        background: "#101010",
        surface: "#1a1a1a",
        elevated: "#242424",
        primary: "#a0a0a0",
        secondary: "#d4d4d4",
        tertiary: "#737373",
        textPrimary: "#e8e8e8",
        textSecondary: "#a0a0a0",
        textMuted: "#666666",
        borderColor: "#a0a0a0",
        success: "#a0a0a0",
        danger: "#d4d4d4",
        warning: "#a0a0a0",
        info: "#bcbcbc",
    },
};
export default function ThemePickerComponent({ theme, themes = [], onSelectTheme, collapsed = false, className, customThemeMeta = {}, }) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    const triggerRef = useRef(null);
    const popoverRef = useRef(null);
    const [popoverStyle, setPopoverStyle] = useState({});
    // Close on outside click (check both wrapper and popover — popover may be fixed-positioned outside wrapper)
    useEffect(() => {
        if (!open)
            return;
        const handleClick = (event) => {
            const inWrapper = wrapperRef.current?.contains(event.target);
            const inPopover = popoverRef.current?.contains(event.target);
            if (!inWrapper && !inPopover) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);
    // Close on Escape
    useEffect(() => {
        if (!open)
            return;
        const handleKey = (event) => {
            if (event.key === "Escape")
                setOpen(false);
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [open]);
    // Compute fixed position when opening in collapsed mode
    useEffect(() => {
        if (!open || !collapsed || !triggerRef.current) {
            setPopoverStyle({});
            return;
        }
        const rect = triggerRef.current.getBoundingClientRect();
        setPopoverStyle({
            position: 'fixed',
            bottom: 'auto',
            left: `${rect.right + 8}px`,
            top: `${Math.max(8, rect.bottom - 400)}px`, // anchor near trigger bottom, clamp to viewport
            right: 'auto',
        });
    }, [open, collapsed]);
    const handleSelect = useCallback((themeName) => {
        onSelectTheme?.(themeName);
        setOpen(false);
    }, [onSelectTheme]);
    const DEFAULT_META = {
        label: "Theme", icon: "Palette",
        background: "#222", surface: "#333", elevated: "#444",
        primary: "#888", secondary: "#aaa", tertiary: "#666",
        textPrimary: "#eee", textSecondary: "#aaa", textMuted: "#666",
        borderColor: "#888",
        success: "#10b981", danger: "#ef4444", warning: "#f59e0b", info: "#3b82f6",
    };
    const currentMeta = THEME_CATALOG[theme] || customThemeMeta[theme] || DEFAULT_META;
    const CurrentIcon = Icons[currentMeta.icon] || Icons.Palette;
    const triggerButton = (_jsxs("button", { ref: triggerRef, className: styles.trigger, onClick: () => setOpen((previous) => !previous), title: "Change theme", type: "button", children: [_jsxs("span", { className: styles.triggerSwatchDual, children: [_jsx("span", { className: styles.triggerSwatchHalf, style: { background: currentMeta.primary } }), _jsx("span", { className: styles.triggerSwatchHalf, style: { background: currentMeta.secondary } })] }), _jsx(CurrentIcon, { size: 18, strokeWidth: 1.8, className: styles.triggerIcon }), _jsx("span", { className: styles.triggerLabel, children: currentMeta.label }), _jsx(Icons.ChevronUp, { size: 14, className: `${styles.triggerChevron} ${open ? styles.triggerChevronOpen : ""}` })] }));
    return (_jsxs("div", { ref: wrapperRef, className: `${styles.wrapper} ${collapsed ? styles.collapsed : ""} ${className || ""}`, children: [collapsed ? (_jsx(TooltipComponent, { label: currentMeta.label, position: "right", delay: 200, disabled: open, className: styles.tooltipFill, children: triggerButton })) : (triggerButton), open && (_jsxs("div", { ref: popoverRef, className: `${styles.popover} ${collapsed ? styles.popoverFlyout : ""}`, style: collapsed ? popoverStyle : undefined, children: [_jsx("div", { className: styles.popoverHeader, children: "Theme" }), _jsx("div", { className: styles.themeList, children: themes.map((themeName) => {
                            const meta = THEME_CATALOG[themeName] || customThemeMeta[themeName] || DEFAULT_META;
                            const ThemeIcon = Icons[meta.icon] || Icons.Palette;
                            const isActive = themeName === theme;
                            return (_jsxs("button", { className: `${styles.themeOption} ${isActive ? styles.active : ""}`, onClick: () => handleSelect(themeName), type: "button", title: `Switch to ${meta.label} theme`, children: [_jsxs("span", { className: styles.swatchDual, style: {
                                            boxShadow: isActive ? `0 0 8px ${meta.primary}88` : "none",
                                        }, children: [_jsx("span", { className: styles.swatchHalf, style: { background: meta.primary } }), _jsx("span", { className: styles.swatchHalf, style: { background: meta.secondary } }), isActive && _jsx(Icons.Check, { size: 10, strokeWidth: 3, className: styles.swatchCheck })] }), _jsx(ThemeIcon, { size: 16, strokeWidth: 1.8, className: styles.optionIcon }), _jsx("span", { className: styles.optionLabel, children: meta.label })] }, themeName));
                        }) })] }))] }));
}
//# sourceMappingURL=ThemePickerComponent.js.map