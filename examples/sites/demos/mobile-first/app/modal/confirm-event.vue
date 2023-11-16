<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0"> 点击确定按钮触发事件 </tiny-button>
    <tiny-modal v-model="value1" type="confirm" show-footer @confirm="confirmClick">
      <template #default>
        <p>test</p>
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
      value1: false
    }
  },
  methods: {
    confirmClick() {
      Modal.message({ message: '点击确定按钮时触发事件' })
    }
  }
}
</script>
