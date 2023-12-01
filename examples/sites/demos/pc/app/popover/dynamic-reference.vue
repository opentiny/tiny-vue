<template>
  <div class="btns-container">
    <tiny-button v-for="i in [1, 2, 3, 4, 5]" :key="i" @click="btnClick"> 按钮 {{ i }} </tiny-button>
  </div>
  <tiny-popover ref="popoverRef" :reference="referenceElm" :content="dynContent" width="200"> </tiny-popover>
</template>

<script>
import { Popover, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button
  },
  data() {
    return {
      referenceElm: null,
      dynContent: ''
    }
  },
  methods: {
    btnClick(ev) {
      this.$refs.popoverRef.doClose() // 先触发上次的消失

      const btn = ev.target
      this.referenceElm = btn
      this.dynContent = '您刚刚点击了: ' + btn.innerText

      this.$nextTick(() => this.$refs.popoverRef.doShow())
    }
  }
}
</script>

<style scoped>
.btns-container {
  display: flex;
  flex-direction: column;
}
.tiny-button {
  width: 100px;
  margin: 0 0 16px 8px;
}
</style>
