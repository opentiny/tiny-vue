<template>
  <form
    data-tag="tiny-from"
    class="w-full overflow-hidden p-4 sm:p-0"
    :class="{
      'overflow-x-visible': labelPosition === 'top' && !hideRequiredAsterisk,
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4': inline
    }"
    @submit.prevent
  >
    <slot></slot>
    <tiny-tooltip
      v-if="displayOnly"
      ref="tooltip"
      v-model="state.tooltipVisible"
      popper-class="absolute"
      :manual="true"
      effect="light"
      :content="state.displayedValue"
      placement="top"
    >
    </tiny-tooltip>
  </form>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/form/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Tooltip from '@opentiny/vue-tooltip'
import type { IFormApi } from '@opentiny/vue-renderless/types/form.type'

export default defineComponent({
  components: {
    TinyTooltip: Tooltip
  },
  provide() {
    return {
      TinyMode: 'mobile-first'
    }
  },
  props: [
    ...props,
    'validateOnRuleChange',
    'hideRequiredAsterisk',
    'model',
    'rules',
    'inlineMessage',
    'messageType',
    'statusIcon',
    'labelPosition',
    'showMessage',
    'size',
    'disabled',
    'labelWidth',
    'contentOffset',
    'labelSuffix',
    'inline',
    'responsiveLayout',
    'validateType',
    'validateIcon',
    'manual',
    'appendToBody',
    'popperOptions',
    'displayOnly'
  ],
  setup(props, context): any {
    return setup({ props, context, renderless, api }) as unknown as IFormApi
  }
})
</script>
