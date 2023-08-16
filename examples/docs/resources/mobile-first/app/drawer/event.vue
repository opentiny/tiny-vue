<template>
  <div>
    <tiny-button @click="fn" type="primary"> 抽屉组件 </tiny-button>
    <tiny-drawer
      title="标题"
      :show-footer="true"
      :visible="visible"
      @update:visible="visible = $event"
      @close="close"
      @confirm="confirm"
    >
      <div style="height: 200px; text-align: center">内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script>
import { Drawer, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyDrawer: Drawer,
    TinyButton: Button
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    fn() {
      this.visible = true
    },
    close() {
      Modal.message('关闭事件')
    },
    confirm() {
      Modal.message('确认事件')
    }
  }
}
</script>
