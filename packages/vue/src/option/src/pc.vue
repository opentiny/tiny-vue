<template>
  <li
    ref="option"
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
    <span v-if="state.selectMultiple" class="tiny-option__checkbox-wrap tiny-select-dropdown__item-checkbox">
      <component :is="`icon-${state.selectCls}`" class="tiny-svg-size" />
    </span>
    <component v-if="icon" :is="icon" class="tiny-option__icon"></component>
    <div class="tiny-option-wrapper" :class="state.selectMultiple ? 'calc-width' : 'full-width'">
      <slot>
        <span class="tiny-option-label" v-auto-tip="{ placement: 'right' }">
          {{ state.currentLabel }}
        </span>
      </slot>
    </div>
  </li>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/option/vue'
import { $prefix, props, setup, defineComponent } from '@opentiny/vue-common'
import { AutoTip } from '@opentiny/vue-directive'
import '@opentiny/vue-theme/option/index.less'
import { IconCheck, IconCheckedSur, IconFinish } from '@opentiny/vue-icon'

export default defineComponent({
  name: $prefix + 'Option',
  componentName: 'Option',
  directives: { AutoTip },
  components: {
    IconCheck: IconCheck(),
    IconCheckedSur: IconCheckedSur(),
    IconFinish: IconFinish()
  },
  props: [...props, 'value', 'label', 'created', 'disabled', 'events', 'visible', 'highlightClass', 'required', 'icon'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
