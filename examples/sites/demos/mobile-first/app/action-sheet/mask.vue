<template>
  <div>
    <tiny-button @click="fn" type="primary"> 关闭遮罩层 </tiny-button>
    <tiny-action-sheet
      title="标题"
      :mask="false"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
    ></tiny-action-sheet>
  </div>
</template>

<script>
import { TinyActionSheet, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyActionSheet,
    TinyButton
  },
  data() {
    return {
      boxVisibility: false
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    }
  }
}
</script>
