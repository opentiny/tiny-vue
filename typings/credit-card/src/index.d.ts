declare const _default: import("vue").DefineComponent<{
    backgroundImage: (ObjectConstructor | StringConstructor)[];
    isCardNumberMasked: BooleanConstructor;
    fields: {
        type: ObjectConstructor;
        default: () => {};
    };
    labels: {
        type: ObjectConstructor;
        default: () => {
            cardCvv: string;
            cardMonth: string;
            cardName: string;
            cardNumber: string;
            cardYear: string;
        };
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    backgroundImage: (ObjectConstructor | StringConstructor)[];
    isCardNumberMasked: BooleanConstructor;
    fields: {
        type: ObjectConstructor;
        default: () => {};
    };
    labels: {
        type: ObjectConstructor;
        default: () => {
            cardCvv: string;
            cardMonth: string;
            cardName: string;
            cardNumber: string;
            cardYear: string;
        };
    };
}>>, {
    fields: Record<string, any>;
    labels: Record<string, any>;
    isCardNumberMasked: boolean;
}>;
export default _default;
