/**
 * BadgeComponent — standardized inline badge/pill.
 */
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: string;
    children?: React.ReactNode;
    className?: string;
    mini?: boolean;
    tooltip?: React.ReactNode;
}
export default function BadgeComponent({ variant, children, className, mini, tooltip, ...rest }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BadgeComponent.d.ts.map