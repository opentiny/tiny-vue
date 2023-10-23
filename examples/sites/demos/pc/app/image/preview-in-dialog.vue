<template>
  <div>
    <tiny-button @click="visible3 = true"> 弹出Dialog </tiny-button>
    <tiny-dialog-box :visible="visible3" @update:visible="visible3 = $event" :draggable="true" title="消息" width="30%">
      <div>
        <tiny-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"></tiny-image>
      </div>
      <template #footer>
        <tiny-button hue="primary" @click="visible3 = false"> 确 定 </tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { Button, DialogBox, Image } from '@opentiny/vue'

export default {
  components: { TinyButton: Button, TinyDialogBox: DialogBox, TinyImage: Image },
  data() {
    return {
      visible3: false,
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
