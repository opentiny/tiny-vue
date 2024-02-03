<template>
  <div data-tag="tiny-steps-senior" class="tiny-steps-senior">
    <SlideBar ref="slideBar" :data="data" :duration="duration" :no-arrow="noArrow" :flex="flex">
      <!-- left button -->
      <template #left-button="slotScoped">
        <div :class="['more-button-con left', { 'bar-visible': slotScoped.show }]">
          <IconChevronLeft class="icon"></IconChevronLeft>
        </div>
      </template>
      <!-- right button -->
      <template #right-button="slotScoped">
        <div :class="['more-button-con right', { 'bar-visible': slotScoped.show }]">
          <IconChevronRight class="icon"></IconChevronRight>
        </div>
      </template>
      <!-- main block -->
      <template #block="{ slotScoped: { node, index } }">
        <div
          :class="[
            'tiny-steps-block',
            { 'not-flex': !flex },
            node[statusField] === 'error' ? 'fault' : node[statusField],
            { 'active': index === active }
          ]"
          @click="$emit('click', index, node, $event)"
        >
          <div class="tiny-steps-content">
            <slot name="item" :slot-scope="node" :index="index">
              <div
                :class="[
                  'tiny-steps-icon',
                  node[statusField] === 'error' ? 'fault' : node[statusField],
                  { 'active': index === active }
                ]"
              >
                <icon-finish v-if="node[statusField] === 'done'" class="icon icon-finish"></icon-finish>
                <icon-warn v-else-if="node[statusField] === 'error'" class="icon icon-warn"></icon-warn>
                <span v-else>
                  {{ index + 1 }}
                </span>
              </div>
              <div class="tiny-steps-prefixslot">
                <slot name="prefix" :slot-scope="{ node, index }">
                  <div class="prefix"></div>
                </slot>
              </div>
              <div
                :class="[
                  'tiny-steps-text',
                  node[statusField] === 'error' ? 'fault' : node[statusField],
                  { 'active': index === active }
                ]"
              >
                {{ node[nameField] }}
              </div>
            </slot>
          </div>
          <div :class="['left-arrow arrow', { 'hide': index === 0 }]"></div>
          <div :class="['right-arrow arrow', { 'hide': index === data.length - 1 }]"></div>
        </div>
      </template>
      <template #block-bottom="{ node, index }">
        <slot name="block-bottom" :node="node" :index="index"></slot>
      </template>
    </SlideBar>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/steps/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconFinish, iconWarn, iconChevronLeft, iconChevronRight } from '@opentiny/vue-icon'
import SlideBar from './slide-bar.vue'

export default defineComponent({
  emits: ['click'],
  components: {
    SlideBar,
    IconFinish: iconFinish(),
    IconWarn: iconWarn(),
    IconChevronLeft: iconChevronLeft(),
    IconChevronRight: iconChevronRight()
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
