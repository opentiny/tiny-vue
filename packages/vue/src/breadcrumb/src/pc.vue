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
  <div class="tiny-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot>
      <tiny-breadcrumb-item v-for="(item, index) in options" :option="item" :label="item[textField]" :key="index" :to="item.to" :replace="item.replace">
      </tiny-breadcrumb-item>
    </slot>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/breadcrumb/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import BreadcrumbItem from '@opentiny/vue-breadcrumb-item'

export default defineComponent({
  components: {
    TinyBreadcrumbItem: BreadcrumbItem
  },
  props: [...props, 'separator', 'separatorIcon', 'textField', 'options'],
  provide() {
    return {
      breadcrumb: this
    }
  },
  emits: ['select'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
