<template>
  <div>
    <tiny-button @click="fn" type="primary"> 隐藏头部 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event" :show-header="false">
      <div style="padding: 32px 0">内容区域</div>
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
    fn() {
      this.visible = true
    }
  }
}
</script>