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
  <div class="tiny-mobile-tabbar-item" :class="{ 'is-active': state.renderActive }" :style="{ color: state.renderColor }" @click="onClick">
    <div class="tiny-mobile-tabbar-item__icon">
      <slot name="icon" :active="state.renderActive">
        <component :is="icon" :style="{ fill: state.renderColor }"></component>
      </slot>
      <div v-if="badge || dot" :class="['tiny-mobile-info', dot ? 'tiny-mobile-info--dot' : '']">
        {{ state.info }}
      </div>
    </div>
    <div class="tiny-mobile-tabbar-item__text" :style="{ color: state.renderColor }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/tabbar-item/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [...props, 'url', 'replace', 'to', 'dot', 'icon', 'name', 'badge'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
