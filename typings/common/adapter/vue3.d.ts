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
import * as hooks from 'vue';
import { emitter, bindFilter } from './utils';
export { emitter, bindFilter };
export declare const defineAsyncComponent: typeof hooks.defineAsyncComponent;
export declare const markRaw: typeof hooks.markRaw;
export declare const renderComponent: ({ view, component, props, context: { attrs, slots }, extend }: {
    view: any;
    component: any;
    props: any;
    context: {
        attrs: any;
        slots: any;
    };
    extend?: {} | undefined;
}) => () => hooks.VNode<hooks.RendererNode, hooks.RendererElement, {
    [key: string]: any;
}>;
export declare const rootConfig: (context: any) => Record<string, any>;
export declare const appContext: () => hooks.App<any>;
export declare const appProperties: () => Record<string, any>;
export declare const useRouter: (instance?: hooks.ComponentInternalInstance | null) => {
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
    refs: {};
    i18n: any;
    slots: {
        [name: string]: hooks.Slot | undefined;
    };
    scopedSlots: {
        [name: string]: hooks.Slot | undefined;
    };
    attrs: any;
    parent: any;
    nextTick: typeof hooks.nextTick;
    constants: unknown;
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
export declare const h: (component: any, propsData: any, childData: any) => hooks.VNode<hooks.RendererNode, hooks.RendererElement, {
    [key: string]: any;
}>;
export declare const createComponent: ({ component, propsData, el }: {
    component: any;
    propsData: any;
    el: any;
}) => any;
export default hooks;
