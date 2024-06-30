<template>
  <div class="demo-loading">
    <div id="loading-box0"></div>
    <div id="loading-box1"></div>
    <div id="loading-box2"></div>
    <div id="loading-box3"></div>
  </div>
</template>

<script>
import { Loading } from '@opentiny/vue'

export default {
  mounted() {
    // mini 尺寸
    Loading.service({
      size: 'mini',
      text: 'mini 尺寸',
      target: '#loading-box0',
      tiny_mode: 'mobile'
    })

    // small 尺寸
    Loading.service({
      size: 'small',
      text: 'small 尺寸',
      target: '#loading-box1',
      tiny_mode: 'mobile'
    })

    // medium 尺寸
    Loading.service({
      size: 'medium',
      text: 'medium 尺寸',
      target: '#loading-box2',
      tiny_mode: 'mobile'
    })

    // large 尺寸
    Loading.service({
      size: 'large',
      text: 'large 尺寸',
      target: '#loading-box3',
      tiny_mode: 'mobile'
    })
  }
}
</script>

<style scoped>
.demo-loading div {
  height: 100px;
  border-bottom: 4px solid #fff;
}

#loading-box3 {
  height: 150px;
}
</style>
