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
  <transition name="tiny-transition-alert-fade">
    <div v-if="state.show" :class="['tiny-alert', 'tiny-alert--' + type, 'tiny-alert--' + size, { 'is-center': center }]">
      <component v-if="showIcon" :is="state.getIcon" class="tiny-svg-size tiny-alert__icon" />
      <div class="tiny-alert__content">
        <div v-if="size === 'large'" class="tiny-alert__title">
          <slot name="title">
            {{ state.getTitle }}
          </slot>
        </div>
        <div :class="[
          'tiny-alert__description',
          {
            'is-hide': size === 'large' && !description && !slots.description
          }
        ]">
          <slot name="description">
            {{ description }}
          </slot>
        </div>
        <div v-if="size === 'large'" class="tiny-alert__opration">
          <slot></slot>
        </div>
      </div>
      <icon-close
        v-if="!closeText && closable"
        @click="handleClose"
        class="tiny-svg-size tiny-alert__icon tiny-alert__close"
      ></icon-close>
      <span v-else-if="closeText && closable" @click="handleClose" class="is-custom">{{ closeText }}</span>
    </div>
  </transition>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/alert/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconClose, iconSuccess, iconError, iconHelp, iconWarning } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/alert/index.less'

export default defineComponent({
  props: [
    ...props,
    'icon',
    'type',
    'size',
    'description',
    'title',
    'closable',
    'center',
    'showIcon',
    'closeText'
  ],
  components: {
    IconClose: iconClose(),
    IconSuccess: iconSuccess(),
    IconError: iconError(),
    IconHelp: iconHelp(),
    IconWarning: iconWarning()
  },
  emits: ['close'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
