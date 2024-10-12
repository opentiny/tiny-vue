<template>
  <div data-tag="tiny-load-list" role="feed" :aria-busy="state.loading">
    <template v-if="direction === 'down'">
      <slot></slot>
    </template>
    <div v-else ref="placeholder" data-tag="tiny-load-list__placeholder" />

    <div v-if="state.loading" data-tag="tiny-load-list__loading" class="flex justify-center items-center">
      <slot name="loading">
        <span>{{ loadingText }}</span>
      </slot>
    </div>

    <div v-if="finished" data-tag="tiny-load-list__finished-text" class="flex justify-center items-center">
      <slot name="finished">
        <span>{{ finishedText }}</span>
      </slot>
    </div>

    <div
      v-if="error"
      role="button"
      data-tag="tiny-load-list__error-text"
      tabindex="0"
      @click="clickErrorText"
      class="flex justify-center items-center"
    >
      <slot name="error">
        <span>{{ errorText }}</span>
      </slot>
    </div>

    <template v-if="direction === 'up'">
      <slot></slot>
    </template>
    <div v-else ref="placeholder" data-tag="tiny-load-list__placeholder" />
  </div>
</template>

<script lang="ts">
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/load-list/vue'

export default defineComponent({
  emits: ['load', 'update:error', 'update:loading'],
  props: [
    ...props,
    'direction',
    'offset',
    'disabled',
    'scroller',
    'immediateCheck',
    'error',
    'errorText',
    'loading',
    'loadingText',
    'finished',
    'finishedText',
    'delay'
  ],
  components: {},
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  }
})
</script>
