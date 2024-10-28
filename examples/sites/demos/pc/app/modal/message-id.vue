<template>
  <div>
    <div class="content">
      <tiny-button @click="btnClick" :reset-time="0">重复点击不出现多个</tiny-button>
    </div>
  </div>
</template>

<script>
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.message({
        status: 'info',
        message: '自定义消息具有唯一 id，所以不会重复出现',
        id: 'unique'
      })
    }
  }
}
</script>

<style scoped>
.content {
  margin: 8px;
}
</style>
