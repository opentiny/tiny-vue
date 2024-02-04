<template>
  <div>
    <tiny-button @click="visible3 = true">弹出Dialog</tiny-button>
    <tiny-dialog-box :visible="visible3" @update:visible="visible3 = $event" :dragable="true" title="消息" width="30%">
      <div>
        <tiny-image class="w-20 h-20" :src="url" :preview-src-list="srcList"></tiny-image>
      </div>
      <template #footer>
        <tiny-button hue="primary" @click="visible3 = false">确定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script>
import { Button, DialogBox, Image } from '@opentiny/vue'

export default {
  components: { TinyButton: Button, TinyDialogBox: DialogBox, TinyImage: Image },
  data() {
    return {
      visible3: false,
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
      srcList: [
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/3.jpg`
      ]
    }
  }
}
</script>
