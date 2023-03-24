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
  <span class="tiny-breadcrumb__item">
    <span :class="['tiny-breadcrumb__inner', to ? 'is-link' : '']" ref="link" role="link">
      <slot>
        <span>{{ label }}</span>
      </slot>
    </span>
    <component v-if="breadcrumb.separatorIcon" :is="breadcrumb.separatorIcon" class="tiny-svg-size tiny-breadcrumb__separator-cls" />
    <span v-else class="tiny-breadcrumb__separator">{{ breadcrumb.separator }}</span>
  </span>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/breadcrumb-item/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [...props, 'to', 'replace', 'label', 'option'],
  inject: ['breadcrumb'],
  emits: ['select'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
