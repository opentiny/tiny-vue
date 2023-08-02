<template>
  <div class="h-64 w-full p-5 bg-color-bg-5">
    <tiny-standard-list-item :data="data" class="bg-color-bg-1">
      <template #image>
        <div>图片插槽</div>
      </template>
      <template #operate>
        <div>操作栏插槽</div>
      </template>
    </tiny-standard-list-item>
  </div>
</template>

<script>
import { StandardListItem } from '@opentiny/vue'

export default {
  components: {
    TinyStandardListItem: StandardListItem
  },
  data() {
    return {
      data: {
        title: '关晓雨',
        subTitle: '080907086',
        desc: '这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本'
      }
    }
  }
}
</script>
