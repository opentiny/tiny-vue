<template>
  <div
    v-show="state.ready"
    :class="{
      'is-active': state.active,
      'tiny-carousel__item--card': state.carouselParent.type === 'card',
      'is-in-stage': state.inStage,
      'is-hover': state.hover,
      'is-animating': state.animating,
      'tiny-oblique': state.isOblique,
      'tiny-oblique':
        state.carouselParent.type === 'card' && state.carouselParent.setUserCls
    }"
    :style="state.getTransform"
    class="tiny-carousel__item"
    @click="handleItemClick"
  >
    <div
      v-if="state.carouselParent.type === 'card'"
      v-show="!state.active"
      class="tiny-carousel__mask"
    ></div>
    <slot></slot>
    <div v-if="state.hasTitle" class="item-title">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/carousel-item/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [...props, 'name', 'title', 'label'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
