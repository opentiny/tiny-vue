<template>
  <div>
    <tiny-button @click="boxVisibility = true" title="弹出与关闭事件">弹出与关闭事件</tiny-button>
    <tiny-dialog-box v-model:visible="boxVisibility" title="消息" width="30%" @open="open" @close="close" @opened="opened" @closed="closed">
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { Button, DialogBox } from '@opentiny/vue'
import Notify from '@opentiny/vue-notify'

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox
  },
  data() {
    return {
      boxVisibility: false
    }
  },
  methods: {
    open() {
      Notify({
        title: '窗口弹出',
        message: this.getTime(new Date()),
        offset: 0
      })
    },
    opened() {
      Notify({
        title: '窗口弹出动画完成',
        message: this.getTime(new Date()),
        offset: 0
      })
    },
    close() {
      Notify({
        title: '窗口关闭',
        message: this.getTime(new Date()),
        offset: 0
      })
    },
    closed() {
      Notify({
        title: '窗口关闭动画完成',
        message: this.getTime(new Date()),
        offset: 0
      })
    },
    getTime(now) {
      return [now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()].join(':')
    }
  }
}
</script>
