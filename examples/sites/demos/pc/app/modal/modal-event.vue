<template>
  <div>
    <h2>函数式调用</h2>
    <div class="content">
      <tiny-button @click="btnClick">打开带事件弹窗</tiny-button>
    </div>
    <h2>标签式调用</h2>
    <div class="content">
      <tiny-button @click="openModal">打开带事件弹窗</tiny-button>
      <tiny-modal
        v-model="show"
        type="confirm"
        title="自定义弹窗标题"
        message="窗口内容"
        show-header
        show-footer
        resize
        @show="handleEvent('show', $event)"
        @hide="handleEvent('hide', $event)"
        @confirm="handleEvent('confirm', $event)"
        @cancel="handleEvent('cancel', $event)"
        @close="handleEvent('close', $event)"
        @zoom="handleEvent('zoom', $event)"
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
      show: false
    }
  },
  methods: {
    btnClick() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const $this = this

      Modal.confirm({
        message: '窗口内容',
        title: '自定义弹窗标题',
        showHeader: true,
        showFooter: true,
        resize: true,
        events: {
          show(ev) {
            $this.handleEvent('show', ev)
          },
          hide(ev) {
            $this.handleEvent('hide', ev)
          },
          confirm(ev) {
            $this.handleEvent('confirm', ev)
          },
          cancel(ev) {
            $this.handleEvent('cancel', ev)
          },
          close(ev) {
            $this.handleEvent('close', ev)
          },
          zoom(ev) {
            $this.handleEvent('zoom', ev)
          }
        }
      })
    },
    openModal() {
      this.show = true
    },
    handleEvent(eventName, eventArgs) {
      Modal.message({ status: 'info', message: `${eventName} 事件触发了` })
      console.log({ eventName, eventArgs })
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
