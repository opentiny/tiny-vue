<template>
  <tiny-select
    class="tiny-currency"
    v-model="state.selectedValue"
    :filterable="!shape"
    :size="size"
    :clearable="clearable"
    :label="label"
    :tip="tip"
    :shape="shape"
    :disabled="disabled"
    :placeholder="placeholder"
    @change="change"
    v-bind="a($attrs, ['^on[A-Z]'])"
    @clear="$emit('clear')"
    @visible-change="$emit('visible-change', $event)"
    :drop-style="dropStyle"
  >
    <tiny-option
      class="tiny-currency-option"
      v-for="item in state.options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :class="{ 'set-default': setDefault, 'is-active': item.value === state.defaultCurrency }"
    >
      <span style="display: flex">
        <span class="tiny-currency-option-label">{{ item.label }}</span>
        <span
          v-if="setDefault"
          class="tiny-currency-option-set"
          @click="toogleDefaultCurrency(item.value, item.value === state.defaultCurrency)"
        >
          <component :is="item.value === state.defaultCurrency ? 'icon-star-active' : 'icon-star-disable'" />
          <span>
            {{ item.value === state.defaultCurrency ? t('ui.currency.defaultCurrency') : t('ui.currency.setDefault') }}
          </span>
        </span>
      </span>
    </tiny-option>
  </tiny-select>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/currency/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'
import { IconStarActive, IconStarDisable } from '@opentiny/vue-icon'

export default defineComponent({
  inheritAttrs: false,
  components: {
    TinySelect: Select,
    TinyOption: Option,
    IconStarActive: IconStarActive(),
    IconStarDisable: IconStarDisable()
  },
  emits: ['update:modelValue', 'change', 'clear', 'visible-change'],
  props: [
    ...props,
    'modelValue',
    'placeholder',
    'fetchCurrency',
    'fields',
    'size',
    'clearable',
    'disabled',
    'popperClass',
    'popperAppendToBody',
    'currency',
    'setDefault',
    'fetchDefaultCurrency',
    'setDefaultCurrency',
    'label',
    'dropStyle',
    'shape',
    'tip'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
