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
  <div class="tiny-tall-storage" @mousedown="mousedown">
    <div class="tiny-storage-list-style">
      <ul @keydown.enter="keydownEvent" class="tiny-storage-list">
        <li
          v-for="item in localstorageData"
          :key="item"
          class="tiny-storage-item"
          :class="[state.hoverValue === item ? 'item-hover' : '']"
          @click="selectItem(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { $prefix, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tall-storage/vue'
import '@opentiny/vue-theme/tall-storage/index.less'

export default {
  name: $prefix + 'TallStorage',
  inheritAttrs: false,
  props: {
    isMemoryStorage: Boolean,
    localstorageData: Array
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
