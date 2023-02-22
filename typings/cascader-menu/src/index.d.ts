declare const _default: {
    name: string;
    components: {
        TinyScrollbar: any;
        CascaderNode: any;
    };
    props: {
        nodes: {
            type: ArrayConstructor;
            required: boolean;
        };
        index: NumberConstructor;
    };
    inject: string[];
    setup(props: any, context: any): {
        t: any;
        vm: any;
        f: (props: any, attrs?: {}) => {};
        a: (attrs: any, filters: any, include: any) => {};
        d: (props: any) => void;
        dp: (props: any) => void;
    };
    render(): any;
};
export default _default;
