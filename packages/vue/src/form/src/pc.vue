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
  <form
    class="tiny-form"
    :class="[
      labelPosition ? 'tiny-form--label-' + labelPosition : '',
      { 'tiny-form--inline': inline },
      { 'label-align': labelAlign },
      { 'has-required': state.hasRequired },
      { 'asterisk-form': labelPosition === 'top' && !state.hideRequiredAsterisk },
      { 'is-display-only': state.isDisplayOnly }
    ]"
    @submit.prevent
  >
    <slot></slot>
    <tiny-tooltip
      v-if="overflowTitle"
      ref="tooltip"
      v-model="state.tooltipVisible"
      :manual="true"
      effect="light"
      :content="state.displayedValue"
      placement="top"
    >
    </tiny-tooltip>
  </form>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/form/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import type { IFormApi } from '@opentiny/vue-renderless/types/form.type'
import Tooltip from '@opentiny/vue-tooltip'
import '@opentiny/vue-theme/form/index.less'
import '@opentiny/vue-theme/form-item/index.less'

export default defineComponent({
  components: {
    TinyTooltip: Tooltip
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
    'validateIcon',
    'manual',
    'appendToBody',
    'popperOptions',
    'displayOnly',
    'showAutoWidth',
    'showEmptyValue',
    'validateTag',
    'overflowTitle'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IFormApi
  }
})
</script>
