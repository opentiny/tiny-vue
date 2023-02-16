<template>
  <div>
    <div class="page__hd">
      <h1 class="page__title">Slider</h1>
      <p class="page__desc">滑块</p>
    </div>
    <div class="padds">
      <tiny-slider v-model="value" @change="change"></tiny-slider>
    </div>
  </div>
</template>

<script>
import { Slider } from '@opentiny/vue'

export default {
  components: {
    TinySlider: Slider
  },
  data() {
    return {
      value: 40
    }
  },
  methods: {
    change(val) {
      console.log(`触发change事件,改变值为${val}`)
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
.padds {
  padding: 15px;
}
</style>
