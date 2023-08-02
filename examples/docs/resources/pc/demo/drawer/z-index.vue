<template>
  <div>
    <tiny-button @click="fn" type="primary"> 自定义z-index </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event" :z-index="zIndex">
      <div>内容区域</div>
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
    fn() {
      this.visible = true
    }
  }
}
</script>