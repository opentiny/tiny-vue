<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<script lang="tsx">
import Picker from '@opentiny/vue-picker'
import { $props, defineComponent } from '@opentiny/vue-common'
import { extend } from '@opentiny/vue-renderless/common/object'

const DatePicker = extend(
  true,
  {
    props: {
      ...$props,
      _constants: {
        type: Object,
        default: () => ({})
      },
      componentName: { type: String, default: 'DatePicker' }
    }
  },
  Picker
)

export default DatePicker
</script>
