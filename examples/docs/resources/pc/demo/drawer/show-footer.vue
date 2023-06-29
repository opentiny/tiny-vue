<template>
  <div>
    <tiny-button type="primary" @click="showDrawer()"> 显示底部 </tiny-button>

    <tiny-drawer :show-footer="showFooter" title="标题" :visible="visible" @update:visible="visible = $event">
      <div style="height: 200px; text-align: center">内容区域</div>
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
      showFooter: true
    }
  },
  methods: {
    showDrawer() {
      this.visible = true
    }
  }
}
</script>
