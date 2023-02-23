declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            DIALOG_SLIDER_RIGHT: string;
            DIALOG_FADE: string;
            SELECT_DROPDOWN: string;
            DROPDOWN_MENU: string;
            DIALOG_BOX_CLASS: string;
            PC_SCROLL_LOCK_CLASS: string;
            MOBILE_SCROLL_LOCK_CLASS: string;
            Mode: string;
            scrollLockClass(mode: any): string;
        };
    };
    appendToBody: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    beforeClose: FunctionConstructor;
    center: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    closeOnClickModal: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    closeOnPressEscape: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    destroyOnClose: BooleanConstructor;
    dialogClass: {
        type: StringConstructor;
        default: () => string;
    };
    draggable: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    fullscreen: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    isFormReset: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    modal: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    modalAppendToBody: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    resize: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    rightSlide: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    showHeader: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    title: {
        type: StringConstructor;
        default: () => string;
    };
    top: StringConstructor;
    visible: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    width: {
        type: StringConstructor;
        default: () => string;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "open" | "opened" | "closed" | "drag-start" | "drag-move" | "drag-end")[], "close" | "open" | "opened" | "closed" | "drag-start" | "drag-move" | "drag-end", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            DIALOG_SLIDER_RIGHT: string;
            DIALOG_FADE: string;
            SELECT_DROPDOWN: string;
            DROPDOWN_MENU: string;
            DIALOG_BOX_CLASS: string;
            PC_SCROLL_LOCK_CLASS: string;
            MOBILE_SCROLL_LOCK_CLASS: string;
            Mode: string;
            scrollLockClass(mode: any): string;
        };
    };
    appendToBody: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    beforeClose: FunctionConstructor;
    center: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    closeOnClickModal: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    closeOnPressEscape: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    destroyOnClose: BooleanConstructor;
    dialogClass: {
        type: StringConstructor;
        default: () => string;
    };
    draggable: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    fullscreen: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    isFormReset: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    modal: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    modalAppendToBody: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    resize: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    rightSlide: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    showHeader: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    title: {
        type: StringConstructor;
        default: () => string;
    };
    top: StringConstructor;
    visible: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    width: {
        type: StringConstructor;
        default: () => string;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onOpened?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    "onDrag-start"?: ((...args: any[]) => any) | undefined;
    "onDrag-move"?: ((...args: any[]) => any) | undefined;
    "onDrag-end"?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    title: string;
    center: boolean;
    width: string;
    visible: boolean;
    modal: boolean;
    closeOnClickModal: boolean;
    modalAppendToBody: boolean;
    appendToBody: boolean;
    showHeader: boolean;
    destroyOnClose: boolean;
    resize: boolean;
    isFormReset: boolean;
    lockScroll: boolean;
    closeOnPressEscape: boolean;
    showClose: boolean;
    fullscreen: boolean;
    draggable: boolean;
    rightSlide: boolean;
    dialogClass: string;
}>;
export default _default;
