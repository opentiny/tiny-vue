<template>
  <div class="mobile-mask-demo">
    <tiny-button  @click="visible = true">默认插槽示例</tiny-button>
    <tiny-mask v-model:visible="visible">
      <div class="mask-content">
        <p>这是自定义内容</p>
      </div>
    </tiny-mask>
  </div>
</template>

<script>
import { Mask, Button } from '@opentiny/vue'

export default {
  components: {
    TinyMask: Mask,
    TinyButton: Button
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>
.mask-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background: #eee;
}
</style>
