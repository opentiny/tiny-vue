<template>
  <div
    ref="wrapperRef"
    class="tiny-qr-code-container"
    :class="bordered ? 'border' : ''"
    :style="{ width: state.sizeStr, height: state.sizeStr }"
  >
    <canvas ref="qrcodeRef"></canvas>
    <div v-if="icon" class="mask mask-icon">
      <img
        :src="icon"
        :style="{ width: state.iconSizeStr, height: state.iconSizeStr, background: state.iconBackgroudColor }"
        class="icon"
      />
    </div>
  </div>
</template>

<script lang="ts">
import QRCode from 'qrcode'
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/qr-code/vue'
import '@opentiny/vue-theme/qr-code/index.less'

export default defineComponent({
  name: $prefix + 'QrCode',
  emits: ['change'],
  props: {
    value: {
      type: String
    },
    level: {
      type: String,
      default: 'Medium',
      validator: (value: string) => ['Low', 'Medium', 'Quality', 'High'].includes(value)
    },
    size: {
      type: Number,
      default: 200
    },
    color: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String
    },
    iconSize: {
      type: Number,
      default: 50
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true, extendOptions: { QRCode } })
  }
})
</script>
