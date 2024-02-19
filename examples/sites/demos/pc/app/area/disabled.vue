<template>
  <div>
    <tiny-button @click="Switchover" style="margin-bottom: 10px">启用/禁用</tiny-button>
    <tiny-area v-model="area" placeholder="请选择" :disabled="disabled"></tiny-area>
  </div>
</template>

<script lang="jsx">
import { Area, Button } from '@opentiny/vue'

export default {
  components: {
    TinyArea: Area,
    TinyButton: Button
  },
  data() {
    return {
      area: ['3623', '4199', '649991', '661414'],
      disabled: false
    }
  },
  methods: {
    Switchover() {
      this.disabled = !this.disabled
    }
  }
}
</script>
