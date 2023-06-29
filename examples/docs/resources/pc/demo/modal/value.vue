<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">
      默认插槽
    </tiny-button>
    <tiny-modal v-model="value1" :lock-scroll="false" show-footer>
      <template #default>
        <p class="custom-content">
          test
        </p>
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

<style scoped>
.custom-content {
  color: #3168f1;
}
</style>
