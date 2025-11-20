<template>
  <div id="space-wrap">
    <!-- 选择行或列的按钮 -->
    <tiny-button type="primary" @click="setWrap(true)">换行</tiny-button>
    <tiny-button type="success" style="margin: 10px" @click="setWrap(false)">不换行</tiny-button>
    <tiny-space class="tiny-space" :size="12" :wrap="wrapValue">
      <tiny-button style="margin: 0" v-for="n in 10" :key="n">按钮 {{ n }}</tiny-button>
    </tiny-space>
  </div>
</template>

<script lang="ts">
import { TinyButton, TinySpace } from '@opentiny/vue'

export default {
  components: {
    TinySpace,
    TinyButton
  },
  data() {
    return {
      wrapValue: false
    }
  },
  methods: {
    setWrap(val: boolean) {
      this.wrapValue = val
    }
  }
}
</script>
