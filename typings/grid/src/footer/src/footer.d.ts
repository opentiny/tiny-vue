declare const _default: {
    name: string;
    props: {
        fixedColumn: ArrayConstructor;
        fixedType: StringConstructor;
        footerData: ArrayConstructor;
        size: StringConstructor;
        tableColumn: ArrayConstructor;
        visibleColumn: ArrayConstructor;
    };
    mounted(): void;
    render(): any;
    methods: {
        scrollEvent(event: any): void;
        buildParamFunc(opt: any): {
            attrs: {
                'data-colid': any;
            };
            columnIndex: any;
            fixedHiddenColumn: any;
            footAlign: any;
            footerClassName: any;
            hasEllipsis: boolean;
            params: {
                $table: any;
                $rowIndex: any;
                column: any;
                columnIndex: any;
                $columnIndex: any;
                fixed: any;
            };
            tfOns: {};
        };
    };
};
export default _default;
