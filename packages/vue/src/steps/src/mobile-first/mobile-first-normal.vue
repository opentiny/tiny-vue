<template>
  <div data-tag="tiny-steps" class="flex text-color-text-primary">
    <!-- hidden left step section -->
    <div
      data-tag="tiny-steps-left"
      v-show="state.startIndex !== 0"
      :class="['flex-1 flex flex-col cursor-pointer', vertical ? 'text-center' : 'sm:max-w-[18.75rem] sm:mr-4']"
      @click="state.startIndex--"
    >
      <div data-tag="tiny-steps-main" class="flex items-center relative">
        <div
          data-tag="tiny-steps-line"
          :class="[
            'border-t-0.5 border-color-text flex-auto opacity-0',
            { 'sm:min-w-[1.5rem] sm:ml-4 sm:hidden': !vertical }
          ]"
        ></div>
        <div data-tag="tiny-steps-icon" class="w-6 h-6 flex-none flex relative z-10">
          <div
            class="
              w-full
              h-full
              flex
              items-center
              justify-center
              rounded-full
              border-0.5 border-color-brand
              text-color-brand
              bg-white
              font-medium
              relative
              z-10
            "
          >
            {{ state.startIndex }}
          </div>
          <template v-if="state.startIndex - 1 > 0">
            <div
              v-for="(item, index) in state.startIndex - 1"
              class="w-6 h-6 flex-none rounded-full border-0.5 border-color-brand bg-white font-medium absolute"
              :style="{ right: (state.startIndex - 1 - index) * 4 + 'px' }"
              :key="index"
            ></div
          ></template>
        </div>
        <div
          data-tag="tiny-steps-line"
          :class="['border-t-0.5 border-color-text flex-auto', { 'sm:min-w-[1.5rem] sm:ml-4': !vertical }]"
        ></div>
      </div>
    </div>
    <!-- visible step section -->
    <div
      data-tag="tiny-steps-block"
      v-for="(node, index) in data"
      v-show="isVisibleHandler(index) === 'visible'"
      :key="index"
      :class="
        m(
          'group flex-1 flex flex-col cursor-pointer text-center',
          { 'text-color-brand': index === active },
          vertical ? '' : 'sm:min-w-[8rem] sm:max-w-[18.75rem] sm:mr-4 sm:text-left',
          { 'flex-none': index === data.length - 1 },
          {
            ' hover:text-color-brand-hover active:text-color-brand-active':
              node[statusField] !== 'disabled' && node[statusField] !== 'error'
          },
          { 'text-color-none-hover': node[statusField] === 'disabled' },
          { 'text-color-error': node[statusField] === 'error' }
        )
      "
      @click="$emit('click', index, node, $event)"
    >
      <div data-tag="tiny-steps-main" class="flex items-center">
        <div
          data-tag="tiny-steps-line"
          :class="[
            'border-t-0.5 border-color-text flex-auto',
            {
              'opacity-0': index === 0 && state.startIndex === 0
            },
            { 'sm:hidden sm:min-w-[1.5rem] sm:ml-4': !vertical }
          ]"
        ></div>
        <div
          data-tag="tiny-steps-icon"
          :class="
            m(
              'w-6 h-6 flex-none flex items-center justify-center rounded-full border-0.5 border-current text-color-brand bg-white font-medium',
              {
                'bg-color-brand border-color-brand text-white': index === active
              },
              {
                'text-color-none-hover': node[statusField] === 'disabled'
              },
              {
                'text-color-error ': node[statusField] === 'error'
              },
              {
                'bg-color-error border-color-error text-white': index === active && node[statusField] === 'error'
              },
              {
                'bg-color-none-hover border-color-none-hover text-white':
                  index === active && node[statusField] === 'disabled'
              }
            )
          "
        >
          <template v-if="node[statusField] === 'done'">
            <IconYes
              :class="
                m('w-4 h-4 fill-color-brand', {
                  'fill-white': index === active
                })
              "
            ></IconYes>
          </template>
          <template v-else-if="node[statusField] === 'error'"> ! </template>
          <template v-else>
            {{ index + 1 }}
          </template>
        </div>
        <!-- title1 -->
        <div
          v-if="!vertical"
          data-tag="tiny-steps-title"
          :title="node[nameField]"
          :class="m('hidden sm:block text-sm ml-2 font-medium truncate')"
        >
          {{ node[nameField] }}
        </div>
        <div
          data-tag="tiny-steps-line"
          :class="
            m(
              'border-t-0.5 border-color-text flex-auto',
              {
                'sm:hidden': !vertical && index === data.length - 1
              },
              {
                'opacity-0': index === data.length - 1
              },
              { 'sm:min-w-[1.5rem] sm:ml-4': !vertical }
            )
          "
        ></div>
      </div>

      <slot name="item" :slot-scope="node" :index="index">
        <!-- title2 -->
        <div
          data-tag="tiny-steps-title"
          :title="node[nameField]"
          :class="['text-sm mt-3 font-medium truncate mx-5', { 'sm:hidden sm:mx-0': !vertical }]"
        >
          {{ node[nameField] }}
        </div>
        <!-- description -->
        <div
          v-if="node[descriptionField]"
          data-tag="tiny-steps-description"
          :class="
            m(
              'text-xs text-color-text-secondary mt-2 line-clamp-2 mx-5',
              {
                'text-color-brand': index === active
              },
              {
                'group-hover:text-color-brand-hover group-active:text-color-brand-active':
                  node[statusField] !== 'disabled' && node[statusField] !== 'error'
              },
              { 'text-color-none-hover': node[statusField] === 'disabled' },
              { 'text-color-error': node[statusField] === 'error' },
              !vertical ? 'sm:ml-8' : ''
            )
          "
        >
          {{ node[descriptionField] }}
        </div>
      </slot>
    </div>
    <!-- hidden right step section -->
    <div
      data-tag="tiny-steps-right"
      v-show="state.startIndex + visibleNum < data.length"
      :class="[
        'flex-1 flex flex-col cursor-pointer text-center',
        { 'sm:min-w-[8rem] sm:max-w-[18.75rem] sm:text-left': !vertical }
      ]"
      @click="state.startIndex++"
    >
      <div data-tag="tiny-steps-main" class="flex items-center relative">
        <div
          data-tag="tiny-steps-line"
          :class="['border-t-0.5 border-color-text flex-auto', { 'sm:hidden sm:min-w-[1.5rem] sm:ml-4': !vertical }]"
        ></div>
        <div data-tag="tiny-steps-icon" class="w-6 h-6 flex-none flex relative z-10">
          <div
            class="
              w-full
              h-full
              flex
              items-center
              justify-center
              rounded-full
              border-0.5 border-color-brand
              text-color-brand
              bg-white
              font-medium
              relative
              z-[9999]
            "
          >
            {{ state.endIndex + 1 }}
          </div>
          <template v-if="state.rightNodePositions.length > 0">
            <div
              v-for="(item, index) in state.rightNodePositions"
              class="w-6 h-6 flex-none rounded-full border-0.5 border-color-brand bg-white font-medium absolute"
              :style="item"
              :key="index"
            ></div
          ></template>
        </div>
        <div
          data-tag="tiny-steps-line"
          :class="[
            'border-t-0.5 border-color-text flex-auto opacity-0',
            { 'sm:hidden sm:min-w-[1.5rem] sm:ml-4': !vertical }
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/steps/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconYes } from '@opentiny/vue-icon'

const mode = { tiny_mode: 'mobile-first' }

export default defineComponent({
  emits: ['click'],
  components: {
    IconYes: IconYes(mode)
  },
  props: [...props, 'vertical', 'nameField', 'statusField', 'data', 'active', 'visibleNum', 'descriptionField'],
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  }
})
</script>
