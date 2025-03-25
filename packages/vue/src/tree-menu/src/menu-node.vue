<!-- eslint-disable vue/no-mutating-props -->
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
  <div class="tree-node">
    <div class="tree-menus-link tiny-tree-node__label">
      <a class="tree-node-body" :title="getTitle(data.label)" :href="data.url || void 0">
        <span class="tree-node-name">
          <component v-if="!data.customIcon && suffixIcon" :is="suffixIcon"></component>
          <component v-if="data.customIcon" :is="data.customIcon"></component>
          <slot :node="node" :data="data" :label="data.label">{{ data.label || node.label }} </slot>
        </span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import Popover from '@opentiny/vue-popover'

export default defineComponent({
  name: 'TreeMenuNode',
  componentName: 'TreeMenuNode',
  components: {
    TinyPopover: Popover
  },

  props: {
    node: {},
    data: {},
    suffixIcon: {},
    getTitle: {}
  },

  setup() {
    return {}
  }
})
</script>
