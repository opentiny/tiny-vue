<template>
  <div>
    <tiny-button @click="fn" type="primary" style="max-width:200px">单击遮罩层不关闭弹窗</tiny-button>
    <tiny-drawer title="标题" :mask-closable="false" :visible="visible" @update:visible="visible = $event">
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
