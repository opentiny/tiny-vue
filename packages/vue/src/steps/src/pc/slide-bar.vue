<template>
  <div data-tag="tiny-steps-slide-bar" class="tiny-steps-slide-bar">
    <div
      ref="leftButton"
      :class="['more-button left', { 'display-flex': slideBarState.canLeftScroll || slideBarState.canRightScroll }]"
      @click="leftSlideHandler"
    >
      <slot name="left-button" :show="slideBarState.canLeftScroll" :index="slideBarState.boundingIndex.left">
        <div class="content">
          <IconChevronLeft class="icon"></IconChevronLeft>
        </div>
      </slot>
    </div>
    <div ref="slideMain" class="slide-main">
      <div>
        <div
          :ref="'block' + index"
          v-for="(node, index) in data"
          :key="index"
          :style="{ width: flex ? 100 / data.length + '%' : null }"
        >
          <slot
            name="block"
            :slot-scoped="{
              node,
              index,
              show:
                index > slideBarState.boundingIndex.left &&
                (slideBarState.boundingIndex.right === -1 || index < slideBarState.boundingIndex.right)
            }"
            >{{ index }}</slot
          >
          <slot name="block-bottom" :node="node" :index="index"></slot>
        </div>
      </div>
    </div>
    <div
      ref="rightButton"
      :class="['more-button right', { 'display-flex': slideBarState.canLeftScroll || slideBarState.canRightScroll }]"
      @click="rightSlideHandler"
    >
      <slot name="right-button" :show="slideBarState.canRightScroll" :index="slideBarState.boundingIndex.right">
        <div class="content">
          <IconChevronRight class="icon"></IconChevronRight>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/steps/slide-bar'
import { defineComponent, setup, $props } from '@opentiny/vue-common'
import { iconChevronLeft, iconChevronRight } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['click'],
  components: {
    IconChevronLeft: iconChevronLeft(),
    IconChevronRight: iconChevronRight()
  },
  props: {
    ...$props,
    data: Array,
    duration: {
      type: Number,
      default: 300
    },
    delay: {
      type: Number,
      default: 5
    },
    noArrow: Boolean,
    flex: Boolean
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  }
})
</script>
