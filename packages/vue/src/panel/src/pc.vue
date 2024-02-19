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
  <div class="tiny-panel">
    <div
      :class="[
        'tiny-panel__head',
        {
          'tiny-panel__head-toggle': isToggle,
          'tiny-panel__collapse': !state.isShow
        }
      ]"
      @click="toggle"
    >
      <slot name="collapse" :slot-scope="{ state, iconOpen, iconClose, isToggle }">
        <component
          :is="state.isShow ? iconOpen : iconClose"
          :class="['panel-icon', 'tiny-svg-size', { 'head-span': state.isShow }]"
        />
      </slot>
      <slot name="header">
        <h3 class="tiny-panel__title">{{ head }}</h3>
      </slot>
    </div>
    <transition :name="transition">
      <div class="tiny-panel__body" v-show="state.isShow">
        <slot></slot>
      </div>
    </transition>
    <slot name="footer">
      <div class="tiny-panel__footer">{{ foot }}</div>
    </slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/panel/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconChevronDown, iconChevronRight } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    IconChevronDown: iconChevronDown(),
    IconChevronRight: iconChevronRight()
  },
  emits: ['expand', 'collapse'],
  props: [...props, 'expand', 'foot', 'head', 'iconOpen', 'iconClose', 'isToggle', 'transition'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
