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
  <div :class="['tiny-steps', { 'is-horizontal': horizontal && !vertical, 'tiny-steps--mini': size === 'mini' }]">
    <div v-if="!vertical" :class="['tiny-steps-normal', { 'show-divider': showDivider }]">
      <template v-if="textPosition === 'right'">
        <ul class="tiny-steps--text-right" ref="stepsRight">
          <template v-for="(node, index) in state.nodes" :key="index">
            <li v-if="index" :class="['step-line', { 'line-done': index <= state.current }]"
              :style="{ flex: space ? `0 0 ${state.computedSpace}`: 'auto' }"></li>
            <li :class="['normal step-content', getStatusCls(index, node)]">
              <div class="icon step-icon" @click="handleClick({ index, node })">
                <span v-if="index < state.current || node.error" :custom-title="index + start" class="icon-wrap">
                  <icon-close v-if="node.error" class="tiny-svg-size fixicon" />
                  <icon-yes v-else class="tiny-svg-size fixicon" />
                </span>
                <span v-else>{{ showNumber ? index + start : '' }}</span>
              </div>

              <div class="node-description step-text">
                <slot name="text" :slot-scope="{ index, ...node }">
                  <div class="name" v-text="node[nameField]" @click="handleClick({ index, node })"></div>
                  <div class="status">
                    {{ showStatus ? getStatus(index) : '' }}
                  </div>
                </slot>

                <div class="tiny-steps__text-bottom">
                  <slot name="active-node-desc" :slot-scope="{ index, ...node }"></slot>
                </div>
              </div>
            </li>
          </template>
        </ul>
        <div class="tiny-steps__bottom-divider"></div>
      </template>
      <template v-else>
        <div v-for="(node, index) in state.nodes" :key="index" :style="{
          width: state.computedSpace || 100 / state.nodes.length + '%'
          }" :class="['normal tiny-step--text-bottom', getStatusCls(index, node)]">
          <slot name="top" :slot-scope="{ index, ...node }">
            <div class="date-time">
              <span class="time">{{ getDate(node[timeField]).date }} {{ getDate(node[timeField]).time }}</span>
            </div>
          </slot>
          <div class="tiny-steps__node">
            <div class="icon" @click="handleClick({ index, node })">
              <span v-if="index < state.current || node.error" :custom-title="index + start" class="icon-wrap">
                <icon-close v-if="node.error" class="tiny-svg-size fixicon" />
                <icon-yes v-else class="tiny-svg-size fixicon" />
              </span>
              <span v-else>{{ showNumber ? index + start : '' }}</span>

            </div>

            <!-- 引导线 -->
            <div :class="[
              'line',
              {
                'line-done': index < state.current,
                'line-end': index === state.nodes.length - 1
              }
            ]
              "></div>
          </div>
          <div class="node-description">
            <slot name="bottom" :slot-scope="{ index, ...node }">
              <div class="name" v-text="node[nameField]" @click="handleClick({ index, node })"></div>
              <div class="status">
                {{ showStatus ? getStatus(index) : '' }}
              </div>
            </slot>
          </div>
        </div>
      </template>
    </div>
    <div v-else :class="['tiny-steps-timeline', { reverse }]">
      <div v-for="(node, index) in state.nodes" :key="index" :style="{
              height: index === state.nodes.length - 1 ? '' : state.computedSpace || '88px'
        }" :class="['timeline', getStatusCls(index, node)]">
        <ul>
          <slot name="left" :slot-scope="{ index, ...node }">
            <li class="date-time">
              <span class="date">{{ getDate(node[timeField]).date }}</span>
              <span class="time">{{ getDate(node[timeField]).time }}</span>
            </li>
          </slot>
          <li :style="{
            height: index === state.nodes.length - 1 ? '' : state.computedSpace || '88px'
          }" class="line">
            <div class="icon" @click="handleClick({ index, node })">
              <icon-yes v-if="reverse ? index > state.current : index < state.current" class="tiny-svg-size" />
              <span v-else>{{ showNumber ? (reverse ? state.nodes.length - 1 - index + start : index + start) : ''
              }}</span>
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

<script lang="tsx">
import {
  renderless,
  api
} from '@opentiny/vue-renderless/time-line/vue'
import {
  props,
  setup,
  defineComponent
} from '@opentiny/vue-common'
import {
  iconYes,
  iconClose
} from '@opentiny/vue-icon'
import '@opentiny/vue-theme/steps/index.less'

export default defineComponent({
  emits: ['click'],
  props: [...props, 'vertical', 'horizontal', 'showNumber', 'nameField', 'timeField', 'start', 'data', 'space', 'active', 'reverse', 'showStatus', 'size', 'textPosition', 'showDivider'],
  components: {
    IconYes: iconYes(),
    IconClose: iconClose()
  },
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api
    })
  }
})
</script>
