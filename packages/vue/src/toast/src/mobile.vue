<template>
  <div class="tiny-mobile-toast">
    <div class="tiny-mobile-toast-content">
      <div class="tiny-mobile-toast-icon" v-if="state.type !== 'text'">
        <icon-operationfaild-l v-if="state.type === 'error'"></icon-operationfaild-l>
        <icon-successful v-if="state.type === 'correct'"></icon-successful>
      </div>
      <div class="tiny-mobile-toast-text">{{ state.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/toast/vue'
import '@opentiny/vue-theme-mobile/toast/index.less'
import { IconOperationfaildL, IconSuccessful, IconLoading } from '@opentiny/vue-icon'
import type { IToastApi } from '@opentiny/vue-renderless/types/toast.type'

export default defineComponent({
  components: {
    iconLoading: IconLoading(),
    iconOperationfaildL: IconOperationfaildL(),
    iconSuccessful: IconSuccessful()
  },
  props: [...props, 'type', 'zIndex', 'text', 'time', 'events'],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IToastApi
  }
})
</script>
