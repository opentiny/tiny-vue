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
  <transition name="dialog-fade">
    <div v-show="visible" class="tiny-mobile-dialog-box__wrapper" @click.self="handleWrapperClick">
      <div ref="dialog" :class="{ 'is-hide-header': !showHeader }" class="tiny-mobile-dialog-box" :key="state.key">
        <div v-if="showHeader" class="tiny-mobile-dialog-box__header">
          <slot name="title">
            <span class="tiny-mobile-dialog-box__title">{{ title }}</span>
          </slot>
        </div>
        <div class="tiny-mobile-dialog-box__body">
          <slot></slot>
        </div>
        <div class="tiny-mobile-dialog-box__footer">
          <slot name="footer">
            <button type="button" @click="handleCancel" class="tiny-mobile-dialog-box__button cancel-button">
              {{ t('ui.dialogBox.cancel') }}
            </button>
            <button type="button" @click="handleConfirm" class="tiny-mobile-dialog-box__button confirm-button">
              {{ t('ui.dialogBox.confirm') }}
            </button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/dialog-box/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/dialog-box/index.css'

export default {
  emits: ['update:visible', 'change', 'before-close', 'open', 'close', 'opened', 'confirm', 'cancel', 'closed'],
  props: [...props, 'visible', 'title', 'modal', 'closeOnClickModal', 'modalAppendToBody', 'appendToBody', 'width', 'top', 'showHeader', 'destroyOnClose'],
  model: {
    prop: 'visible',
    event: 'update:visible'
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
