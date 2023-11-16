<template>
  <div class="h-64 w-full p-5 bg-color-bg-5">
    <tiny-standard-list-item
      :show-image="true"
      :user-head="userHeadOption"
      :options="iconOptions"
      class="bg-color-bg-1"
    >
      <div>内容区域插槽，可以自定义想展示的内容</div>
    </tiny-standard-list-item>
  </div>
</template>

<script>
import { StandardListItem } from '@opentiny/vue'
import { IconDel, IconWriting, IconAscending, IconShare } from '@opentiny/vue-icon'

export default {
  components: {
    TinyStandardListItem: StandardListItem
  },
  data() {
    return {
      userHeadOption: {
        type: 'image',
        size: 40,
        value: '/static/images/1.jpg',
        round: true
      },
      iconOptions: [
        {
          text: '删除列表',
          icon: IconDel()
        },
        {
          text: '编辑',
          icon: IconWriting(),
          disabled: true
        },
        {
          text: '排序',
          icon: IconAscending()
        },
        {
          text: '分享',
          icon: IconShare(),
          disabled: true
        }
      ]
    }
  }
}
</script>
