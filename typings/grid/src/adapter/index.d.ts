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
import { Interceptor } from '@opentiny/vue-renderless/grid/core';
import Renderer from './src/renderer';
declare const Buttons: any;
declare const Menus: any;
export declare const Grid: {
    use(Plugin: any, options: any): any;
    setup: (options?: {}) => void;
    interceptor: any;
    renderer: {};
    buttons: any;
    menus: any;
    _tooltip: boolean;
};
export { Menus, Buttons, Interceptor, Renderer };
export default Grid;
