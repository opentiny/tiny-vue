<template>
  <div>
    <tiny-button @click="show = true"> 弹出Dialog </tiny-button>
    <tiny-dialog-box class="demo-image__preview-dialog-box" v-model:visible="show" title="消息" width="30%">
      <div class="demo-image__preview__in">
        <tiny-image :src="url" :preview-src-list="srcList"></tiny-image>
      </div>
      <template #footer>
        <tiny-button type="primary" @click="show = false"> 确 定 </tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script>
import { Button, DialogBox, Image } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox,
    TinyImage: Image
  },
  data() {
    return {
      show: false,
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
      srcList: [
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/house.jpg`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/bridge.jpg`
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.demo-image__preview__in {
  width: 200px;
  height: 200px;
  margin: auto;
  padding-top: 50px;
}

.demo-image__preview-dialog-box {
  :deep(.tiny-dialog-box) {
    > .tiny-dialog-box__footer {
      text-align: right;
    }
  }
}
</style>
