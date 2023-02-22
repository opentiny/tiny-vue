declare const _default: {
    filter(field: any, callback: any): any;
    getOptions({ property, filter }: {
        property: any;
        filter: any;
    }): any;
    /**
     * 点击筛选事件
     */
    triggerFilterEvent(event: any, column: any, params: any): void;
    confirmFilterEvent(): void;
    clearFilter(field: any): any;
};
export default _default;
