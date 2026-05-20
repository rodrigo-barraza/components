/**
 * CarouselComponent — M3-inspired carousel with scroll-snap, nav arrows,
 * dot indicators, and keyboard/touch accessibility.
 *
 * Material Design 3 defines three carousel layouts:
 *   • multiBrowse (default) — equally-sized items, scrollable row
 *   • hero                 — one large item + small peek items
 *   • center               — active item centered, siblings peek
 *   • fullWidth             — each item takes 100% width (hero banner)
 *
 * Compound sub-components:
 *   CarouselComponent.Item       — individual carousel item container
 *   CarouselComponent.ItemMedia  — full-bleed image/video slot
 *   CarouselComponent.ItemLabel  — overlaid label with gradient scrim
 */
declare function CarouselComponent({ layout, showArrows, showIndicators, peekEdge, autoPlay, loop, gap, className, ariaLabel, children, }: {
    layout?: string;
    showArrows?: boolean;
    showIndicators?: boolean;
    peekEdge?: boolean;
    autoPlay?: number;
    loop?: boolean;
    gap?: number;
    className: any;
    ariaLabel?: string;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace CarouselComponent {
    var Item: typeof CarouselItem;
    var ItemMedia: typeof CarouselItemMedia;
    var ItemLabel: typeof CarouselItemLabel;
}
export default CarouselComponent;
/**
 * CarouselComponent.Item — individual carousel item container.
 *
 * M3 spec: rounded-corner container (28px shape-large) with
 * optional content masking and state layer for interaction.
 */
declare function CarouselItem({ width, height, aspectRatio, size, onClick, className, children, ...rest }: {
    [x: string]: any;
    width: any;
    height: any;
    aspectRatio: any;
    size: any;
    onClick: any;
    className: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
/**
 * CarouselComponent.ItemMedia — full-bleed image/video slot.
 */
declare function CarouselItemMedia({ src, alt, className, children }: {
    src: any;
    alt?: string;
    className: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
/**
 * CarouselComponent.ItemLabel — overlaid label with gradient scrim.
 *
 * M3 spec: optional label text with supporting text, positioned
 * at the bottom of the carousel item over a gradient scrim.
 */
declare function CarouselItemLabel({ title, subtitle, className, children }: {
    title: any;
    subtitle: any;
    className: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CarouselComponent.d.ts.map