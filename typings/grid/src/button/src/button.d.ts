declare const _default: {
    name: string;
    inheritAttrs: boolean;
    props: {
        type: StringConstructor;
        size: StringConstructor;
        name: (StringConstructor | NumberConstructor)[];
        disabled: BooleanConstructor;
        loading: BooleanConstructor;
    };
    computed: {
        vSize(): any;
    };
    render(): any;
    methods: {
        clickDropdownEvent(event: any): void;
        mouseenterEvent(event: any): void;
        mouseleaveEvent(event: any): void;
    };
    setup(props: any, { slots, attrs, listeners }: {
        slots: any;
        attrs: any;
        listeners: any;
    }): {
        slots: any;
        tableListeners: any;
    };
};
export default _default;
