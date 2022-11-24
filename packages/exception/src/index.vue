<template>
  <div class="tiny-mobile-exception" :class="exceptionClass">
    <div class="tiny-mobile-exception__content">
      <div
        class="tiny-mobile-exception__content-view"
        :class="['tiny-mobile-exception__content-' + type]"
      ></div>
      <slot name="content">
        <div class="tiny-mobile-exception__content-message">
          <div class="main-message">{{ state.message }}</div>
          <div v-if="subMessage" class="sub-message">{{ subMessage }}</div>
          <slot v-if="type === 'nodata'">
            <tiny-button @click="create" type="primary" size="medium" plain>
              {{
                buttonText ? buttonText : t('ui.exception.create')
              }}</tiny-button
            >
          </slot>
        </div>
      </slot>
    </div>
    <div class="tiny-mobile-exception__footer">
      <slot name="footer">
        <span>{{ t('ui.exception.provide') }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/exception/vue'
import { setup, $prefix } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'

export default {
  name: $prefix + 'Exception',
  components: {
    TinyButton: Button
  },
  props: {
    type: {
      type: String,
      default: 'nodata'
    },
    message: String,
    subMessage: String,
    exceptionClass: String,
    buttonText: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
