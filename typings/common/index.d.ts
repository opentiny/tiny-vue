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
import hooks from '@opentiny/vue-common/adapter';
import { createComponent } from '@opentiny/vue-common/adapter';
import { defineAsyncComponent, directive, emitter, h } from '@opentiny/vue-common/adapter';
import { parseVnode, useRouter } from '@opentiny/vue-common/adapter';
import '@opentiny/vue-theme/base/index.css';
export declare const $prefix = "Tiny";
export declare const $props: {
    [x: string]: StringConstructor | BooleanConstructor | FunctionConstructor | (FunctionConstructor | ObjectConstructor)[];
};
export declare const props: string[];
export declare let setupComponent: {};
export declare const initComponent: () => void;
export declare const $setup: ({ props, context, template }: {
    props: any;
    context: any;
    template: any;
}) => any;
export declare const filterAttrs: (attrs: any, filters: any, include: any) => {};
export declare const setup: ({ props, context, renderless, api, extendOptions, mono }: {
    props: any;
    context: any;
    renderless: any;
    api: any;
    extendOptions?: {} | undefined;
    mono?: boolean | undefined;
}) => {
    t: any;
    vm: any;
    f: any;
    a: (attrs: any, filters: any, include: any) => {};
    d: any;
    dp: any;
};
export declare const svg: ({ name, component }: {
    name?: string | undefined;
    component: any;
}) => () => any;
export declare const $install: (component: any) => void;
export declare const version: string | undefined;
export { h, hooks, directive, parseVnode, useRouter, emitter, createComponent, defineAsyncComponent };
declare const _default: {
    h: any;
    directive: any;
    parseVnode: any;
    useRouter: any;
    emitter: any;
    createComponent: any;
    defineAsyncComponent: any;
    filterAttrs: (attrs: any, filters: any, include: any) => {};
    initComponent: () => void;
    setupComponent: {};
    svg: ({ name, component }: {
        name?: string | undefined;
        component: any;
    }) => () => any;
    $prefix: string;
    $props: {
        [x: string]: StringConstructor | BooleanConstructor | FunctionConstructor | (FunctionConstructor | ObjectConstructor)[];
    };
    props: string[];
    $setup: ({ props, context, template }: {
        props: any;
        context: any;
        template: any;
    }) => any;
    setup: ({ props, context, renderless, api, extendOptions, mono }: {
        props: any;
        context: any;
        renderless: any;
        api: any;
        extendOptions?: {} | undefined;
        mono?: boolean | undefined;
    }) => {
        t: any;
        vm: any;
        f: any;
        a: (attrs: any, filters: any, include: any) => {};
        d: any;
        dp: any;
    };
    hooks: any;
};
export default _default;
