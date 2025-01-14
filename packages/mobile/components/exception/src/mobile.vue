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
  <div class="tiny-mobile-exception" :class="exceptionClass">
    <div class="tiny-mobile-exception__content">
      <img v-if="imageUrl" :src="imageUrl" class="tiny-mobile-exception__image" />
      <div v-else class="tiny-mobile-exception__content-view" :class="['tiny-mobile-exception__content-' + type]"></div>
      <slot name="content">
        <div class="tiny-mobile-exception__content-message">
          <div class="main-message">
            {{ message }}
          </div>
          <div v-if="subMessage" class="sub-message">
            {{ subMessage }}
          </div>
          <slot v-if="type === 'nodata'">
            <tiny-button @click="create" type="primary" size="medium" round>
              {{ buttonText ? buttonText : t('ui.exception.create') }}
            </tiny-button>
          </slot>
        </div>
      </slot>
    </div>
    <div class="tiny-mobile-exception__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { renderless, api } from './renderless/vue'
import { setup, $prefix, defineComponent } from '@mobile-root/common'
import Button from '../../button'
import { exceptionProps } from './exception'
import '@opentiny/vue-theme-mobile/exception/index.less'

export default defineComponent({
  name: $prefix + 'Exception',
  components: {
    TinyButton: Button
  },
  props: exceptionProps,
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
