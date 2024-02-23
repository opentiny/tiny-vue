<template>
  <div>
    <tiny-button @click="fn({ showHeader: true, showFooter: false })"> 默认属性配置 </tiny-button>
    <tiny-button @click="fn({ showHeader: false, showFooter: false })"> 隐藏头部 </tiny-button>
    <tiny-button @click="fn({ showHeader: true, showFooter: true })"> 显示底部 </tiny-button>

    <tiny-drawer
      :show-header="showHeader"
      :show-footer="showFooter"
      title="标题"
      :visible="visible"
      @update:visible="visible = $event"
    >
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
      showHeader: true,
      showFooter: false
    }
  },
  methods: {
    fn({ showHeader, showFooter }) {
      this.visible = true
      this.showHeader = showHeader
      this.showFooter = showFooter
    }
  }
}
</script>
