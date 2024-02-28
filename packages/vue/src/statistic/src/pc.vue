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
  <div class="">
    <div v-if="$slots.title || title" class="">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="">
      <div v-if="$slots.prefix || prefix" class="">
        <slot name="prefix">
          <span>{{ prefix }}</span>
        </slot>
      </div>
      <span class="" :style="valueStyle">
        {{ value }}
      </span>
      <div v-if="$slots.suffix || suffix" class="">
        <slot name="suffix">
          <span>{{ suffix }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/statistic/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  components: {},
  emits: [],
  props: [...props, 'formatter', 'precision', 'prefix', 'suffix', 'title', 'value', 'valueStyle'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
