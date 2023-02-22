declare const _default: {
    name: string;
    components: {
        TinyButton: any;
        TinySelect: any;
        TinyInput: any;
        TinyLayout: any;
        TinyRow: any;
        TinyCol: any;
        TinyAlert: any;
        TinyDialogBox: any;
    };
    inject: {
        $grid: {
            default: null;
        };
    };
    emits: string[];
    props: {
        historyConfig: {
            type: ObjectConstructor;
            default: () => {};
        };
    };
    data(): {
        IconSave: any;
        IconEdit: any;
        IconDel: any;
        saveDisabled: boolean;
        selectDisabled: boolean;
        applyDisabled: boolean;
        editDisabled: boolean;
        delDisabled: boolean;
        options: never[];
        option: null;
        selected: null;
        selectedName: null;
        visible: boolean;
        userKey: null;
        status: null;
        editName: null;
    };
    computed: {
        dialogTitle(): any;
    };
    created(): void;
    methods: {
        t: any;
        handleSave(): void;
        handleSaveConfirm(flag: any): void;
        handleApply(): void;
        handleApplyConfirm(flag: any): void;
        handleEdit(): void;
        handleEditConfirm(flag: any): void;
        handleDel(): void;
        handleDelConfirm(flag: any): void;
        doStorage(business: any, postOperate: any, noStore: any): void;
        handleSelectChange(): void;
        doCheck({ storageType }: {
            storageType: any;
        }): boolean;
        setUserKey(): void;
        setSelected(): void;
        fixStatus(): void;
        enableAll(): void;
    };
};
export default _default;
