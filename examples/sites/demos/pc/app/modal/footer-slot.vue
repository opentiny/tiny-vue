<template>
  <div class="content">
    <tiny-button @click="visible = !visible" :reset-time="0">自定义底部</tiny-button>
    <tiny-modal v-model="visible" show-footer>
      <template #footer>
        <tiny-button>自定义底部信息</tiny-button>
      </template>
    </tiny-modal>
  </div>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyModal: Modal
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>
