/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
export declare function handleGlobalMousedownOnFilterWrapper({ $el, _vm, event, filterStore, filterWrapper }: {
    $el: any;
    _vm: any;
    event: any;
    filterStore: any;
    filterWrapper: any;
}): void;
export declare function handleGlobalMousedownOnCtxMenu({ _vm, ctxMenuStore, event }: {
    _vm: any;
    ctxMenuStore: any;
    event: any;
}): void;
export declare function handleGlobalBlurOutside({ _vm, actived, event }: {
    _vm: any;
    actived: any;
    event: any;
}): boolean;
export declare function handleGlobalIsClear({ $el, _vm, actived, editConfig, event, isClear, isReadonlyCol }: {
    $el: any;
    _vm: any;
    actived: any;
    editConfig: any;
    event: any;
    isClear: any;
    isReadonlyCol: any;
}): any;
export declare function handleGlobalClearActived({ $el, _vm, event, isClear }: {
    $el: any;
    _vm: any;
    event: any;
    isClear: any;
}): void;
