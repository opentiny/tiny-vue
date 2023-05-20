<template>
  <div>
    <tiny-button @click="openRecord">
      打开录音
    </tiny-button>
    <tiny-record v-model="show" @confirm="handleConfirm"></tiny-record>
  </div>
</template>

<script>
import { Record, Button } from '@opentiny/vue'

export default {
  components: {
    TinyRecord: Record,
    TinyButton: Button
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    openRecord() {
      this.show = !this.show
    },
    handleConfirm(file) {
      console.log(file)
    }
  }
}
</script>
