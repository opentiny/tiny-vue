declare const _default: {
    moveTabSelected(args: any, isLeft: any, event: any, edit: any): void;
    moveCurrentRow(isUpArrow: any, isDwArrow: any, event: any): void;
    moveSelected({ args, isLeftArrow, isUpArrow, isRightArrow, isDwArrow, event }: {
        args: any;
        isLeftArrow: any;
        isUpArrow: any;
        isRightArrow: any;
        isDwArrow: any;
        event: any;
    }): void;
    triggerHeaderCellMousedownEvent(event: any, params: any): void;
    triggerCellMousedownEvent(event: any, params: any): void;
    _clearSelected(keep: any): any;
    _clearChecked(): any;
    _getMouseCheckeds(): {
        rows: never[];
        columns: never[];
        rowNodes: any;
    };
    _getMouseSelecteds(): any;
    handleChecked(rowNodes: any): void;
    handleAllChecked(event: any): void;
    handleIndexChecked(rowNodes: any): void;
    _clearIndexChecked(): any;
    handleHeaderChecked(rowNodes: any): void;
    _clearHeaderChecked(): any;
    _clearCopyed(): any;
    handleCopyed(cut: any): void;
    handlePaste(): void;
};
export default _default;
