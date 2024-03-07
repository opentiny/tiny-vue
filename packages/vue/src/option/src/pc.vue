<template>
  <li
    ref="option"
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
    @mousedown.stop=""
    data-tag="tiny-option"
    :data-index="state.index"
    class="tiny-option tiny-select-dropdown__item"
    v-show="visible && state.visible"
    :class="[
      {
        selected: state.itemSelected,
        'is-disabled': disabled || state.groupDisabled || state.limitReached,
        hover: state.hover && !state.limitReached,
        'is-required': required
      },
      highlightClass
    ]"
  >
    <span v-if="state.select.multiple" class="tiny-option__checkbox-wrap tiny-select-dropdown__item-checkbox">
      <!-- tiny 新增 tiny-checkbox -->
      <!-- <component :is="`icon-${state.selectCls}`" class="tiny-svg-size" /> -->
      <tiny-checkbox
        :model-value="state.itemSelected"
        :disabled="disabled || state.groupDisabled || state.limitReached"
      >
      </tiny-checkbox>
    </span>
    <component v-if="icon" :is="icon" class="tiny-option__icon"></component>
    <div class="tiny-option-wrapper" :class="state.select.multiple ? 'calc-width' : 'full-width'">
      <slot>
        <span class="tiny-option-label" :title="state.showTitle ? state.currentLabel : ''">{{
          state.currentLabel
        }}</span>
      </slot>
    </div>
  </li>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/option/vue'
import { $prefix, props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/option/index.less'
import { IconCheck, IconCheckedSur, IconFinish } from '@opentiny/vue-icon'

// tiny 新增
import Checkbox from '@opentiny/vue-checkbox'

export default defineComponent({
  name: $prefix + 'Option',
  componentName: 'Option',
  components: {
    IconCheck: IconCheck(),
    IconCheckedSur: IconCheckedSur(),
    IconFinish: IconFinish(),
    TinyCheckbox: Checkbox
  },
  props: [...props, 'value', 'label', 'created', 'disabled', 'events', 'visible', 'highlightClass', 'required', 'icon'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
