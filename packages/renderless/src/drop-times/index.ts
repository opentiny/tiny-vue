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

import { format } from '../common/date'

export const init =
  ({ state, props }) =>
  () => {
    let list = []
    let value

    for (let minutes = props.start; minutes <= props.end; minutes += props.step) {
      value = format(new Date(0, 0, 0, 0, minutes, 0), 'hh:mm')

      list.push({
        label: value,
        value
      })
    }

    state.options = list
  }

export const change = (emit) => (value) => {
  emit('update:modelValue', value)
  emit('change', value)
}
