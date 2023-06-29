<template>
  <div>
    <tiny-button @click="fn" type="primary"> 抽屉默认插槽示例 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event">
      <div>默认插槽内容</div>
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