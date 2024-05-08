<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 宽度拖拽 </tiny-button>
    <tiny-drawer title="标题" dragable :visible="visible" @update:visible="visible = $event">
      <div style="padding: 32px">横向拖拽左边框可改变抽屉主体宽度</div>
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
    }
  }
}
</script>
