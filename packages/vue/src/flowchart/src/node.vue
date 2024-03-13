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
        'w-4 h-4 absolute z-0 rounded-full flex items-center justify-center',
        'translate-x-1 translate-y-1 text-base cursor-pointer',
        { 'sm:w-2 sm:h-2': state.icon.size === 'mini', 'sm:w-6 sm:h-6': state.icon.size === 'medium' }
      ]"
    >
      <component
        :is="state.icon.svg()"
        :custom-class="[
          'w-4 h-4 inline-block',
          { 'sm:w-2 sm:h-2': state.icon.size === 'mini', 'sm:w-6 sm:h-6': state.icon.size === 'medium' }
        ]"
      ></component>
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
import {
  iconNotStarted,
  iconNotStartedMini,
  iconOnGoing,
  iconOnGoingMini,
  iconExceptionO,
  iconExceptionMiniO,
  iconDone,
  iconDoneMini
} from '@opentiny/vue-icon'

const icons = {
  'not-started': { mini: iconNotStartedMini, other: iconNotStarted },
  'ongoing': { mini: iconOnGoingMini, other: iconOnGoing },
  'fail': { mini: iconExceptionMiniO, other: iconExceptionO },
  'completed': { mini: iconDoneMini, other: iconDone }
}

export default defineComponent({
  props: [...props, 'node', 'config', 'titleClass'],
  setup(props: any, context: any): any {
    return setup({ props, context, renderless, api, mono: true, extendOptions: { icons } })
  }
})
</script>
