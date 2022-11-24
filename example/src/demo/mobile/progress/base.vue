<template>
  <div>
    <div>
      <tiny-button
        :icon="IconMinus"
        :reset-time="0"
        @click="decrease"
      ></tiny-button>
      <tiny-button
        :icon="IconPlus"
        :reset-time="0"
        @click="increase"
      ></tiny-button>
    </div>
    <br />
    <tiny-progress
      class="progress"
      :stroke-width="24"
      :text-inside="testInside"
      :percentage="percentage"
      $mode="mobile"
    ></tiny-progress>
  </div>
</template>

<script>
import { Progress, Button } from '@opentiny/vue'
import { iconMinus,iconPlus } from '@opentiny/vue-icon'
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
<style scoped>
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
</style>
