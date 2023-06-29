<template>
  <div :class="['tiny-filter-box', disabled && 'disabled']" @click="handeClick">
    <p :class="['title', dropDownVisible && 'active']">
      <label>{{ label }}</label>
      <tiny-tooltip v-if="tip" effect="light" :content="tip" placement="top">
        <icon-help-circle></icon-help-circle>
      </tiny-tooltip>
    </p>
    <p class="value">
      {{ value }}
    </p>
    <icon-error v-if="value && showClose && !disabled" class="filter-icon-close" @click.stop="handleClear"></icon-error>
    <icon-arrow-bottom v-else :class="['filter-box-icon', dropDownVisible && 'is-reverse']"></icon-arrow-bottom>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/filter-box/vue'
import { $props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { IconArrowBottom, IconError, IconHelpCircle } from '@opentiny/vue-icon'
import TinyTooltip from '@opentiny/vue-tooltip'

export default defineComponent({
  name: $prefix + 'FilterBox',
  emits: ['click', 'handle-clear'],
  components: {
    IconArrowBottom: IconArrowBottom(),
    IconError: IconError(),
    IconHelpCircle: IconHelpCircle(),
    TinyTooltip
  },
  props: {
    ...$props,
    label: String,
    value: [String, Number],
    tip: String,
    showClose: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dropDownVisible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
