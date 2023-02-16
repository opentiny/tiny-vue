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
  <div :class="['tiny-mobile-timeline']">
    <div
      v-for="(node, index) in state.nodes"
      :key="index"
      :style="{
        height: index === state.nodes.length - 1 ? '' : space ? space + 'px' : '88px'
      }"
      :class="['tiny-mobile-timeline__item', node.status]"
    >
      <ul class="tiny-mobile-timeline__list">
        <slot name="left" :slot-scope="node">
          <li class="tiny-mobile-timeline__date-time">
            <span class="tiny-mobile-timeline__date">{{ getDate(node[timeField]).date }}</span>
            <span class="tiny-mobile-timeline__time">{{ getDate(node[timeField]).time }}</span>
          </li>
        </slot>
        <li
          :style="{
            height: index === state.nodes.length - 1 ? '' : space ? space + 'px' : '88px'
          }"
          class="tiny-mobile-timeline__line"
        >
          <div class="tiny-mobile-timeline__icon"></div>
        </li>
        <slot name="right" :slot-scope="node">
          <li class="tiny-mobile-timeline__content">
            <div>
              <span class="tiny-mobile-timeline__title">{{ node[nameField] }}</span>
              <span class="tiny-mobile-timeline__cycle">{{ node.cycle }}</span>
            </div>
            <div>
              <span class="tiny-mobile-timeline__user">{{ node.personInfo }}</span>
              <span class="tiny-mobile-timeline__tip">{{ node.overdue }}</span>
            </div>
          </li>
        </slot>
      </ul>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/time-line/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/time-line/index.css'

export default {
  props: [...props, 'nameField', 'timeField', 'data', 'space'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
