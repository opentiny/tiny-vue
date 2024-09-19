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
  <span
    v-if="!state.isDisplayOnly"
    :class="[state.wrapClasses, state.showText ? 'tiny-switch__text' : '']"
    :tabindex="tabindex"
    @click="toggle"
    @keydown.space="toggle"
    @keydown.enter="toggle"
  >
    <span :class="state.innerClasses">
      <div v-if="!mini && state.showText && !loading">
        <slot v-if="state.currentValue === trueValue" name="open">ON</slot>
        <slot v-if="state.currentValue === falseValue" name="close">OFF</slot>
      </div>
    </span>
    <span class="tiny-switch__button">
      <icon-loading
        v-if="loading"
        :class="[
          state.currentValue === trueValue ? 'tiny-switch__on-loading' : 'tiny-switch__off-loading',
          mini ? 'tiny-switch__loading-size' : ''
        ]"
      />
      <slot v-if="state.currentValue === trueValue && !loading" name="active-icon"></slot>
      <slot v-if="state.currentValue === falseValue && !loading" name="inactive-icon"></slot>
    </span>
  </span>
  <span v-else>
    <slot v-if="state.currentValue === trueValue" name="open">{{ t('yes') }}</slot>
    <slot v-if="state.currentValue === falseValue" name="close">{{ t('no') }}</slot></span
  >
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/switch/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/switch/index.less'
import type { ISwitchApi } from '@opentiny/vue-renderless/types/switch.type'
import { IconLoadingShadow } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['change', 'update:modelValue'],
  props: [
    ...props,
    'modelValue',
    'trueValue',
    'falseValue',
    'disabled',
    'mini',
    'tabindex',
    'showText',
    'beforeChange',
    'displayOnly',
    'loading'
  ],
  components: { IconLoading: IconLoadingShadow() },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ISwitchApi
  }
})
</script>
