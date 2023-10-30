<template>
  <div data-tag="tiny-steps" class="flex text-color-text-primary">
    <!-- hidden left step section -->
    <div
      data-tag="tiny-steps-left"
      v-show="state.startIndex !== 0"
      :class="[
        'flex-1 flex flex-col cursor-pointer',
        vertical ? 'text-center' : 'sm:max-w-[theme(spacing.80)] sm:mr-4'
      ]"
      @click="state.startIndex--"
    >
      <div data-tag="tiny-steps-main" class="flex items-center relative">
        <div
          data-tag="tiny-steps-line"
          :class="[
            'border-t-0.5 sm:border-t  flex-auto opacity-0',
            { 'sm:min-w-[theme(spacing.6)] sm:ml-4 sm:hidden': !vertical }
          ]"
        ></div>
        <div data-tag="tiny-steps-icon" :class="[gcls('circle-wrap'), gcls(`icon-${size}`)]">
          <div :class="gcls('steps-icon-left')">
            {{ size === 'mini' ? '' : state.startIndex }}
          </div>
          <template v-if="state.startIndex - 1 > 0">
            <div
              v-for="(item, index) in state.startIndex - 1"
              :class="[gcls('icon-circle'), gcls(`icon-${size}`)]"
              :style="{ right: (state.startIndex - 1 - index) * 4 + 'px' }"
              :key="index"
            ></div
          ></template>
        </div>
        <div
          data-tag="tiny-steps-line"
          :class="[
            'border-t-0.5 sm:border-t flex-auto',
            { 'sm:min-w-[theme(spacing.6)] sm:ml-4': !vertical },
            { 'border-color-brand': data[state.startIndex - 1] && data[state.startIndex - 1].status === 'done' }
          ]"
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
          vertical ? '' : 'sm:min-w-[theme(spacing.32)] sm:max-w-[theme(spacing.80)] sm:mr-4 sm:text-left',
          { 'flex-none': index === data.length - 1 && !vertical },
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
          :class="
            m(
              gcls('steps-line'),
              gcls(`left-line-${size}`),
              {
                'opacity-0': index === 0 && state.startIndex === 0
              },
              { 'sm:hidden sm:min-w-[theme(spacing.6)] sm:ml-4': !vertical },
              { 'border-color-brand': ['done', 'doing'].includes(node[statusField]) }
            )
          "
        ></div>
        <div
          data-tag="tiny-steps-icon"
          :class="
            m(
              gcls('steps-icon'),
              gcls(`icon-${size}`),
              { 'bg-gray-300 border-gray-300 text-color-text-inverse': index === active },
              gcls(`icon-${node[statusField]}`),
              index === active && gcls(`icon-${node[statusField]}-active`),
              { 'bg-red-500 border-red-500': index === active && size === 'mini' && node[statusField] === 'error' }
            )
          "
        >
          <template v-if="size !== 'mini'">
            <template v-if="node[statusField] === 'done'">
              <icon-finish
                :custom-class="
                  m(
                    'w-3.5 h-3.5 fill-color-brand',
                    { 'fill-color-icon-inverse': index === active },
                    { 'w-2.5 h-2.5': size === 'small' },
                    { 'w-4.5 h-4.5': size === 'large' }
                  )
                "
              ></icon-finish>
            </template>
            <template v-else-if="node[statusField] === 'error'">
              <icon-warn
                :custom-class="
                  m(
                    'w-3.5 h-3.5 fill-color-error',
                    { 'w-2.5 h-2.5': size === 'small' },
                    { 'w-4.5 h-4.5': size === 'large' }
                  )
                "
              ></icon-warn>
            </template>
            <template v-else>
              {{ index + 1 }}
            </template>
          </template>
        </div>
        <!-- title1 -->
        <div
          v-if="!vertical"
          data-tag="tiny-steps-title"
          :title="node[nameField]"
          :class="[gcls('steps-title'), gcls(`title-font-${size}`)]"
        >
          {{ node[nameField] }}
        </div>
        <div
          data-tag="tiny-steps-line"
          :class="
            m(
              gcls('steps-line'),
              gcls(`right-line-${size}`),
              {
                'sm:hidden': !vertical && index === data.length - 1
              },
              {
                'opacity-0': index === data.length - 1
              },
              { 'sm:min-w-[theme(spacing.6)] sm:ml-4': !vertical },
              { 'border-color-brand': node[statusField] === 'done' }
            )
          "
        ></div>
      </div>

      <slot name="item" :slot-scope="node" :index="index">
        <!-- title2 -->
        <div
          data-tag="tiny-steps-title"
          :title="node[nameField]"
          :class="['mt-3 font-medium truncate mx-5 ', gcls(`title-font-${size}`), { 'sm:hidden sm:mx-0': !vertical }]"
        >
          {{ node[nameField] }}
        </div>
        <!-- description -->
        <div
          v-if="node[descriptionField]"
          data-tag="tiny-steps-description"
          :class="
            m(
              'text-xs text-color-text-secondary mt-2 line-clamp-2 mx-5 break-all',
              {
                'text-color-brand': index === active
              },
              {
                'group-hover:text-color-brand-hover group-active:text-color-brand-active':
                  node[statusField] !== 'disabled' && node[statusField] !== 'error'
              },
              { 'text-color-none-hover': node[statusField] === 'disabled' },
              { 'text-color-brand': index === active },
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
        { 'sm:min-w-[theme(spacing.32)] sm:max-w-[theme(spacing.80)] sm:text-left': !vertical }
      ]"
      @click="state.startIndex++"
    >
      <div data-tag="tiny-steps-main" class="flex items-center relative">
        <div
          data-tag="tiny-steps-line"
          :class="[
            'border-t-0.5 sm:border-t  flex-auto',
            { 'sm:hidden sm:min-w-[theme(spacing.6)] sm:ml-4': !vertical },
            {
              'border-color-brand': data[state.endIndex] && ['done', 'doing'].includes(data[state.endIndex].status)
            }
          ]"
        ></div>
        <div data-tag="tiny-steps-icon" :class="[gcls('circle-wrap'), gcls(`icon-${size}`)]">
          <div :class="gcls('steps-icon-right')">
            {{ size === 'mini' ? '' : state.endIndex + 1 }}
          </div>
          <template v-if="state.rightNodePositions.length > 0">
            <div
              v-for="(item, index) in state.rightNodePositions"
              :class="[gcls('icon-circle'), gcls(`icon-${size}`)]"
              :style="item"
              :key="index"
            ></div
          ></template>
        </div>
        <div
          data-tag="tiny-steps-line"
          :class="[
            'border-t-0.5 sm:border-t  flex-auto opacity-0',
            { 'sm:hidden sm:min-w-[theme(spacing.6)] sm:ml-4': !vertical }
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/steps/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconFinish, IconWarn } from '@opentiny/vue-icon'
import { classes } from './token/normal-token'

export default defineComponent({
  emits: ['click'],
  components: {
    IconFinish: IconFinish(),
    IconWarn: IconWarn()
  },
  props: [...props, 'vertical', 'nameField', 'statusField', 'data', 'active', 'visibleNum', 'descriptionField', 'size'],
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
