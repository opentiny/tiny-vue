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
import * as all from 'vue'
import * as vue2 from '@opentiny/vue-locale/vue2'
import * as vue3 from '@opentiny/vue-locale/vue3'
import glob from './glob'

const vue = Object.keys(all).length > 1 ? vue3 : vue2

export const { use, t, i18n, initI18n, extend, zhCN, enUS, language } = vue

export const globalization = glob(t)

export const version = process.env.COMPONENT_VERSION

export default {
  use,
  t,
  i18n,
  initI18n,
  extend,
  zhCN,
  enUS,
  language,
  ...vue.default,
  globalization
}
