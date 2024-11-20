<template>
  <div>
    <h2>函数式调用</h2>
    <div class="content">
      <tiny-button @click="btnClick(false)">自定义弹窗大小</tiny-button>
      <tiny-button @click="btnClick(true)">弹窗全屏</tiny-button>
    </div>
    <h2>标签式调用</h2>
    <div class="content">
      <tiny-button @click="openModal(false)">自定义弹窗大小</tiny-button>
      <tiny-button @click="openModal(true)">弹窗全屏</tiny-button>
      <tiny-modal
        v-model="show"
        type="confirm"
        title="自定义弹窗标题"
        message="窗口内容"
        show-header
        show-footer
        v-bind="options"
        :fullscreen="fullscreen"
      >
      </tiny-modal>
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
      show: false,
      fullscreen: false,
      options: {
        resize: true,
        width: 800,
        height: 400,
        minWidth: 700,
        minHeight: 300
      }
    }
  },
  methods: {
    btnClick(isFull) {
      Modal.confirm({
        message: '窗口内容',
        title: '自定义弹窗标题',
        showHeader: true,
        showFooter: true,
        ...this.options,
        fullscreen: isFull
      })
    },
    openModal(isFull) {
      this.fullscreen = isFull
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
