<template>
  <tiny-tag-group :data="data" @item-click="itemClick"></tiny-tag-group>
</template>

<script>
import { TagGroup, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTagGroup: TagGroup
  },
  data() {
    return {
      data: [
        {
          name: '标签一'
        },
        {
          name: '标签二'
        },
        {
          name: '标签三'
        },
        {
          name: '标签四'
        },
        {
          name: '标签五'
        },
        {
          name: '标签六'
        },
        {
          name: '标签七'
        },
        {
          name: '标签八'
        },
        {
          name: '标签九'
        },
        {
          name: '标签十'
        },
        {
          name: '标签十一'
        },
        {
          name: '标签十二'
        },
        {
          name: '标签十三'
        },
        {
          name: '标签十四'
        },
        {
          name: '标签十五'
        },
        {
          name: '标签十六'
        },
        {
          name: '标签十七'
        },
        {
          name: '标签十八'
        },
        {
          name: '标签十九'
        },
        {
          name: '标签二十'
        },
        {
          name: '标签二十一'
        },
        {
          name: '标签二十二'
        }
      ]
    }
  },
  methods: {
    itemClick(item, i, e) {
      Modal.message(`当前点击的是第${i + 1}个标签`)
    }
  }
}
</script>
