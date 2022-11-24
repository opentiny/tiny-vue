<template>
  <div>
    <tiny-button @click="clearn">清除裁剪区域数据</tiny-button>
    <tiny-button @click="getData" style="margin-bottom: 20px"
      >获取裁剪区域数据</tiny-button
    >
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop
      ref="crop"
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      src="static/images/1.jpg"
    ></tiny-crop>
  </div>
</template>

<script>
import { Crop, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyCrop: Crop,
    TinyButton: Button
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    clearn() {
      this.$refs.crop.clear()
    },
    getData() {
      Modal.message({
        message: `裁剪区域数据：${JSON.stringify(this.$refs.crop.getData())}`,
        status: 'info'
      })
    }
  }
}
</script>
