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
  <div :class="['tiny-steps', { 'is-horizontal': horizontal && !vertical }]">
    <div v-if="!vertical" class="tiny-steps-normal">
      <div
        v-for="(node, index) in state.nodes"
        :key="index"
        :style="{
          width: horizontal ? 'auto' : space ? space + 'px' : 100 / state.nodes.length + '%'
        }"
        :class="['normal', getStatusCls(index)]"
      >
        <slot name="top" :slot-scope="{ index, ...node }">
          <div class="date-time">
            <span class="time">{{ getDate(node[timeField]).date }} {{ getDate(node[timeField]).time }}</span>
          </div>
        </slot>
        <div class="icon" @click="handleClick({ index, node })">
          <span v-if="index >= state.current">{{ showNumber ? index + start : '' }}</span>
          <span v-else :custom-title="index + start" class="icon-wrap">
            <icon-yes class="tiny-svg-size fixicon" />
          </span>
        </div>
        <div
          :class="[
            'line',
            {
              'line-done': index < state.current,
              'line-end': index === state.nodes.length - 1
            }
          ]"
        ></div>
        <div class="node-description">
          <slot name="bottom" :slot-scope="{ index, ...node }">
            <div class="name" v-text="node[nameField]"></div>
            <div class="status">
              {{ showStatus ? getStatus(index) : '' }}
            </div>
          </slot>
        </div>
      </div>
    </div>
    <div v-else :class="['tiny-steps-timeline', { reverse }]">
      <div
        v-for="(node, index) in state.nodes"
        :key="index"
        :style="{
          height: index === state.nodes.length - 1 ? '' : space ? space + 'px' : '88px'
        }"
        :class="['timeline', getStatusCls(index)]"
      >
        <ul>
          <slot name="left" :slot-scope="{ index, ...node }">
            <li class="date-time">
              <span class="date">{{ getDate(node[timeField]).date }}</span>
              <span class="time">{{ getDate(node[timeField]).time }}</span>
            </li>
          </slot>
          <li
            :style="{
              height: index === state.nodes.length - 1 ? '' : space ? space + 'px' : '88px'
            }"
            class="line"
          >
            <div class="icon" @click="handleClick({ index, node })">
              <icon-yes v-if="reverse ? index > state.current : index < state.current" class="tiny-svg-size" />
              <span v-else>{{ showNumber ? (reverse ? state.nodes.length - 1 - index + start : index + start) : '' }}</span>
            </div>
          </li>
          <slot name="right" :slot-scope="{ index, ...node }">
            <li class="name" v-text="node[nameField]"></li>
          </slot>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/time-line/vue'
import { props, setup } from '@opentiny/vue-common'
import { iconYes } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/steps/index.css'

export default {
  emits: ['click'],
  props: [...props, 'vertical', 'horizontal', 'showNumber', 'nameField', 'timeField', 'start', 'data', 'space', 'active', 'reverse', 'showStatus'],
  components: {
    IconYes: iconYes()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
