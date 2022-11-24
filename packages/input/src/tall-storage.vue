<template>
  <div class="tiny-tall-storage" @mousedown="mousedown">
    <div class="tiny-storage-list-style">
      <ul @keydown.enter="keydownEvent" class="tiny-storage-list">
        <li
          v-for="item in localstorageData"
          v-bind:key="item"
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

<script>
import { $prefix, setup } from '@opentiny/vue-common'
import {
  renderless,
  api
} from '@opentiny/vue-renderless/tall-storage/vue'
import '@opentiny/vue-theme/tall-storage/index.css'

export default {
  name: $prefix + 'TallStorage',
  inheritAttrs: false,
  props: {
    isMemoryStorage: Boolean,
    localstorageData: Array
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
