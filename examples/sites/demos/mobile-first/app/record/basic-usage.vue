<template>
  <div>
    <tiny-button @click="openRecord"> 打开录音 </tiny-button>
    <tiny-record v-model="show" @confirm="handleConfirm"></tiny-record>
  </div>
</template>

<script>
import { TinyRecord, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyRecord,
    TinyButton
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
