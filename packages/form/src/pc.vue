<template>
  <form
    class="tiny-form"
    :class="[
      labelPosition ? 'tiny-form--label-' + labelPosition : '',
      { 'tiny-form--inline': inline },
      { 'label-align': labelAlign }
    ]"
  >
    <slot></slot>
  </form>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/form/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme/form/index.css'
import '@opentiny/vue-theme/form-item/index.css'

export default {
  props: [
    ...props,
    'validateOnRuleChange',
    'hideRequiredAsterisk',
    'model',
    'rules',
    'inlineMessage',
    'statusIcon',
    'labelPosition',
    'labelAlign',
    'showMessage',
    'size',
    'disabled',
    'labelWidth',
    'contentOffset',
    'labelSuffix',
    'inline',
    'responsiveLayout',
    'validateType',
    'manual',
    'appendToBody',
    'popperOptions'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
