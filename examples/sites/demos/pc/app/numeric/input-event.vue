<template>
  <div>
    <tiny-numeric v-model="value" @input="onInput"></tiny-numeric>
    <div>
      input事件触发了:<span class="count">{{ inputCount }}</span> 次
    </div>
  </div>
</template>

<script lang="ts">
import { TinyModal, TinyNumeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      value: 1,
      inputCount: 0
    }
  },
  methods: {
    onInput(event: InputEvent) {
      const currentValue = (event.target as HTMLInputElement).value
      TinyModal.message({
        message: `新值： ${currentValue}`,
        status: 'info'
      })
      this.inputCount++
    }
  }
}
</script>
