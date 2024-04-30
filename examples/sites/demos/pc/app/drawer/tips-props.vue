<template>
  <div class="demo-drawer">
    <tiny-button @click="openDrawer" type="primary"> 展开抽屉 </tiny-button>
    <tiny-drawer title="标题" :tipsProps="tipsProps" :visible="visible" @update:visible="visible = $event">
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
      tipsProps: {
        content: '这是一段帮助提示。。。',
        placement: 'right'
      }
    }
  },
  methods: {
    openDrawer() {
      this.visible = true
    }
  }
}
</script>
