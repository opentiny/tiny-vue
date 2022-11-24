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
import * as vue2 from '@opentiny/vue-common/adapter/vue2'
import * as vue3 from '@opentiny/vue-common/adapter/vue3'

const vue = Object.keys(all).length > 1 ? vue3 : vue2

export default vue.default

export const {
  defineAsyncComponent,
  markRaw,
  renderComponent,
  rootConfig,
  appContext,
  appProperties,
  tools,
  directive,
  h,
  createComponent,
  parseVnode,
  bindFilter,
  useRouter,
  emitter
} = vue
