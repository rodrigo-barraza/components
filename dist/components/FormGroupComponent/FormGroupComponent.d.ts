import styles from "./FormGroupComponent.module.css";
/**
 * FormGroupComponent — A labeled form field wrapper.
 */
export default function FormGroupComponent({ label, hint, readOnly, readOnlyContent, children, className, style, }: {
    label: any;
    hint: any;
    readOnly?: boolean;
    readOnlyContent: any;
    children: any;
    className: any;
    style: any;
}): import("react/jsx-runtime").JSX.Element;
/**
 * Re-export the inputField class for raw <input> elements that need
 * consistent styling without a full FormGroupComponent wrapper.
 */
export { styles as formGroupStyles };
//# sourceMappingURL=FormGroupComponent.d.ts.map