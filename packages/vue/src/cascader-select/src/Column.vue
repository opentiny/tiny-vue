<template>
  <div
    data-tag="tiny-cascader-picker__list"
    :class="gcls('col-list')"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div
      ref="roller"
      data-tag="tiny-cascader-picker-roller"
      :class="gcls('col-roller')"
      :style="threeDimensional ? state.touchRollerStyle : state.touchTileStyle"
      @transitionend="stopMomentum"
    >
      <div v-for="(item, index) in column" :key="item[fieldNames.value] || index">
        <!-- 3D 效果 -->
        <div
          v-if="item && item[fieldNames.text] && threeDimensional"
          data-tag="tiny-cascader-picker-roller-item"
          :class="
            m(
              gcls('col-roller-item'),
              { 'invisible opacity-0': isHidden(index + 1) },
              { 'text-color-brand': item === column[state.currIndex - 1] },
              { 'text-color-icon-disabled': item === column[state.currIndex - 1] && disabled }
            )
          "
          :style="setRollerStyle(index + 1)"
        >
          {{ item[fieldNames.text] }}
        </div>
        <!-- 平铺 -->
        <div
          v-if="item && item[fieldNames.text] && !threeDimensional"
          data-tag="tiny-cascader-picker-roller-item-tile"
          :class="
            m(
              gcls('col-item-tile'),
              textColor.default || 'text-color-text-primary',
              { [textColor.third || 'text-color-icon-placeholder']: OptionStyle(item, column, 2) },
              { [textColor.second || 'text-color-icon-secondary']: OptionStyle(item, column, 1) },
              { [textColor.first || 'text-color-icon-focus']: OptionStyle(item, column, 0) },
              { [textColor.disabled || 'text-color-icon-disabled']: OptionStyle(item, column, 0) && disabled }
            )
          "
          :style="{ height: pxCheck(optionHeight), lineHeight: pxCheck(optionHeight) }"
        >
          {{ item[fieldNames.text] }}
        </div>
      </div>
    </div>
    <div data-tag="tiny-cascader-picker-roller-mask" :class="gcls('col-roller-mask')" :style="state.maskStyles"></div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/cascader-select/column'
import { $prefix, $props, setup, defineComponent } from '@opentiny/vue-common'
import { classes } from './token'

export default defineComponent({
  name: $prefix + 'CascaderSelectColumn',
  props: {
    ...$props,
    // 当前选中项
    value: [String, Number],
    defaultValue: [String, Number],
    columnsType: String,
    column: {
      type: Array,
      default: () => []
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: [Number, String],
      default: 1000
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 7
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    },
    fieldNames: {
      type: Object,
      default: () => ({})
    },
    disabled: Boolean,
    visible: Boolean,
    textColor: { type: Object, default: () => ({}) }
  },
  emits: ['click', 'change'],
  setup(props, context) {
    return setup({ props, context, renderless, api, classes, mono: true })
  }
})
</script>
