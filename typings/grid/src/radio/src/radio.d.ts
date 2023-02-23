declare const _default: {
    name: string;
    model: {
        prop: string;
        event: string;
    };
    props: {
        value: (StringConstructor | NumberConstructor)[];
        label: (StringConstructor | NumberConstructor)[];
        disabled: BooleanConstructor;
        name: StringConstructor;
        size: StringConstructor;
    };
    computed: {
        vSize(): any;
    };
    setup(props: any, { slots }: {
        slots: any;
    }): {
        slots: any;
    };
    render(): any;
};
export default _default;
