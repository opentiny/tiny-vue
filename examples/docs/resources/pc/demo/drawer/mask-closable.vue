<template>
  <div>
    <tiny-button @click="fn" type="primary" style="max-width:200px">单击遮罩层不关闭抽屉</tiny-button>
    <tiny-drawer title="标题" :mask-closable="false" :visible="visible" @update:visible="visible = $event">
      <div style="padding: 32px">单击遮罩层, 不关闭抽屉</div>
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
