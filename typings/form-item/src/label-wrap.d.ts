declare const _default: {
    props: {
        isAutoWidth: BooleanConstructor;
        updateAll: BooleanConstructor;
        isMobile: BooleanConstructor;
    };
    inject: string[];
    render(): any;
    methods: {
        getLabelWidth(): any;
        updateLabelWidth(action?: string): void;
    };
    watch: {
        computedWidth(val: any, oldVal: any): void;
    };
    setup(props: any, context: any): {
        t: any;
        vm: any;
        f: (props: any, attrs?: {}) => {};
        a: (attrs: any, filters: any, include: any) => {};
        d: (props: any) => void;
        dp: (props: any) => void;
    };
};
export default _default;
