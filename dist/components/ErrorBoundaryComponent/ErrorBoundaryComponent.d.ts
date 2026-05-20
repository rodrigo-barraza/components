import { Component, type ReactNode } from "react";
interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
    title?: string;
    subtitle?: string;
    onError?: (error: Error, info: {
        componentStack: string;
    }) => void;
    showDetails?: boolean;
}
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}
/**
 * ErrorBoundaryComponent — React Error Boundary that catches render errors
 * and displays a styled fallback UI instead of a white screen.
 *
 * Wrap page layouts or critical subtrees to prevent the entire app from
 * unmounting on an unexpected exception.
 */
export default class ErrorBoundaryComponent extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    componentDidCatch(error: any, info: any): void;
    handleRetry: () => void;
    render(): string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode>> | import("react/jsx-runtime").JSX.Element;
}
export {};
//# sourceMappingURL=ErrorBoundaryComponent.d.ts.map