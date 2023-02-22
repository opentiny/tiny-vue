declare const _default: {
    components: {
        TinyModal: any;
        TinyButton: any;
        TinyRadio: any;
        TinyGrid: any;
        TinyGridColumn: any;
        TinySelect: any;
        TinyOption: any;
        IconEyeopen: any;
        IconEyeclose: any;
        IconUnlock: any;
        IconLeftFrozen: any;
        IconRightFrozen: any;
        IconLock: any;
        IconMinus: any;
        IconDescending: any;
        IconAscending: any;
        IconHelp: any;
        TinyCustomSwitch: any;
    };
    name: string;
    inject: {
        $grid: {
            default: null;
        };
    };
    emits: string[];
    props: {
        data: {
            type: ArrayConstructor;
            default(): never[];
        };
        other: {
            type: BooleanConstructor;
            default: boolean;
        };
        initSettings: {
            type: ObjectConstructor;
            default(): {
                pageSizes: number[];
                pageSize: number;
                sortType: string;
                showIndex: boolean;
            };
        };
        value: BooleanConstructor;
        sortable: FunctionConstructor;
        rowClassName: (StringConstructor | FunctionConstructor)[];
        onBeforeMove: FunctionConstructor;
        filter: StringConstructor;
        refresh: BooleanConstructor;
        keys: {
            type: ArrayConstructor;
            default: () => never[];
        };
        numberSorting: BooleanConstructor;
        multipleHistory: (ObjectConstructor | BooleanConstructor)[];
    };
    data(): {
        activeName: string;
        animateShow: string;
        constants: {
            icon: {
                asc: string;
                desc: string;
                left: string;
                right: string;
            };
        };
        columns: never[];
        fullColumn: never[];
        customColumns: {
            field: string;
        }[];
        settings: {
            sortType: any;
            pageSize: any;
            columns: never[];
        };
        sortingOptions: never[];
        multipleHistoryId: null;
        saveDisabled: boolean;
    };
    created(): void;
    watch: {
        value(): void;
        data: {
            handler(val: any): void;
        };
        activeName: {
            handler(val: any): void;
        };
    };
    computed: {
        visible: {
            get(): any;
            set(): void;
        };
        showFixed(): any;
        tinyTable(): any;
        isGroup(): any;
        historyConfig(): any;
    };
    methods: {
        t: any;
        getColumnConfigs(configs: any): any;
        initNumberSorting(columns: any): void;
        handelNumberSorting(sort: any, row: any): void;
        handleRowDropEnd(): void;
        renderNumberSorting(h: any, { row }: {
            row: any;
        }): JSX.Element;
        handleCustomMouseMove(): void;
        handleInput(val: any): void;
        handleFixed(column: any): void;
        handlerSetting(type: any, column: any): void;
        buildSettings(): any;
        saveSettings(): void;
        resetSettings(event: any): void;
        cancelSettings(): void;
        handleClose(): void;
    };
};
export default _default;
