<template>
  <div>
    <div>
      <tiny-button :icon="IconMinus" :reset-time="0" @click="decrease"></tiny-button>
      <tiny-button :icon="IconPlus" :reset-time="0" @click="increase"></tiny-button>
    </div>
    <br />
    <tiny-progress class="progress-first" :stroke-width="4" :percentage="percentage"></tiny-progress>
    <br />
    <tiny-progress class="progress-second" :stroke-width="24" :percentage="percentage"></tiny-progress>
    <div class="tip" v-if="percentage !== 100">努力加载中，请稍后...</div>
  </div>
</template>

<script lang="jsx">
import { Progress, Button } from '@opentiny/vue'
import { iconMinus, iconPlus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyProgress: Progress,
    TinyButton: Button
  },
  data() {
    return {
      percentage: 20,
      IconMinus: iconMinus(),
      IconPlus: iconPlus()
    }
  },
  methods: {
    increase() {
      this.percentage += 10
      if (this.percentage > 100) {
        this.percentage = 100
      }
    },
    decrease() {
      this.percentage -= 10
      if (this.percentage < 0) {
        this.percentage = 0
      }
    }
  }
}
</script>

<style scoped>
.tip {
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #808080;
}
.progress-first :deep(.tiny-progress__text) {
  font-size: 12px !important;
}
.progress-second :deep(.tiny-progress__text) {
  font-size: 14px !important;
}
</style>
