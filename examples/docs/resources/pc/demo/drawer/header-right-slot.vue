<template>
  <div>
    <tiny-button @click="fn" type="primary"> 头部右侧插槽示例 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event">
      <template #header-right>
        <div class="my-header-right">
          <span>自定义头部右侧</span>
        </div>
      </template>
      <div>内容区域</div>
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
.my-header-right {
  font-size: 14px;
}
</style>