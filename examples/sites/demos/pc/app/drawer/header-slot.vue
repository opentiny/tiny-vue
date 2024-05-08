<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 头部插槽示例 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event">
      <template #header>
        <div class="my-header">
          <h3>自定义头部标题</h3>
          <p>自定义副标题xxxxxx</p>
        </div>
      </template>
      <span>内容区域</span>
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
.my-header {
  padding: 0 32px;
  border-bottom: 1px solid #ccc;
}

.my-header h3 {
  font-size: 16px;
  font-weight: bold;
  line-height: 1.7;
}

.my-header p {
  font-size: 12px;
  line-height: 1.5;
}
</style>
