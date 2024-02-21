<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">自定义脚部</tiny-button>
    <tiny-modal v-model="value1" show-footer>
      <template #footer>
        <tiny-button type="primary" @click="value1 = false" round>我知道了</tiny-button>
      </template>
    </tiny-modal>
  </div>
</template>

<script lang="jsx">
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyModal: Modal
  },
  data() {
    return {
      value1: false
    }
  }
}
</script>
