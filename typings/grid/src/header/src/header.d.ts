declare const _default: {
    name: string;
    props: {
        collectColumn: ArrayConstructor;
        fixedColumn: ArrayConstructor;
        fixedType: StringConstructor;
        size: StringConstructor;
        isGroup: BooleanConstructor;
        tableColumn: ArrayConstructor;
        tableData: ArrayConstructor;
        visibleColumn: ArrayConstructor;
    };
    watch: {
        tableColumn(): void;
    };
    data(): {
        headerColumn: never[];
    };
    mounted(): void;
    created(): void;
    render(): any;
    methods: {
        uploadColumn(): void;
        resizeMousedown(event: any, params: any): void;
    };
};
export default _default;
