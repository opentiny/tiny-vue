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

import TinySearchBox from "./src/index.ts";
import { t, setGlobalApp } from './src/utils/i18n'
import  zhCN  from './src/utils/zh_CN'
import  enUS  from './src/utils/en_US'
import TinySearchBoxFirstLevelPanel from './src/components/first-level-panel.vue'
import TinySearchBoxSecondLevelPanel from './src/components/second-level-panel.vue'
import { version } from "./package.json";
// model 配置已在组件内部定义，无需重复设置

/* istanbul ignore next */
TinySearchBox.install = function (Vue) {
  Vue.component(TinySearchBox.name, TinySearchBox);
};

TinySearchBox.version = version;

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== "undefined" && window.Vue) {
    TinySearchBox.install(window.Vue);
  }
}

// 导出
export * from './src/index.type.ts'
export { zhCN, enUS , t, setGlobalApp, TinySearchBoxFirstLevelPanel, TinySearchBoxSecondLevelPanel }

export default TinySearchBox;
