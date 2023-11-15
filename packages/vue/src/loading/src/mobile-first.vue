<template>
  <transition name="tiny-loading-fade" @after-leave="handleAfterLeave">
    <div
      data-tag="tiny-loading"
      v-show="state.visible"
      :class="
        m(
          state.customClass,
          gcls('loading-default'),

          gcls({ 'loading-fullscreen': state.fullscreen }),
          gcls({ 'loading-unfullscreen': !state.fullscreen })
        )
      "
      :style="`background-color:${state.background}`"
    >
      <div
        data-tag="tiny-loading-body"
        :class="
          m(
            gcls('loading-content'),
            gcls({ 'loading-size-mini': state.size === 'mini' }),
            gcls({ 'loading-size-unmini': state.size !== 'mini' })
          )
        "
      >
        <svg
          v-if="!state.spinner"
          data-tag="tiny-loading-icon"
          :class="
            m(
              gcls('loading-unspinner'),
              gcls({
                'loading-unspinner-size-default':
                  !state.size || !['large', 'medium', 'small', 'mini'].includes(state.size)
              }),
              gcls({ 'loading-unspinner-size-large': state.size === 'large' }),
              gcls({ 'loading-unspinner-size-medium': state.size === 'medium' }),
              gcls({ 'loading-unspinner-size-small': state.size === 'small' }),
              gcls({ 'loading-unspinner-size-mini': state.size === 'mini' })
            )
          "
          viewBox="25 25 50 50"
        >
          <circle :class="m(gcls('loading-unspinner-svg-circle'))" cx="50" cy="50" r="24" fill="none" />
        </svg>
        <component data-tag="tiny-loading-spinner" v-else :is="state.spinner" :class="m(gcls('loading-spinner'))" />
        <span
          data-tag="tiny-loading-text"
          v-if="state.text"
          :class="
            m(
              gcls('loading-spinner-text'),
              gcls({ 'loading-spinner-size-mini': state.size === 'mini' }),
              gcls({ 'loading-spinner-size-unmini': state.size !== 'mini' })
            )
          "
          >{{ state.text }}</span
        >
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { $prefix, setup, $props, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/loading/vue'
import { classes } from './tokens'
import type { ILoadingApi } from '@opentiny/vue-renderless/types/loading.type'

export default defineComponent({
  name: $prefix + 'Loading',
  emits: ['after-leave'],
  props: {
    ...$props,
    _constants: Object
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, classes }) as unknown as ILoadingApi
  }
})
</script>
