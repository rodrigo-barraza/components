/**
 * AvatarComponent — M3-inspired avatar with image, initials, or icon fallback.
 *
 * Supports five sizes and an optional online/offline/busy/away status dot.
 * Compound sub-component `AvatarComponent.Group` stacks avatars with
 * overlapping borders and a "+N" overflow indicator.
 */
declare function AvatarComponent({ src, alt, name, icon: Icon, size, status, className, style, ...rest }: {
    [x: string]: any;
    src: any;
    alt?: string;
    name: any;
    icon: any;
    size?: string;
    status: any;
    className: any;
    style: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace AvatarComponent {
    var Group: typeof AvatarGroup;
}
export default AvatarComponent;
/**
 * AvatarComponent.Group — stacks avatars with overlapping layout.
 */
declare function AvatarGroup({ max, size, className, children }: {
    max?: number;
    size?: string;
    className: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AvatarComponent.d.ts.map