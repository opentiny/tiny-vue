<template>
  <tiny-tag-group :data="data" @item-click="itemClick"></tiny-tag-group>
</template>

<script>
import { TinyTagGroup, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyTagGroup
  },
  data() {
    return {
      data: [
        {
          name: '标签一'
        },
        {
          name: '标签二'
        }
      ]
    }
  },
  methods: {
    itemClick(item, i, e) {
      TinyModal.message(`当前点击的是第 ${i + 1} 个标签`)
    }
  }
}
</script>
