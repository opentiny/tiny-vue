<template>
  <div class="tiny-slider-button-group">
    <component v-if="!pageTurn" :is="state.tag" class="tiny-slider-button-group-inline-flex" role="sliderButtonGroup">
      <div class="tiny-slider-button-group-box">
        <div
          class="tiny-slider-button-group-background"
          :class="[size === 'large' ? 'tiny-slider-button-group-size-large' : 'tiny-slider-button-group-size-normal']"
          :style="{
            'transition': 'left 0.25s,width 0.25s',
            'left': state.sliderSpace + 'px',
            'width': state.sliderWidth + 'px',
            'height': state.sliderHeight + 'px'
          }"
        ></div>
        <slot v-if="options && options.length !== 0">
          <slider-button v-for="(item, index) in options" :key="index" v-bind="item"></slider-button>
        </slot>
        <slot v-else></slot>
      </div>
    </component>
    <component v-else :is="state.tag" class="tiny-slider-button-group-flex" role="sliderButtonGroup">
      <SlideBar
        ref="slideBar"
        :data="options"
        :duration="duration"
        :no-arrow="noArrow"
        :flex="flex"
        :size="size"
        :slider-space="state.sliderSpace"
        :slider-width="state.sliderWidth"
        :slider-height="state.sliderHeight"
        :type="type"
        :sliderCount="state.sliderCount"
        :currentIndex="state.currentIndex"
        :delay="delay"
      >
        <template #left-bar></template>
        <template #right-bar></template>
        <template v-if="options && options.length !== 0" #content="{ slotScoped: { node, index } }">
          <slot v-if="type !== 'icon'" name="item" :slot-scope="node" :index="index">
            <slider-button :label="node[nameField]" :flex="flex" v-bind="node"></slider-button>
          </slot>
          <slot v-else :index="index">
            <slider-button :flex="flex" v-bind="node"><component :is="node[iconField]"></component></slider-button>
          </slot>
        </template>
      </SlideBar>
    </component>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/slider-button-group/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import SliderButton from '@opentiny/vue-slider-button'
import SlideBar from './slide-button-bar-pc.vue'
import '@opentiny/vue-theme/slider-button-group/index.less'

export default defineComponent({
  components: {
    SliderButton,
    SlideBar
  },
  emits: ['change'],
  props: [
    ...props,
    'options',
    'modelValue',
    'type',
    'size',
    'pageTurn',
    'duration',
    'nameField',
    'iconField',
    'noArrow',
    'flex',
    'delay',
    'disabled'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
