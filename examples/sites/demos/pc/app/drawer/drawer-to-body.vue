<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 抽屉组件AppendToBody </tiny-button>
    <tiny-drawer
      v-if="visible"
      title="标题"
      :visible="visible"
      :append-to-body="true"
      @update:visible="visible = $event"
      @confirm="confirm"
    >
      <div>内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script>
import { TinyDrawer, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyDrawer,
    TinyButton
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    openDrawer() {
      this.visible = true
    },
    confirm() {
      this.visible = false
    }
  }
}
</script>
