<template>
  <div class="mobile-list-demo">
    <div class="demo-title">
      <h2>List</h2>
      <span>列表</span>
    </div>
    <div class="demo-item">
      <tiny-list v-for="item of dataList" :key="item.id" :content="item.content" :content-des="item.des">
        <template #suffix>
          <icon-chevron-right />
        </template>
      </tiny-list>
    </div>
  </div>
</template>

<script>
import { List } from '@opentiny/vue'
import { iconChevronRight } from '@opentiny/vue-icon'

export default {
  components: {
    TinyList: List,
    IconChevronRight: iconChevronRight()
  },
  data() {
    return {
      dataList: [
        {
          id: 1,
          content: '主文本，文本较多换行时，列表高度相应增高，文本与列表上下间距不变',
          des: '此处是辅助说明文体，说明文本'
        },
        {
          id: 2,
          content: '主文本',
          des: '此处是辅助说明文体，说明文本，文本较多换行时，列表高度相应增高，文本与列表上下间距不变'
        }
      ]
    }
  }
}
</script>

<style scoped>
.mobile-list-demo {
  height: 100%;
  background: #f4f4f4;
  overflow-y: auto;
}
.demo-title {
  padding: 40px;
}
.demo-title h2 {
  display: block;
}
</style>
