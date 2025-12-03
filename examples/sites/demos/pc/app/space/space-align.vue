<template>
  <div style="display: flex; flex-direction: column; justify-content: space-around">
    <strong>当前 align: {{ alignValue }}</strong>
    <tiny-space direction="row" size="4" style="margin-bottom: 10px">
      <tiny-button style="margin: 0" v-for="val in alignOptions" :key="val" @click="setAlign(val)">
        {{ val }}
      </tiny-button>
    </tiny-space>
    <tiny-space class="tiny-space" :align="alignValue" style="border: 1px dashed #ccc">
      <tiny-button style="margin: 0">button</tiny-button>
      <tiny-button style="height: 60px; margin: 0">高按钮</tiny-button>
    </tiny-space>
  </div>
</template>

<script lang="ts">
import { TinyButton, TinySpace } from '@opentiny/vue'

export default {
  components: {
    TinyButton,
    TinySpace
  },
  data() {
    const alignOptions = ['start', 'center', 'end', 'baseline', 'stretch']
    return {
      alignValue: 'start',
      alignOptions
    }
  },
  methods: {
    setAlign(val: string) {
      this.alignValue = val
    }
  }
}
</script>
