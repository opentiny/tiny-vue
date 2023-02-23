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
import Vue from 'vue';
import * as hooks from '@vue/composition-api';
import { emitter, bindFilter } from './utils';
export { emitter, bindFilter };
export declare const defineAsyncComponent: (promise: any) => any;
export declare const markRaw: (ref: any) => any;
export declare const renderComponent: ({ view, component, props, context: { attrs, listeners, slots }, extend }: {
    view: any;
    component: any;
    props: any;
    context: {
        attrs: any;
        listeners: any;
        slots: any;
    };
    extend?: {} | undefined;
}) => () => any;
export declare const rootConfig: () => any;
export declare const appContext: () => typeof Vue;
export declare const appProperties: () => any;
export declare const useRouter: (instance?: any) => {
    route: any;
    router: any;
};
export declare const tools: (context: any) => {
    vm: any;
    emit: any;
    emitter: () => {
        emit(eventName: any): void;
        on: (event: any, callback: any, once: any) => void;
        once(event: any, callback: any): void;
        off(event: any, callback: any): void;
    };
    route: any;
    router: any;
    dispatch: (componentName: any, eventName: any, params: any) => void;
    broadcast: (componentName: any, eventName: any, params: any) => void;
    parentHandler: (handler: any) => {} | undefined;
    childrenHandler: (handler: any) => any[] | undefined;
    refs: any;
    i18n: any;
    slots: any;
    scopedSlots: any;
    attrs: any;
    parent: any;
    nextTick: Vue__default;
    constants: any;
    mode: any;
    service: any;
    getService: () => any;
    setParentAttribute: ({ name, value }: {
        name: any;
        value: any;
    }) => void;
    defineInstanceProperties: (props: any) => void;
    defineParentInstanceProperties: (props: any) => void;
};
export declare const directive: (directives: any) => any;
export declare const parseVnode: (vnode: any) => any;
export declare const h: Vue$1.CreateElement;
export declare const createComponent: ({ component, propsData, el }: {
    component: any;
    propsData: any;
    el: any;
}) => any;
export default hooks;
