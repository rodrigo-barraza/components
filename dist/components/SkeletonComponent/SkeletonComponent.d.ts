/**
 * SkeletonComponent — Content placeholder loader with shimmer animation.
 *
 * Renders a grey, pulsing rectangle that indicates where content will appear.
 * Follows the "skeleton screen" pattern — the industry-standard approach for
 * perceived performance in data-heavy views.
 *
 * Supports text lines, circular avatars, rectangular cards, and fully custom
 * dimensions via width/height props.
 */
export default function SkeletonComponent({ variant, width, height, lines, animate, className, id, }: {
    variant?: string;
    width: any;
    height: any;
    lines?: number;
    animate?: boolean;
    className?: string;
    id: any;
}): import("react/jsx-runtime").JSX.Element;
/**
 * SkeletonGroup — Compose multiple skeleton shapes inside a container.
 */
export declare function SkeletonGroup({ gap, direction, className, children, }: {
    gap?: string;
    direction?: string;
    className?: string;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SkeletonComponent.d.ts.map