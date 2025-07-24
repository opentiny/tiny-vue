<template>
  <div>
    <tiny-color-picker v-model="color" />
    <br />
    <tiny-button @click="changeColor"> 切换 </tiny-button>
  </div>
</template>

<script>
import { TinyColorPicker, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyColorPicker,
    TinyButton
  },
  data() {
    return {
      color: '#66ccff'
    }
  },
  methods: {
    changeColor() {
      this.color = this.color === '#66ccff' ? '#000' : '#66ccff'
    }
  }
}
</script>
