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
  <div class="tiny-mobile-user-head">
    <div
      :style="{ ...state.style, width: `${state.size}px`, height: `${state.size}px` }"
      :class="['tiny-mobile-user-head__portrait', { min, round }, type]"
    >
      <slot>
        <component v-if="type === 'icon'" :is="state.internalValue" class="tiny-mobile-svg-size" />
        <span v-if="type === 'label'" :style="{ fontSize: `${state.size * 0.3}px` }" :title="state.internalValue">{{
          state.label
        }}</span>
      </slot>
    </div>
    <div
      v-if="messageTotal"
      :style="{ left: `${state.size * 0.9}px` }"
      :class="[
        'tiny-mobile-user-head__message',
        { min, round, basic: messageType === 'basic' || messageType === 'icon' }
      ]"
    >
      {{ state.message }}
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/user-head/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconUser } from '@opentiny/vue-icon'
import '@opentiny/vue-theme-mobile/user-head/index.less'

export default defineComponent({
  components: {
    IconUser: iconUser()
  },
  props: [
    ...props,
    'min',
    'round',
    'color',
    'backgroundColor',
    'type',
    'modelValue',
    'messageTotal',
    'messageType',
    'messageUpperLimit',
    'size'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
