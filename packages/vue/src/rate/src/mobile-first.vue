<template>
  <div data-tag="tiny-rate" :class="m(gcls('rate'))" tabindex="0" @keydown="handelKey">
    <span
      data-tag="tiny-rate-content"
      v-for="item in max"
      :key="item"
      :class="
        m(
          gcls({ 'allowhalf-item': allowHalf }),
          gcls('rate-item'),
          gcls(disabled ? 'cursor-disabled' : 'cursor-undisabled'),
          gcls({ 'rate-item-textOnBottom': textOnBottom }),
          gcls({ 'type-big': type === 'large' })
        )
      "
      @mousemove="setCurrentValue({ item, event: $event })"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
    >
      <component
        :is="state.classes[item - 1]"
        :style="getIconStyle(item)"
        :class="m(gcls({ 'svg-hover': state.hoverIndex === item }))"
      >
      </component>

      <component
        v-if="showDecimalIcon(item)"
        :is="state.decimalIconClass"
        :style="state.decimalStyle"
        :class="m(gcls({ 'allowhalf-active': allowHalf }))"
      ></component>
      <div
        data-tag="tiny-rate-text-bottom"
        v-if="textOnBottom && !radio"
        :style="{ color: textColor }"
        :class="m(gcls('text-Bottom'), gcls({ 'big-text-bottom': type === 'large' }))"
      >
        {{ texts[item - 1] }}
      </div>
      <div
        data-tag="tiny-rate-radio-bottom"
        v-if="textOnBottom && radio"
        :style="getTextStyle()"
        :class="m(gcls('text-Bottom'), gcls({ 'big-text-bottom': type === 'large' }))"
      >
        {{ texts[item - 1] }}
      </div>
    </span>
    <span
      data-tag="tiny-rate-score"
      v-if="(!textOnBottom && showText) || showScore"
      :style="{ color: textColor }"
      :class="m(gcls('text-left'), gcls({ 'big-text-left': type === 'large' }))"
      >{{ state.text }}</span
    >
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/rate/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconStarActive, IconStarDisable, IconSmile, IconFrown, IconMeh } from '@opentiny/vue-icon'
import { classes } from './token'

export default defineComponent({
  emits: ['update:modelValue', 'change'],
  props: [
    ...props,
    'modelValue',
    'radio',
    'lowThreshold',
    'highThreshold',
    'max',
    'colors',
    'voidColor',
    'disabledVoidColor',
    'iconClasses',
    'voidIconClass',
    'disabledVoidIconClass',
    'disabled',
    'allowHalf',
    'showText',
    'showScore',
    'textColor',
    'texts',
    'textOnBottom',
    'type',
    'scoreTemplate'
  ],
  components: {
    IconStarActive: IconStarActive(),
    IconStarDisable: IconStarDisable(),
    IconSmile: IconSmile(),
    IconFrown: IconFrown(),
    IconMeh: IconMeh()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
