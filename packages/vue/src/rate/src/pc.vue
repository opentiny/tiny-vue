<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <div class="tiny-rate" tabindex="0" @keydown="handelKey">
    <span
      v-for="item in max"
      :key="item"
      :style="{ width: space, cursor: disabled ? 'auto' : 'pointer' }"
      class="tiny-rate__star"
      @mousemove="setCurrentValue({ item, event: $event })"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
    >
      <component
        :is="state.classes[item - 1]"
        :style="getIconStyle(item)"
        :class="['tiny-svg-size', 'tiny-rate__icon', { hover: state.hoverIndex === item }, disabled ? 'disabled' : '', showDecimalIcon(item) ? 'ratehalf' : '']"
      >
      </component>
      <component v-if="showDecimalIcon(item)" :is="state.decimalIconClass" :style="state.decimalStyle" class="tiny-svg-size tiny-rate__decimal"></component>
      <div v-if="textOnBottom && !radio" :style="{ color: textColor }" class="tiny-rate__bottom-text">
        {{ texts[item - 1] }}
      </div>
      <div v-if="textOnBottom && radio" :style="getTextStyle()" class="tiny-rate__bottom-text">
        {{ texts[item - 1] }}
      </div>
    </span>
    <span v-if="(!textOnBottom && showText) || showScore" :style="{ color: textColor }" class="tiny-rate__text">{{ state.text }}</span>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/rate/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconStarActive, iconStarDisable, iconSmile, iconFrown, iconMeh } from '@opentiny/vue-icon'

export default defineComponent({
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
    'space',
    'size',
    'scoreTemplate'
  ],
  components: {
    IconStarActive: iconStarActive(),
    IconStarDisable: iconStarDisable(),
    IconSmile: iconSmile(),
    IconFrown: iconFrown(),
    IconMeh: iconMeh()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
