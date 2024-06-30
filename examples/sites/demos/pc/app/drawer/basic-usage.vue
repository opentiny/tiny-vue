<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 抽屉组件 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event" @confirm="confirm">
      <div style="padding: 32px">内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script>
import { Drawer, Button } from '@opentiny/vue'

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
    openDrawer() {
      this.visible = true
    },
    confirm() {
      this.visible = false
    }
  }
}
</script>
