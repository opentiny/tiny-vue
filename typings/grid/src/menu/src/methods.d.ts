declare const _default: {
    _closeMenu(): any;
    moveCtxMenu({ event, keyCode, ctxMenuStore, property, operKey, operRest, menuList }: {
        event: any;
        keyCode: any;
        ctxMenuStore: any;
        property: any;
        operKey: any;
        operRest: any;
        menuList: any;
    }): void;
    handleGlobalContextmenuEvent(event: any): void;
    openContextMenu(event: any, type: any, params: any): void;
    ctxMenuMouseoverEvent(event: any, item: any, child: any): void;
    ctxMenuMouseoutEvent(event: any, item: any): void;
    ctxMenuLinkEvent(event: any, menu: any): void;
    toKebab(code: any): string;
};
export default _default;
