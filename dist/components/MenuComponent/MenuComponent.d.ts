export declare function MenuDivider(): import("react/jsx-runtime").JSX.Element;
export declare function MenuGroupLabel({ children }: {
    children: any;
}): import("react/jsx-runtime").JSX.Element;
interface MenuItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onMouseEnter'> {
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    trailingText?: React.ReactNode;
    disabled?: boolean;
    selected?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    onMouseEnter?: (e: React.MouseEvent) => void;
    children?: React.ReactNode;
}
export declare const MenuItem: import("react").ForwardRefExoticComponent<MenuItemProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare function SubMenu({ label, leadingIcon, disabled, children, }: {
    label: any;
    leadingIcon: any;
    disabled?: boolean;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
interface MenuComponentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    trigger: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    position?: "bottom-start" | "bottom-end" | "top-start" | "top-end";
    matchWidth?: boolean;
    closeOnSelect?: boolean;
    maxHeight?: number;
    ariaLabel?: string;
    children?: React.ReactNode;
}
declare const MenuComponent: import("react").ForwardRefExoticComponent<MenuComponentProps & import("react").RefAttributes<HTMLDivElement>>;
export default MenuComponent;
//# sourceMappingURL=MenuComponent.d.ts.map