declare const _default: {
    props: string[];
    components: {
        TreeNode: {
            name: string;
            componentName: string;
            directives: any;
            inject: string[];
            provide(): {
                parentTree: any;
            };
            emits: string[];
            props: {
                node: {
                    default(): {};
                };
                props: {};
                expandIcon: ObjectConstructor;
                shrinkIcon: ObjectConstructor;
                renderContent: FunctionConstructor;
                renderAfterExpand: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showCheckbox: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showRadio: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                currentRadio: {
                    type: ObjectConstructor;
                    default(): {
                        value: null;
                    };
                };
            };
            components: {
                CollapseTransition: any;
                Checkbox: any;
                TinyRadio: any;
                IconChevronRight: any;
                IconLoading: any;
                MenuContext: {
                    props: {
                        node: {
                            required: boolean;
                        };
                    };
                    render(): any;
                };
                NodeContent: {
                    props: {
                        node: {
                            required: boolean;
                        };
                        renderContent: FunctionConstructor;
                    };
                    inject: string[];
                    render(): any;
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
        };
    };
    emits: string[];
    provide(): {
        parentTree: {
            props: string[];
            components: {
                TreeNode: {
                    name: string;
                    componentName: string;
                    directives: any;
                    inject: string[];
                    provide(): {
                        parentTree: any;
                    };
                    emits: string[];
                    props: {
                        node: {
                            default(): {};
                        };
                        props: {};
                        expandIcon: ObjectConstructor;
                        shrinkIcon: ObjectConstructor;
                        renderContent: FunctionConstructor;
                        renderAfterExpand: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        showCheckbox: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        showRadio: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        currentRadio: {
                            type: ObjectConstructor;
                            default(): {
                                value: null;
                            };
                        };
                    };
                    components: {
                        CollapseTransition: any;
                        Checkbox: any;
                        TinyRadio: any;
                        IconChevronRight: any;
                        IconLoading: any;
                        MenuContext: {
                            props: {
                                node: {
                                    required: boolean;
                                };
                            };
                            render(): any;
                        };
                        NodeContent: {
                            props: {
                                node: {
                                    required: boolean;
                                };
                                renderContent: FunctionConstructor;
                            };
                            inject: string[];
                            render(): any;
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
                };
            };
            emits: string[];
            provide(): any;
            setup(props: any, context: any): {
                t: any;
                vm: any;
                f: (props: any, attrs?: {}) => {};
                a: (attrs: any, filters: any, include: any) => {};
                d: (props: any) => void;
                dp: (props: any) => void;
            };
        };
        TreeRoot: {
            props: string[];
            components: {
                TreeNode: {
                    name: string;
                    componentName: string;
                    directives: any;
                    inject: string[];
                    provide(): {
                        parentTree: any;
                    };
                    emits: string[];
                    props: {
                        node: {
                            default(): {};
                        };
                        props: {};
                        expandIcon: ObjectConstructor;
                        shrinkIcon: ObjectConstructor;
                        renderContent: FunctionConstructor;
                        renderAfterExpand: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        showCheckbox: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        showRadio: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        currentRadio: {
                            type: ObjectConstructor;
                            default(): {
                                value: null;
                            };
                        };
                    };
                    components: {
                        CollapseTransition: any;
                        Checkbox: any;
                        TinyRadio: any;
                        IconChevronRight: any;
                        IconLoading: any;
                        MenuContext: {
                            props: {
                                node: {
                                    required: boolean;
                                };
                            };
                            render(): any;
                        };
                        NodeContent: {
                            props: {
                                node: {
                                    required: boolean;
                                };
                                renderContent: FunctionConstructor;
                            };
                            inject: string[];
                            render(): any;
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
                };
            };
            emits: string[];
            provide(): any;
            setup(props: any, context: any): {
                t: any;
                vm: any;
                f: (props: any, attrs?: {}) => {};
                a: (attrs: any, filters: any, include: any) => {};
                d: (props: any) => void;
                dp: (props: any) => void;
            };
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
};
export default _default;
