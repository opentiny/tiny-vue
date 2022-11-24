<template>
  <form
    class="tiny-mobile-form"
    :class="[labelPosition ? 'tiny-mobile-form--label-' + labelPosition : '', { 'tiny-mobile-form--inline': inline }, { 'label-align': labelAlign }]"
  >
    <slot></slot>
  </form>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/form/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/form/index.css'
import '@opentiny/vue-theme-mobile/form-item/index.css'

export default {
  props: [
    ...props,
    'validatePosition',
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
    'manual'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
