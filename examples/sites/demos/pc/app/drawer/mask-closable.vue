<template>
  <div>
    <tiny-button @click="openDrawer" type="primary" style="max-width: 200px">单击遮罩层不关闭抽屉</tiny-button>
    <tiny-drawer title="标题" :mask-closable="false" :visible="visible" @update:visible="visible = $event">
      <div>单击遮罩层，不关闭抽屉</div>
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
    }
  }
}
</script>
