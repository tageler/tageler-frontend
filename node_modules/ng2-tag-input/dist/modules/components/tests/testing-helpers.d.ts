export declare class BasicTagInputComponent {
    items: string[];
}
export declare class TagInputComponentWithOutputs {
    items: string[];
    onAdd(): void;
    onRemove(): void;
    validators: any;
}
export declare class TagInputComponentTagsAsObjects {
    items: {
        value: number;
        display: string;
    }[];
}
export declare class TagInputComponentCustomTagsAsObjects {
    items: {
        id: number;
        name: string;
    }[];
}
export declare class TagInputComponentWithValidation {
    items: string[];
    validators: any;
    onAdd(): void;
    onRemove(): void;
}
export declare class TagInputComponentWithTransformer {
    items: string[];
    addPrefix(item: string): string;
    validators: any;
}
export declare class TagInputComponentWithPlaceholder {
    items: string[];
}
export declare class TagInputComponentWithMaxItems {
    items: string[];
}
export declare class TagInputComponentWithAutocomplete {
    items: string[];
}
export declare class TagInputComponentWithTemplate {
    items: string[];
}
export declare class TagInputComponentWithOnlyAutocomplete {
    items: string[];
}
export declare class TagInputComponentWithModelAsStrings {
    items: string[];
}
export declare class TestModule {
}
