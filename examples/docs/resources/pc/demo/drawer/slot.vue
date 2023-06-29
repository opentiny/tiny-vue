<template>
  <div>
    <tiny-button @click="fn" type="primary"> 抽屉组件 </tiny-button>
    <tiny-drawer ref="tinyDrawer" title="标题" :visible="visible" @update:visible="visible = $event">
      <template #header-right>
        <div @click="$refs.tinyDrawer.close()">自定义关闭</div>
      </template>
      <div style="height: 200px; text-align: center;">内容区域</div>
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