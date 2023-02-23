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
import zhCN from '@opentiny/vue-locale/lang/zh-CN';
import enUS from '@opentiny/vue-locale/lang/en';
export declare function t(path: any, options: any): any;
export declare const use: (l: any) => any;
export declare const language: () => any;
export declare const i18n: (fn: any) => any;
export declare const initI18n: ({ app, createI18n, messages, i18n, merge }: {
    app: any;
    createI18n: any;
    messages?: {} | undefined;
    i18n?: {} | undefined;
    merge: any;
}) => any;
export { zhCN, enUS };
declare const _default: {
    use: (l: any) => any;
    t: typeof t;
    i18n: (fn: any) => any;
    initI18n: ({ app, createI18n, messages, i18n, merge }: {
        app: any;
        createI18n: any;
        messages?: {} | undefined;
        i18n?: {} | undefined;
        merge: any;
    }) => any;
    extend: any;
    zhCN: any;
    enUS: any;
};
export default _default;
