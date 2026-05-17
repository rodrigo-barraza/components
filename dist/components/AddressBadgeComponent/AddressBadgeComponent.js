"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import BadgeComponent from "../BadgeComponent/BadgeComponent.js";
import styles from "./AddressBadgeComponent.module.css";
export default function AddressBadgeComponent({ address, link = false, className, ...rest }) {
    if (!address)
        return null;
    const display = address.replace(/^https?:\/\//, "");
    const badge = (_jsx(BadgeComponent, { variant: "info", className: `${styles.badge} ${className || ""}`, tooltip: `Internal address: ${display}`, ...rest, children: display }));
    if (link) {
        const href = address.startsWith("http") ? address : `http://${address}`;
        return (_jsx("a", { href: href, target: "_blank", rel: "noopener noreferrer", className: styles.link, children: badge }));
    }
    return badge;
}
//# sourceMappingURL=AddressBadgeComponent.js.map