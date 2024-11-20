<template>
  <div>
    <h2>需要为body添加滚动条之后，再验证锁定功能</h2>
    <div class="content">
      <tiny-button @click="addBodyScroll">添加滚动条</tiny-button>
      <tiny-button @click="removeBodyScroll">还原滚动条</tiny-button>
    </div>
    <h2>函数式调用</h2>
    <div class="content">
      <tiny-button @click="btnClick('scroll')">仅锁定滚动条</tiny-button>
      <tiny-button @click="btnClick('view')">仅锁定住页面</tiny-button>
    </div>
    <h2>标签式调用</h2>
    <div class="content">
      <tiny-button @click="openModal('scroll')">仅锁定滚动条</tiny-button>
      <tiny-button @click="openModal('view')">仅锁定住页面</tiny-button>
      <tiny-modal
        v-model="show"
        type="confirm"
        title="自定义弹窗标题"
        message="窗口内容"
        show-header
        show-footer
        v-bind="options"
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
      options: {
        lockScroll: false,
        lockView: false
      }
    }
  },
  methods: {
    addBodyScroll() {
      document.body.style.height = '200vh'
      document.body.classList.remove('of-hidden')
    },
    removeBodyScroll() {
      document.body.style.height = '100vh'
      document.body.classList.add('of-hidden')
    },
    btnClick(lockType) {
      this.options.lockScroll = lockType === 'scroll'
      this.options.lockView = lockType === 'view'

      Modal.confirm({
        message: '窗口内容',
        title: '自定义弹窗标题',
        showHeader: true,
        showFooter: true,
        ...this.options
      })
    },
    openModal(lockType) {
      this.options.lockScroll = lockType === 'scroll'
      this.options.lockView = lockType === 'view'
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
