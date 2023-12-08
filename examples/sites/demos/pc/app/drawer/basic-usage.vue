<template>
  <div>
    <tiny-button @click="fn" type="primary"> 抽屉组件 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event">
      <div>
        <br />
        <br />
        <span>内容区域</span>
      </div>
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

<style scoped>
:deep(.tiny-drawer .tiny-drawer__main.is-right) {
  height: calc(100% - 50px);
  margin-top: 50px;
}
</style>
