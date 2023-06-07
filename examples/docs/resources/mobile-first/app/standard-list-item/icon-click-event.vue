<template>
  <div class="h-64 w-full p-5 bg-color-bg-5">
    <tiny-standard-list-item :show-image="true" :options="iconOptions" :data="data" @icon-click="iconClick" class="bg-color-bg-1">
    </tiny-standard-list-item>
  </div>
</template>

<script>
import { StandardListItem, Modal } from '@opentiny/vue'
import { IconDel, IconWriting, IconAscending, IconShare } from '@opentiny/vue-icon'

export default {
  components: {
    TinyStandardListItem: StandardListItem
  },
  data() {
    return {
      data: {
        title: '关晓雨',
        subTitle: '080907086',
        desc: '这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本'
      },
      iconOptions: [
        {
          text: '删除列表',
          icon: IconDel()
        },
        {
          text: '编辑',
          icon: IconWriting()
        },
        {
          text: '排序',
          icon: IconAscending()
        },
        {
          text: '分享',
          icon: IconShare()
        }
      ]
    }
  },
  methods: {
    iconClick(item, index) {
      Modal.message({
        message: `当前点击的是第${index + 1}个图标`,
        status: 'info'
      })
    }
  }
}
</script>
