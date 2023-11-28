<template>
  <div class="tiny-mobile-toast">
    <div :class="['tiny-mobile-toast-content', 'tiny-mobile-toast-content-' + state.type]">
      <div class="tiny-mobile-toast-icon" v-if="state.type !== 'text'">
        <icon-mobile-error-white v-if="state.type === 'error'"></icon-mobile-error-white>
        <icon-mobile-success-white v-if="state.type === 'correct'"></icon-mobile-success-white>
      </div>
      <div class="tiny-mobile-toast-text">{{ state.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/toast/vue'
import '@opentiny/vue-theme-mobile/toast/index.less'
import { IconMobileErrorWhite, IconMobileSuccessWhite } from '@opentiny/vue-icon'
import type { IToastApi } from '@opentiny/vue-renderless/types/toast.type'

export default defineComponent({
  components: {
    IconMobileErrorWhite: IconMobileErrorWhite(),
    IconMobileSuccessWhite: IconMobileSuccessWhite()
  },
  props: [...props, 'type', 'zIndex', 'text', 'time', 'timeout'],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IToastApi
  }
})
</script>
