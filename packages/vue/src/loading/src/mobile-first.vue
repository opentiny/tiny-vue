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
            gcls({ 'loading-size-mini': size === 'mini' }),
            gcls({ 'loading-size-unmini': size !== 'mini' })
          )
        "
      >
        <img
          v-if="!state.spinner"
          data-tag="tiny-loading-icon"
          :class="
            m(
              gcls({
                'loading-unspinner-size-default': !size || !['large', 'medium', 'small', 'mini'].includes(size)
              }),
              gcls({ 'loading-unspinner-size-large': size === 'large' }),
              gcls({ 'loading-unspinner-size-medium': size === 'medium' }),
              gcls({ 'loading-unspinner-size-small': size === 'small' }),
              gcls({ 'loading-unspinner-size-mini': size === 'mini' })
            )
          "
          :src="state.loadingImg"
          :style="state.iconStyle"
        />
        <component data-tag="tiny-loading-spinner" v-else :is="state.spinner" :class="m(gcls('loading-spinner'))" />
        <span
          data-tag="tiny-loading-text"
          v-if="state.text"
          :class="
            m(
              gcls('loading-spinner-text'),
              gcls({ 'loading-spinner-size-mini': size === 'mini' }),
              gcls({ 'loading-spinner-size-unmini': size !== 'mini' })
            )
          "
          >{{ state.text }}</span
        >
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { $prefix, setup, props, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/loading/vue'
import { classes } from './tokens'
import type { ILoadingApi } from '@opentiny/vue-renderless/types/loading.type'

export default defineComponent({
  inheritAttrs: false,
  name: $prefix + 'Loading',
  emits: ['after-leave'],
  props: [...props, '_constants', 'loadingImg', 'size'],
  setup(props, context) {
    return setup({ props, context, renderless, api, classes }) as unknown as ILoadingApi
  }
})
</script>
