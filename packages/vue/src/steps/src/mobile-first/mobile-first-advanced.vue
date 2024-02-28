<template>
  <div data-tag="tiny-steps-advanced" :class="gcls('steps-advanced')">
    <SlideBar ref="slideBar" :data="data" :duration="duration" :no-arrow="noArrow" :flex="flex" :size="size">
      <!-- left button -->
      <template #left-button="slotScoped">
        <div
          :class="[
            'w-4 h-full flex items-center justify-center mr-1.5',
            slotScoped.show
              ? 'bg-color-bg-2 text-color-text hover:bg-color-info-secondary-subtle hover:text-color-brand'
              : 'text-color-text-disabled bg-color-bg-2'
          ]"
        >
          <IconChevronLeft class="h-3 w-3 fill-current"></IconChevronLeft>
        </div>
      </template>
      <!-- right button -->
      <template #right-button="slotScoped">
        <div
          :class="[
            'w-4 h-full flex items-center justify-center ml-1.5',
            slotScoped.show
              ? 'bg-color-bg-2 text-color-text hover:bg-color-info-secondary-subtle hover:text-color-brand'
              : 'text-color-text-disabled bg-color-bg-2'
          ]"
        >
          <IconChevronRight class="h-3 w-3 fill-current"></IconChevronRight>
        </div>
      </template>
      <!-- main block -->
      <template #block="{ slotScoped: { node, index } }">
        <div
          data-tag="tiny-steps-block"
          :class="
            m(
              gcls('steps-block'),
              gcls(`steps-block-${node[statusField]}`),
              { 'bg-color-brand hover:bg-color-brand': index === active },
              index === active && gcls(`steps-block-${node[statusField]}-active`),
              {
                'min-w-[theme(spacing.28)] max-w-[theme(spacing.56)]': !flex
              },
              size === 'large' ? 'h-12' : 'h-8'
            )
          "
          @click="$emit('click', index, node, $event)"
        >
          <div data-tag="tiny-steps-content" :class="gcls('steps-content')">
            <slot name="item" :slot-scope="node" :index="index">
              <div
                data-tag="tiny-steps-icon"
                :class="
                  m(
                    'w-4 h-4 flex flex-none items-center justify-center rounded-full mr-2 text-color-text-inverse',
                    size === 'large' ? 'w-6 h-6 mr-3' : 'w-4 h-4 mr-2',
                    node[statusField] === 'done' ? 'bg-color-brand' : 'bg-color-border',
                    {
                      ' bg-color-brand group-hover:text-color-brand group-hover:bg-color-bg-1 ':
                        node[statusField] === 'doing'
                    },
                    {
                      ' text-color-brand bg-color-bg-1': index === active && node[statusField] !== 'disabled'
                    },
                    {
                      'text-color-text-inverse bg-color-error': node[statusField] === 'error'
                    },
                    {
                      'text-color-error bg-color-bg-1': node[statusField] === 'error' && index === active
                    }
                  )
                "
              >
                <icon-finish
                  v-if="node[statusField] === 'done'"
                  :custom-class="['fill-current', size === 'large' ? 'w-3.5 h-3.5' : 'w-2.5 h-2.5']"
                ></icon-finish>
                <icon-warn
                  v-else-if="node[statusField] === 'error'"
                  :custom-class="['fill-current', size === 'large' ? 'w-3.5 h-3.5' : 'w-2.5 h-2.5']"
                ></icon-warn>
                <span v-else> {{ index + 1 }} </span>
              </div>
              <div data-tag="tiny-steps-prefixslot" class="flex-none">
                <slot name="prefix" :slot-scope="{ node, index }">
                  <div class="-mr-2"></div>
                </slot>
              </div>
              <div
                data-tag="tiny-steps-text"
                :class="
                  m(gcls('steps-text'), gcls(`steps-text-${node[statusField]}`), {
                    'text-color-text-inverse': index === active && node[statusField] !== 'disabled'
                  })
                "
              >
                <div
                  data-tag="tiny-steps-text-name"
                  class="truncate"
                  @mouseenter="handleMouseenter($event, 'top')"
                  @mouseleave="handleMouseleave($event, 'top')"
                >
                  {{ node[nameField] }}
                </div>
                <div
                  v-if="size === 'large' && node[descriptionField]"
                  data-tag="tiny-steps-text-description"
                  :class="
                    m(
                      'truncate text-xs',
                      {
                        'text-color-text-secondary': index !== active && ['done', 'doing'].includes(node[statusField])
                      },
                      { 'group-hover:text-white': index !== active && ['doing'].includes(node[statusField]) }
                    )
                  "
                  @mouseenter="handleMouseenter($event, 'bottom')"
                  @mouseleave="handleMouseleave($event, 'bottom')"
                >
                  {{ node[descriptionField] }}
                </div>
              </div>
            </slot>
          </div>
          <div
            :class="[
              'h-full absolute left-0 border-t-transparent border-b-transparent border-color-bg-1',
              { 'hidden': index === 0 }
            ]"
            :style="
              size === 'large'
                ? `border-top-width: var(--tiny-spacing-6, 1.5rem);
              border-bottom-width: var(--tiny-spacing-6, 1.5rem);
              border-left-width: var(--tiny-spacing-2, 0.5625rem);`
                : `border-top-width: var(--tiny-spacing-4, 1rem);
              border-bottom-width: var(--tiny-spacing-4, 1rem);
              border-left-width: var(--tiny-spacing-1_5, 0.375rem);`
            "
          ></div>
          <div
            :class="[
              'h-full absolute right-0 border-l-transparent border-color-bg-1',
              { 'hidden': index === data.length - 1 }
            ]"
            :style="
              size === 'large'
                ? `border-top-width: var(--tiny-spacing-6, 1.5rem);
              border-bottom-width: var(--tiny-spacing-6, 1.5rem);
              border-left-width: var(--tiny-spacing-2, 0.5625rem);`
                : `border-top-width: var(--tiny-spacing-4, 1rem);
              border-bottom-width: var(--tiny-spacing-4, 1rem);
              border-left-width: var(--tiny-spacing-1_5, 0.375rem);`
            "
          ></div>
        </div>
      </template>
      <template #block-bottom="{ node, index }">
        <slot name="block-bottom" :node="node" :index="index"></slot>
      </template>
    </SlideBar>

    <tiny-popover
      ref="popover"
      v-model="state.popoverVisible"
      :placement="state.popoverPlacement"
      trigger="manual"
      class="tiny-steps-senior__popover"
      :content="state.popoverContent"
    ></tiny-popover>
  </div>
</template>

<script lang="ts">
import Popover from '@opentiny/vue-popover'
import { renderless, api } from '@opentiny/vue-renderless/steps/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconFinish, IconWarn, IconChevronLeft, IconChevronRight } from '@opentiny/vue-icon'
import SlideBar from './slide-bar.vue'
import { classes } from './token/advanced-token'

export default defineComponent({
  emits: ['click'],
  components: {
    TinyPopover: Popover,
    SlideBar,
    IconFinish: IconFinish(),
    IconWarn: IconWarn(),
    IconChevronLeft: IconChevronLeft(),
    IconChevronRight: IconChevronRight()
  },
  props: [
    ...props,
    'vertical',
    'nameField',
    'statusField',
    'descriptionField',
    'data',
    'active',
    'visibleNum',
    'duration',
    'noArrow',
    'flex',
    'size'
  ],
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
