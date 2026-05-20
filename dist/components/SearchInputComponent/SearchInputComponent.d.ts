interface SearchInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    autoFocus?: boolean;
    compact?: boolean;
    useScrim?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    onTrailingClick?: () => void;
    onSubmit?: (value: string) => void;
    onExpand?: () => void;
    onCollapse?: () => void;
    children?: React.ReactNode;
}
declare function Suggestion({ icon, text, trailing, onClick, value, index }: {
    icon: any;
    text: any;
    trailing: any;
    onClick: any;
    value: any;
    index?: number;
}): import("react/jsx-runtime").JSX.Element;
declare function SuggestionGroup({ label, children }: {
    label: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
declare function SuggestionsEmpty({ message }: {
    message?: string;
}): import("react/jsx-runtime").JSX.Element;
declare const SearchInputWithSubcomponents: import("react").ForwardRefExoticComponent<SearchInputProps & import("react").RefAttributes<HTMLInputElement>> & {
    Suggestion: typeof Suggestion;
    SuggestionGroup: typeof SuggestionGroup;
    Empty: typeof SuggestionsEmpty;
};
export default SearchInputWithSubcomponents;
//# sourceMappingURL=SearchInputComponent.d.ts.map