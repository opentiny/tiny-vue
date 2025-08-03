<template>
  <div style="margin-bottom: 16px">
    <strong>当前 justify: {{ justifyValue }}</strong>
    <tiny-space direction="row" size="4" style="margin-bottom: 10px">
      <tiny-button v-for="val in justifyOptions" :key="val" @click="setJustify(val)">
        {{ val }}
      </tiny-button>
    </tiny-space>

    <tiny-space direction="row" :justify="justifyValue" style="border: 1px dashed #ccc; padding: 8px">
      <tiny-button>按钮 1</tiny-button>
      <tiny-button>按钮 2</tiny-button>
      <tiny-button>按钮 3</tiny-button>
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
    const justifyOptions = ['start', 'center', 'end', 'space-around', 'space-between', 'space-evenly']
    return {
      justifyValue: 'start',
      justifyOptions
    }
  },
  methods: {
    setJustify(val: string) {
      this.justifyValue = val
    }
  }
}
</script>
