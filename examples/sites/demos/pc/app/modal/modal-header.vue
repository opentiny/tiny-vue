<template>
  <div>
    <h2>函数式调用</h2>
    <div class="content">
      <tiny-button @click="btnClick">自定义弹窗标题</tiny-button>
    </div>
    <h2>标签式调用</h2>
    <div class="content">
      <tiny-button @click="openModal">自定义弹窗标题</tiny-button>
      <tiny-modal v-model="show" title="自定义弹窗标题" message="窗口内容" show-header show-footer> </tiny-modal>
    </div>
  </div>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyModal: Modal
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    btnClick() {
      Modal.alert({ message: '窗口内容', title: '自定义弹窗标题', showHeader: true, showFooter: true })
    },
    openModal() {
      this.show = true
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 12px;
}
.content {
  margin: 8px;
}
</style>
