declare const _default: import("vue").DefineComponent<{
    backgroundImage: (ObjectConstructor | StringConstructor)[];
    formData: {
        type: ObjectConstructor;
        default: () => {
            cardYear: string;
            cardNumber: string;
            cardName: string;
            cardMonth: string;
            cardCvv: string;
        };
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "input-card-number" | "input-card-name" | "input-card-month" | "input-card-year" | "input-card-cvv")[], "submit" | "input-card-number" | "input-card-name" | "input-card-month" | "input-card-year" | "input-card-cvv", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    backgroundImage: (ObjectConstructor | StringConstructor)[];
    formData: {
        type: ObjectConstructor;
        default: () => {
            cardYear: string;
            cardNumber: string;
            cardName: string;
            cardMonth: string;
            cardCvv: string;
        };
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
    "onInput-card-number"?: ((...args: any[]) => any) | undefined;
    "onInput-card-name"?: ((...args: any[]) => any) | undefined;
    "onInput-card-month"?: ((...args: any[]) => any) | undefined;
    "onInput-card-year"?: ((...args: any[]) => any) | undefined;
    "onInput-card-cvv"?: ((...args: any[]) => any) | undefined;
}, {
    formData: Record<string, any>;
}>;
export default _default;
