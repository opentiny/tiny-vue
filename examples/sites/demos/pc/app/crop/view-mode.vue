<template>
  <div>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-button text="切换模式" @click="changeMode"></tiny-button>
    <tiny-crop
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      :src="imgUrl"
      :view-mode="num"
      :key="num"
    ></tiny-crop>
  </div>
</template>

<script lang="jsx">
import { Button, Crop, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyCrop: Crop,
    TinyButton: Button
  },
  data() {
    return {
      num: 0,
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
      visible: false
    }
  },
  methods: {
    changeMode() {
      num.value = (num.value + 1) % 4
      Modal.message({ message: '模式:' + this.num })
    }
  }
}
</script>
