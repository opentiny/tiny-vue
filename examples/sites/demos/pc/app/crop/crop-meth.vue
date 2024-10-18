<template>
  <div>
    <tiny-button :text="title" @click="toggleEnable"></tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop ref="cropRef" :cropvisible="visible" @update:cropvisible="visible = $event" :src="imgUrl"></tiny-crop>
  </div>
</template>

<script lang="jsx">
import { Button, Crop } from '@opentiny/vue'

export default {
  components: {
    TinyCrop: Crop,
    TinyButton: Button
  },
  data() {
    return {
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
      visible: false,
      title: '禁用裁剪框',
      enabled: true
    }
  },
  methods: {
    toggleEnable() {
      this.enabled = !this.enabled
      if (this.enabled) {
        this.$refs.cropRef.enable() // 启用裁剪框
        this.title = '禁用裁剪框'
      } else {
        this.$refs.cropRef.disable()
        this.title = '启用裁剪框'
      }
    }
  }
}
</script>
