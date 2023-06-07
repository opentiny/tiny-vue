<template>
  <div data-tag="tiny-steps-advanced" class="w-full flex text-color-text text-xs leading-4">
    <SlideBar ref="slideBar" :data="data" :duration="duration" :no-arrow="noArrow" :flex="flex">
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
              'h-8 flex rounded-sm relative cursor-pointer group',
              { 'min-w-[7.5rem] max-w-[13.75rem]': !flex },
              { 'text-white': index === active },
              { 'text-color-error': node[statusField] === 'error' && index !== active },
              { 'text-color-text-disabled': node[statusField] === 'disabled' && index !== active },
              { 'bg-color-brand': index === active },
              { 'bg-color-bg-2': node[statusField] !== 'error' && index !== active },
              { 'bg-color-error': node[statusField] === 'error' && index === active },
              { 'hover:bg-color-error-hover hover:text-white': node[statusField] === 'error' },
              { 'bg-color-info-secondary-subtle': node[statusField] === 'done' && index !== active },
              { 'bg-color-error-subtler': node[statusField] === 'error' && index !== active }
            )
          "
          @click="$emit('click', index, node, $event)"
        >
          <div
            data-tag="tiny-steps-content"
            :class="['flex-auto flex max-w-full items-center justify-center px-4 overflow-hidden h-full']"
          >
            <slot name="item" :slot-scope="node" :index="index">
              <div
                data-tag="tiny-steps-icon"
                v-if="['done', 'error'].indexOf(node[statusField]) !== -1"
                :class="
                  m(
                    'w-3.5 h-3.5 flex flex-none items-center justify-center rounded-full mr-2',
                    index === active ? 'bg-white text-color-brand' : 'bg-color-brand text-white',
                    {
                      'text-white bg-color-error group-hover:bg-white group-hover:text-color-error':
                        node[statusField] === 'error'
                    },
                    { 'text-color-error bg-white': node[statusField] === 'error' && index === active }
                  )
                "
              >
                <IconYes v-if="node[statusField] === 'done'" :class="['w-2.5 h-2.5 fill-current']"></IconYes>
                <template v-else-if="node[statusField] === 'error'"> ! </template>
              </div>
              <div data-tag="tiny-steps-prefixslot" class="flex-none">
                <slot name="prefix" :slot-scope="{ node, index }">
                  <div class="-mr-2"></div>
                </slot>
              </div>
              <div data-tag="tiny-steps-text" class="flex-auto max-w-full truncate">
                {{ node[nameField] }}
              </div>
            </slot>
          </div>
          <div
            :class="[
              'h-full absolute left-0 top-0 border-t-[1rem] border-b-[1rem] border-l-[0.375rem]  border-t-transparent border-b-transparent border-white',
              { 'hidden': index === 0 }
            ]"
          ></div>
          <div
            :class="[
              'h-full absolute right-0 top-0 border-t-[1rem] border-b-[1rem] border-l-[0.375rem]  border-l-transparent border-white',
              { 'hidden': index === data.length - 1 }
            ]"
          ></div>
        </div>
      </template>
      <template #block-bottom="{ node, index, show }">
        <slot v-if="show" name="block-bottom" :node="node" :index="index"></slot>
      </template>
    </SlideBar>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/steps/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconYes, IconChevronLeft, IconChevronRight } from '@opentiny/vue-icon'
import SlideBar from './slide-bar.vue'

const mode = { tiny_mode: 'mobile-first' }

export default defineComponent({
  emits: ['click'],
  components: {
    SlideBar,
    IconYes: IconYes(mode),
    IconChevronLeft: IconChevronLeft(mode),
    IconChevronRight: IconChevronRight(mode)
  },
  props: [
    ...props,
    'vertical',
    'nameField',
    'statusField',
    'data',
    'active',
    'visibleNum',
    'duration',
    'noArrow',
    'flex'
  ],
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  }
})
</script>
