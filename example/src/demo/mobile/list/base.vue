<template>
  <div>
    <tiny-list
      v-for="item of dataList"
      :key="item.id"
      :content="item.content"
      :sub-text="item.subtext"
      :content-des="item.contentdes"
    ></tiny-list>
  </div>
</template>

<script>
import { List } from '@opentiny/vue'

export default {
  components: {
    TinyList: List
  },
  data() {
    return {
      dataList: [
        {
          id: 1,
          content: '主文本1',
          subtext: '次文本1',
          contentdes: '这是描述文本1'
        },
        {
          id: 2,
          content: '主文本2',
          subtext: '次文本2',
          contentdes: '这是描述文本2'
        },
        {
          id: 3,
          content: '主文本3',
          subtext: '次文本3',
          contentdes: '这是描述文本3'
        }
      ]
    }
  }
}
</script>
