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
  <transition name="tiny-mobile-alert-fade">
    <div
      v-if="state.show"
      :class="state.alertClass"
      :style="state.alertStyle"
    >
      <component v-if="showIcon" :is="state.getIcon" class="tiny-mobile-alert__icon" />
      <div :class="['tiny-mobile-alert__content', { 'is-hideicon': !showIcon }]">
        <slot>{{ description }}</slot>
      </div>
      <icon-close
        v-if="!closeText && closable"
        @click="handleClose"
        class="tiny-mobile-alert__icon tiny-mobile-alert__close"
      ></icon-close>
      <span v-else-if="closeText && closable" @click="handleClose" class="is-custom">{{ closeText }}</span>
    </div>
  </transition>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/alert/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconClose, iconSuccess, iconError, iconHelp, iconWarning } from '@opentiny/vue-icon'
import type { IAlertApi } from '@opentiny/vue-renderless/types/alert.type'
import '@opentiny/vue-theme-mobile/alert/index.less'

export default defineComponent({
  props: [...props, 'icon', 'type', 'size', 'description', 'closable', 'showIcon', 'closeText', 'duration', 'offset', 'autoHide', 'target', 'center'],
  components: {
    IconClose: iconClose(),
    IconSuccess: iconSuccess(),
    IconError: iconError(),
    IconHelp: iconHelp(),
    IconWarning: iconWarning()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IAlertApi
  }
})
</script>
