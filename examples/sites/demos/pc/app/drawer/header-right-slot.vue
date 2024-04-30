<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 头部右侧插槽示例 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event" :show-close="false">
      <template #header-right>
        <div class="my-header-right">
          <span>自定义头部右侧</span>
        </div>
      </template>
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
      visible: false
    }
  },
  methods: {
    openDrawer() {
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
