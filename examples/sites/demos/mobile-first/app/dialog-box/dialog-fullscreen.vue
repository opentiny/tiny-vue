<template>
  <div style="height: 330px">
    <tiny-button @click="fn" type="primary"> 全屏打开 </tiny-button>
    <tiny-dialog-box
      title="标题"
      :fullscreen="true"
      :modal-append-to-body="false"
      :visible="boxVisibility"
      v-if="boxVisibility"
      @update:visible="boxVisibility = $event"
      ><div>自定义内容</div></tiny-dialog-box
    >
  </div>
</template>

<script>
import { DialogBox, Button } from '@opentiny/vue'

export default {
  components: {
    TinyDialogBox: DialogBox,
    TinyButton: Button
  },
  data() {
    return {
      boxVisibility: false
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    },
    closeFn() {
      this.boxVisibility = false
    }
  }
}
</script>
