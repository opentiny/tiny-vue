<template>
  <div>
    <tiny-button @click="getContainerData" style="margin-bottom: 20px">获取容器数据</tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible" style="margin-bottom: 20px"></tiny-button>
    <tiny-crop ref="crop" :cropvisible="visible" @update:cropvisible="visible = $event" src="static/images/mountain.png"></tiny-crop>
  </div>
</template>

<script lang="jsx">
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
    getContainerData() {
      Modal.message({
        message: `容器数据：${JSON.stringify(this.$refs.crop.getContainerData())}`,
        status: 'info'
      })
    }
  }
}
</script>
