<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 确认事件示例 </tiny-button>
    <tiny-drawer
      title="标题"
      :show-footer="true"
      :visible="visible"
      @update:visible="visible = $event"
      @confirm="confirm"
    >
      <div>内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script>
import { TinyDrawer, TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyDrawer,
    TinyButton
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    openDrawer() {
      this.visible = true
    },
    confirm() {
      TinyModal.message({ message: '确认事件', status: 'success' })
      this.visible = false
    }
  }
}
</script>
