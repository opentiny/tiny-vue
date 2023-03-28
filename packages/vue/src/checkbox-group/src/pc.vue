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
<template>
  <div class="tiny-checkbox-group" :class="vertical ? 'is-vertical' : ''" role="group" aria-label="checkbox-group">
    <slot>
      <template v-if="type === 'checkbox'">
        <checkbox v-for="(item, index) in options" :key="index" v-bind="item"></checkbox>
      </template>
      <template v-if="type === 'button'">
        <checkbox-button v-for="(item, index) in options" :key="index" v-bind="item"></checkbox-button>
      </template>
    </slot>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/checkbox-group/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Checkbox from '@opentiny/vue-checkbox'
import CheckboxButton from '@opentiny/vue-checkbox-button'
import '@opentiny/vue-theme/checkbox-group/index.less'

export default defineComponent({
  components: {
    Checkbox,
    CheckboxButton
  },
  props: [...props, 'modelValue', 'type', 'options', 'disabled', 'min', 'max', 'size', 'fill', 'textColor', 'vertical'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
