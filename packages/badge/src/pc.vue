<template>
  <div class="tiny-badge__wrapper">
    <slot />
    <div
      v-if="!hidden && (state.content || state.content === 0 || isDot)"
      class="tiny-badge"
      :class="[
        isDot ? 'tiny-badge--default' : '',
        state.isOverstep ? 'tiny-badge--max' : '',
        type ? 'tiny-badge--' + type : ''
      ]"
    >
      <slot name="content">
        <a v-if="state.href" :href="state.href" :target="target" rel="noopener noreferrer">{{ state.content }}</a>
        <span class="tiny-badge__content-text" v-if="!state.href">{{ state.content }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/badge/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme/badge/index.css'

export default {
  props: [...props, 'isDot', 'hidden', 'type', 'max', 'value', 'modelValue', 'href', 'target'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
