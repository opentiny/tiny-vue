<template>
  <div class="card-wrap">
    <tiny-card
      title="这是卡片标题"
      v-model="value"
      check-type="checkbox"
      label="1"
      :options="options"
      @change="change"
      @icon-click="iconClick"
    >
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
  </div>
</template>

<script setup>
import { Card as TinyCard, Modal } from '@opentiny/vue'
import { IconDel, IconWriting, IconAscending, IconShare } from '@opentiny/vue-icon'

import { ref } from 'vue'

const value = ref(false)
const options = ref([
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
])
function change(val) {
  Modal.message({
    message: val.toString(),
    status: 'info'
  })
}
function iconClick(item, index) {
  Modal.message({
    message: `当前点击的是第${index + 1}个图标`,
    status: 'info'
  })
}
</script>

<style scoped>
.card-wrap {
  background: #f5f5f5;
  padding: 16px;
}
</style>
