<template>
  <div>
    <tiny-button @click="fn" type="primary"> 底部插槽示例 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event" showFooter>
      <div>内容区域</div>

      <template #footer>
        <div class="my-footer">
          <span>自定义底部文本</span>
          <tiny-button type="primary" native-type="submit">确认提交</tiny-button>
        </div>
      </template>
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
.my-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>