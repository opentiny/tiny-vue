<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 自定义 z-index </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event" :z-index="zIndex">
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
      visible: false,
      zIndex: 3000
    }
  },
  methods: {
    openDrawer() {
      this.visible = true
    }
  }
}
</script>
