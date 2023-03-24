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

import { on, off } from '@opentiny/vue-renderless/common/deps/dom'

/**
 * v-number-only
 * @desc 只接受输入数字
 * @example
 * ```vue
 * <input v-number-only>
 * ```
 */
const checkValue = (event) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '')

  if (event.charCode >= 48 && event.charCode <= 57) {
    return true
  }

  event.preventDefault()
}

export default {
  bind(element) {
    on(element, 'keypress', checkValue)
  },
  unbind(element) {
    off(element, 'keypress', checkValue)
  }
}
