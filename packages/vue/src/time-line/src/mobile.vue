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
  <div :class="['tiny-mobile-steps', { 'is-horizontal': horizontal && !vertical }]">
    <div v-if="!vertical" class="tiny-mobile-steps-normal">
      <div
        v-for="(node, index) in state.nodes"
        :key="index"
        :style="{
          width: horizontal ? 'auto' : space ? space + 'px' : 100 / state.nodes.length + '%'
        }"
        :class="['normal', getStatusCls(index)]"
      >
        <slot name="top" :slot-scope="node">
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
          <slot name="bottom" :item="node">
            <div class="name" v-text="node[nameField]"></div>
            <div class="status">
              {{ showStatus ? getStatus(index) : '' }}
            </div>
          </slot>
        </div>
      </div>
    </div>
    <div v-else :class="['tiny-mobile-steps-timeline', { reverse }]">
      <div v-for="(node, index) in state.nodes" :key="index" class="timeline">
        <ul>
          <li>
            <div class="header">
              <div v-if="node.time" class="date-time-vertical">
                <span class="time">{{ getDate(node[timeField]).date }} {{ getDate(node[timeField]).time }}</span>
              </div>
              <span :class="['round', `round-${node.state}`]"></span>
              <slot name="header" :item="node">
                <div class="name">
                  {{ node.name }}
                </div>
              </slot>
              <div v-if="node.showFoldBtn" class="arrow-btn" @click="toggleFold(node)">
                <div :class="['arrow-btn-arrow', node.fold ? 'arrow-btn-arrow-fold' : '']"></div>
              </div>
            </div>
            <div v-if="!node.fold" :class="['content', node.time ? 'content-left-margin' : null]">
              <slot name="content" :item="node"></slot>
            </div>
            <div v-if="state.nodes.length > 1" :class="['line', node.time ? 'line-left-margin' : null]"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/time-line/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconYes } from '@opentiny/vue-icon'
import '@opentiny/vue-theme-mobile/steps/index.less'

export default defineComponent({
  emits: ['click'],
  props: [
    ...props,
    'vertical',
    'horizontal',
    'showNumber',
    'nameField',
    'timeField',
    'start',
    'data',
    'space',
    'active',
    'reverse',
    'showStatus',
    'showFoldBtn'
  ],
  components: {
    IconYes: iconYes()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
