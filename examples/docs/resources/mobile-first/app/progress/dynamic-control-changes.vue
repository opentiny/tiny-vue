<template>
  <div>
    <div>
      <tiny-button :icon="IconMinus" :reset-time="0" @click="decrease"></tiny-button>
      <tiny-button :icon="IconPlus" :reset-time="0" @click="increase"></tiny-button>
    </div>
    <br />
    <tiny-progress class="progress" size="large" :text-inside="testInside" :percentage="percentage"></tiny-progress>
  </div>
</template>

<script>
import { Progress, Button } from '@opentiny/vue'
import { iconMinus, iconPlus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyProgress: Progress,
    TinyButton: Button
  },
  data() {
    return {
      testInside: true,
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
