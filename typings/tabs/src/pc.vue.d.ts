import '@opentiny/vue-theme/tabs/index.css';
declare const _default: {
    emits: string[];
    props: string[];
    components: {
        TabNav: {
            name: string;
            components: {
                TabBar: {
                    name: string;
                    emits: string[];
                    props: {
                        tabs: ArrayConstructor;
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
                Popover: any;
                IconChevronLeft: any;
                IconChevronRight: any;
                IconClose: any;
            };
            emits: string[];
            props: {
                panes: {
                    type: ArrayConstructor;
                    default: () => never[];
                };
                currentName: StringConstructor;
                editable: BooleanConstructor;
                onTabClick: {
                    type: FunctionConstructor;
                    default: () => void;
                };
                onTabRemove: {
                    type: FunctionConstructor;
                    default: () => void;
                };
                tabStyle: StringConstructor;
                stretch: BooleanConstructor;
                showMoreTabs: BooleanConstructor;
                showPanesCount: NumberConstructor;
                popperClass: StringConstructor;
                popperAppendToBody: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                dropConfig: {
                    type: ObjectConstructor;
                    default: () => null;
                };
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
        IconPlus: any;
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
