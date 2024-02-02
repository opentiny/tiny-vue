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
    <div :class="state.computedWrapperClass">
      <slot>
        <tiny-timeline-item
          v-for="(node, index) in state.nodes"
          :key="index"
          :node="node"
          :space="space"
          :line-width="lineWidth"
          :shape="shape"
          @click="handleClick({ index, node })"
        >
          <template #active-node-desc="slotScoped">
            <slot name="active-node-desc" :node="slotScoped.node"></slot>
          </template>
          <template #top="slotNode">
            <slot name="top" :slot-scope="slotNode.slotScope"></slot>
          </template>
          <template #bottom="slotNode">
            <slot name="bottom" :slot-scope="slotNode.slotScope"></slot>
          </template>
          <template #left="slotNode">
            <slot name="left" :slot-scope="slotNode.slotScope"></slot>
          </template>
          <template #right="slotNode">
            <slot name="right" :slot-scope="slotNode.slotScope"></slot>
          </template>
        </tiny-timeline-item>
      </slot>
    </div>
    <div class="tiny-steps__bottom-divider" v-if="textPosition === 'right' && showDivider"></div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/time-line/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/steps/index.less'
import TimelineItem from '@opentiny/vue-timeline-item'
import type { ITimelineApi } from '@opentiny/vue-renderless/types/time-line.type'

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
    'size',
    'textPosition',
    'showDivider',
    'onlyNumber',
    'lineWidth',
    'shape'
  ],
  components: {
    TinyTimelineItem: TimelineItem
  },
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api
    }) as unknown as ITimelineApi
  }
})
</script>
