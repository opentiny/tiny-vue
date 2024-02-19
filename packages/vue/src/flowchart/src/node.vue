<template>
  <div
    data-tag="tiny-flowchart-node"
    :key="state.nodeName"
    :class="[
      `layout-${state.nodeLayout}`,
      `size-${state.nodeSize}`,
      `status-${state.nodeStatus}`,
      'absolute z-20 h-6',
      { 'sm:h-4': state.sizeMini, 'sm:h-8': state.sizeMedium }
    ]"
    :style="{ width: `${state.nodeWidth}px` }"
  >
    <div
      ref="icon"
      :class="[
        'border-solid rounded-full flex items-center justify-center',
        'absolute z-0 translate-x-1 translate-y-1 w-4 h-4 text-base',
        'hover:ring hover:ring-color-bg-2 stroke-2 cursor-pointer',
        { 'sm:w-2 sm:h-2': state.sizeMini, 'sm:w-6 sm:h-6 sm:text-2xl': state.sizeMedium },
        {
          'border-4 bg-clip-padding border-color-brand-hover-subtle bg-color-border-focus':
            (state.isSmall && state.statOngoing) || (!state.isSmall && state.statOngoing && state.sizeMedium),
          'border-0 border-color-bg-1 bg-color-border-focus': !state.isSmall && state.statOngoing && !state.sizeMedium,
          'border-2 border-color-border bg-color-bg-1': state.statNotStarted
        },
        state.isActive
          ? {
              'border-2 bg-clip-padding border-color-brand-hover-subtle bg-color-border-focus': state.statCompleted,
              'border-2 bg-clip-padding border-color-brand-hover-subtle bg-color-error': state.statFail
            }
          : {
              'border-2 border-color-border-focus bg-color-bg-1': state.statCompleted,
              'border-2 border-color-error bg-color-bg-1': state.statFail
            }
      ]"
    >
      <template v-if="!state.sizeMini || (state.sizeMini && state.isSmall)">
        <span class="inline-flex origin-center stroke-color-bg-1" :class="state.isSmall ? 'scale-75' : 'scale-95'">
          <template v-if="state.statCompleted">
            <tiny-icon-yes :class="{ 'stroke-color-border-focus': !state.isActive }"></tiny-icon-yes>
          </template>
          <template v-if="state.statFail">
            <tiny-icon-close :class="{ 'stroke-color-error': !state.isActive }"></tiny-icon-close>
          </template>
        </span>
      </template>
    </div>
    <div
      ref="title"
      :class="
        m(
          'absolute z-0 translate-x-1',
          state.layUpdown ? 'top-6' : 'left-6 translate-y-1',
          state.layUpdown
            ? { 'sm:top-4': state.sizeMini, 'sm:top-8': state.sizeMedium }
            : { 'sm:left-4': state.sizeMini, 'sm:left-8': state.sizeMedium },
          titleClass || ''
        )
      "
      :style="{
        maxWidth: `${state.titleMaxWidth}px`,
        left: state.layUpdown ? `-${state.posLeft}px` : ''
      }"
    >
      <template v-for="key in ['title', 'subtitle', 'auxi']">
        <div
          v-if="state[key].show"
          :key="key"
          :title="state[key].text"
          :class="[
            'truncate',
            state.layUpdown ? 'text-center' : 'text-left',
            key === 'title' && state.sizeMedium ? 'text-sm' : 'text-xs',
            state.isSmall
              ? { 'leading-5': key === 'title', 'leading-4': key !== 'title' }
              : {
                  'leading-6': key === 'title' && state.sizeMedium,
                  'leading-5': (key !== 'title' && state.sizeMedium) || (key === 'title' && state.sizeSmall),
                  'leading-4': (key !== 'title' && state.sizeSmall) || state.sizeMini
                },
            {
              'text-color-icon-focus': state.statOngoing,
              'text-color-text-primary': key === 'title' && state.statCompleted,
              'text-color-error': key === 'title' && state.statFail,
              'text-color-icon-secondary': key === 'title' && state.statNotStarted,
              'text-color-icon-placeholder': key !== 'title' && !state.statOngoing
            }
          ]"
        >
          {{ state[key].text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { setup, props, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/flowchart/node'
import { IconYes as iconYes, IconClose as iconClose } from '@opentiny/vue-icon'

export default defineComponent({
  props: [...props, 'node', 'config', 'titleClass'],
  components: {
    TinyIconYes: iconYes(),
    TinyIconClose: iconClose()
  },
  setup(props: any, context: any): any {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
