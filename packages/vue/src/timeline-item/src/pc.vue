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
  <div class="tiny-timeline-item" :class="state.computedItemCls" :style="state.computedItemStyle">
    <template v-if="!rootProps.vertical">
      <template v-if="rootProps.textPosition === 'right'">
        <div :class="state.iconClass" @click="handleClick(node)">
          <span
            v-if="(node.index >= state.current || rootProps.onlyNumber) && !node[autoColorField] && !node.error"
            class="number"
            >{{ rootProps.showNumber ? node.index + rootProps.start : '' }}
          </span>
          <template v-else>
            <icon-close
              v-if="node[autoColorField] === 'error' || node.error"
              class="tiny-svg-size fixicon icon-error"
            ></icon-close>
            <icon-warn v-else-if="node[autoColorField] === 'warning'" class="tiny-svg-size fixicon icon-warning" />
            <icon-yes
              v-else-if="node[autoColorField] === 'success' || (node.index < state.current && !node[autoColorField])"
              class="tiny-svg-size fixicon icon-yes"
            />
            <component v-else :is="node[autoColorField]" class="fixicons"></component>
          </template>
        </div>

        <div class="node-description">
          <slot name="text" :slot-scope="node">
            <div class="name" v-text="node[rootProps.nameField]" @click="handleClick(node)"></div>
          </slot>
          <div
            :class="[
              'line',
              {
                'line-done': node.index < state.current,
                'line-end': node.index === state.nodesLength - 1
              }
            ]"
            :style="{ width: state.computedLineWidth }"
          ></div>

          <div class="tiny-timeline-item__description" ref="description">
            <slot name="description" :slot-scope="node">
              {{ node.description }}
            </slot>
            <div v-show="node.index === rootProps.active">
              <slot name="active-node-desc" :slot-scope="node"></slot>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <slot name="top" :slot-scope="node">
          <div class="date-time">
            <span class="time"
              >{{ getDate(node[rootProps.timeField]).date }} {{ getDate(node[rootProps.timeField]).time }}</span
            >
          </div>
        </slot>
        <div class="tiny-steps__node">
          <div :class="state.iconClass" @click="handleClick(node)">
            <span
              v-if="(node.index >= state.current || rootProps.onlyNumber) && !node[autoColorField] && !node.error"
              class="number"
              >{{ rootProps.showNumber ? node.index + rootProps.start : '' }}
            </span>
            <template v-else>
              <icon-close
                v-if="node[autoColorField] === 'error' || node.error"
                class="tiny-svg-size fixicon icon-error"
              ></icon-close>
              <icon-warn v-else-if="node[autoColorField] === 'warning'" class="tiny-svg-size fixicon icon-warning" />
              <icon-yes
                v-else-if="node[autoColorField] === 'success' || (node.index < state.current && !node[autoColorField])"
                class="tiny-svg-size fixicon icon-yes"
              />
              <component v-else :is="node[autoColorField]" class="fixicons"></component>
            </template>
          </div>

          <!-- 引导线 -->
          <div
            :class="[
              'line',
              {
                'line-done': node.index < state.current,
                'line-end': node.index === state.nodesLength - 1
              }
            ]"
          ></div>
        </div>
        <div class="node-description">
          <slot name="bottom" :slot-scope="node">
            <div class="name" v-text="node[rootProps.nameField]" @click="handleClick(node)"></div>
            <div class="status" v-if="rootProps.showStatus">
              {{ getStatus(node.index) }}
            </div>
          </slot>
        </div>
      </template>
    </template>
    <template v-else>
      <slot name="left" :slot-scope="node">
        <div v-if="shape === 'circle'" class="date-time">
          <span class="date">{{ getDate(node[rootProps.timeField]).date }}</span>
          <span class="time">{{ getDate(node[rootProps.timeField]).time }}</span>
        </div>
      </slot>
      <div class="tiny-timeline-item__pillar">
        <div v-if="shape === 'circle'" :class="state.iconClass" @click="handleClick(node)">
          <template
            v-if="(state.isReverse ? node.index > state.current : node.index < state.current) || node[autoColorField]"
          >
            <icon-close
              v-if="node[autoColorField] === 'error' || node.error"
              class="tiny-svg-size fixicon icon-error"
            ></icon-close>
            <icon-warn v-else-if="node[autoColorField] === 'warning'" class="tiny-svg-size fixicon icon-warning" />
            <icon-yes
              v-else-if="node[autoColorField] === 'success' || !node[autoColorField]"
              class="tiny-svg-size fixicon icon-yes"
            />
            <component v-else :is="node[autoColorField]" class="fixicons"></component>
          </template>
          <span v-else class="number">{{
            rootProps.showNumber
              ? state.isReverse
                ? state.nodesLength - 1 - node.index + rootProps.start
                : node.index + rootProps.start
              : ''
          }}</span>
        </div>
        <div v-else class="dot-container" @click="handleClick(node)">
          <component v-if="node[autoColorField]" :is="node[autoColorField]" class="fixicons"></component>
          <span v-else class="dot"></span>
        </div>
        <div class="line"></div>
      </div>
      <slot name="right" :slot-scope="node">
        <div class="tiny-timeline-item__content" @click="handleClick(node)">
          <div class="name">{{ node[rootProps.nameField] }}</div>
          <slot name="description" :slot-scope="node">
            {{ node.description }}
          </slot>
          <div v-if="shape === 'dot'" class="time">{{ node[rootProps.timeField] }}</div>
        </div>
      </slot>
    </template>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/timeline-item/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconWarn, iconClose, iconYes } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/steps/index.less'
import type { ITimelineItemApi } from '@opentiny/vue-renderless/types/timeline-item.type'

export default defineComponent({
  emits: ['click'],
  props: [...props, 'node', 'space', 'lineWidth', 'shape', 'autoColorField'],
  components: {
    IconWarn: iconWarn(),
    IconClose: iconClose(),
    IconYes: iconYes()
  },
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api
    }) as unknown as ITimelineItemApi
  }
})
</script>
