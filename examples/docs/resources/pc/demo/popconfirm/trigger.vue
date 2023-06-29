<template>
  <div>
    <tiny-popconfirm :title="title" type="info" trigger="hover">
      <template #reference>
        <tiny-button>鼠标悬停显示</tiny-button>
      </template>
    </tiny-popconfirm>
    <tiny-popconfirm :title="title" type="info" trigger="click">
      <template #reference>
        <tiny-button>点击显示</tiny-button>
      </template>
    </tiny-popconfirm>
  </div>
</template>

<script>
import { Popconfirm, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopconfirm: Popconfirm,
    TinyButton: Button,
  },
  data() {
    return {
      title: '确定要删除该安全组规则吗?'
    }
  }
}
</script>

<style scoped>
.tiny-popconfirm + .tiny-popconfirm {
  margin-left: 8px;
}
</style>
