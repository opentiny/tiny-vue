<template>
  <div>
    <tiny-button @click="fn0" type="primary"> 设置宽度为900px </tiny-button>
    <tiny-button @click="fn1" plain> 宽度改为700px </tiny-button>
    <tiny-button @click="fn2" plain> 宽度改为80% </tiny-button>

    <tiny-drawer title="标题" :width="width" :visible="visible" @update:visible="visible = $event">
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
      visible: false,
      width: '900px'
    }
  },
  methods: {
    fn0() {
      this.visible = true
    },
    fn1() {
      this.width = '700px'
      this.visible = true
    },
    fn2() {
      this.width = '80%'
      this.visible = true
    }
  }
}
</script>
