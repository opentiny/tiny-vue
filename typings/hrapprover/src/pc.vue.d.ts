declare const _default: {
    inheritAttrs: boolean;
    props: string[];
    components: {
        Dept: any;
        Radio: any;
    };
    directives: {
        loading: any;
    };
    provide(): {
        hrapprover: {
            inheritAttrs: boolean;
            props: string[];
            components: {
                Dept: any;
                Radio: any;
            };
            directives: {
                loading: any;
            };
            provide(): any;
            setup(props: any, context: any): {
                t: any;
                vm: any;
                f: (props: any, attrs?: {}) => {};
                a: (attrs: any, filters: any, include: any) => {};
                d: (props: any) => void;
                dp: (props: any) => void;
            } & {
                showModal(): void;
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
    } & {
        showModal(): void;
    };
};
export default _default;
