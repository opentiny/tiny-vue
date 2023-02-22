declare const _default: {
    name: string;
    components: {
        IconClose: any;
    };
    emits: string[];
    props: {
        panes: {
            type: ArrayConstructor;
            default: () => never[];
        };
        currentName: StringConstructor;
        activeColor: {
            type: StringConstructor;
            default: string;
        };
        onTabClick: {
            type: FunctionConstructor;
            default: () => void;
        };
        onTabRemove: {
            type: FunctionConstructor;
            default: () => void;
        };
        showMoreTabs: BooleanConstructor;
        showPanesCount: NumberConstructor;
    };
    setup(props: any, context: any): {
        t: any;
        vm: any;
        f: (props: any, attrs?: {}) => {};
        a: (attrs: any, filters: any, include: any) => {};
        d: (props: any) => void;
        dp: (props: any) => void;
    };
    render(): JSX.Element;
};
export default _default;
