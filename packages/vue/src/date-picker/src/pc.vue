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
<script lang="ts">
// 区别aui，date-picker里面一层的元素应该为picker的pc.vue，避免setParentAttribute方法无法将renderless层的属性api挂载到date-picker元素
import { PickerPc } from '@opentiny/vue-picker'
import { $props } from '@opentiny/vue-common'
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
  PickerPc
)

export default DatePicker
</script>
