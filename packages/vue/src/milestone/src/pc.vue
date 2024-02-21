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
  <div class="tiny-milestone">
    <tooltip ref="tooltip" type="normal" placement="top" :content="state.tipContent"></tooltip>
    <div
      v-for="(node, index) in data"
      :key="index"
      :style="{ width: space ? space + 'px' : 100 / data.length + '%' }"
      :class="['tiny-milestone__node', { 'is-solid': solid }, `node-status-${node[statusField]}`]"
    >
      <slot name="top" :slot-scope="node" top-slot-class="top-slot-class"></slot>
      <div
        :style="getMileIcon(node)"
        :class="[node[statusField] === completedField && !solid ? 'is-completed' : '', `status-${node[statusField]}`]"
        class="tiny-milestone__icon tiny-milestone__icon-custom"
        @click="handleClick({ index, node })"
      >
        <slot name="icon" :slot-scope="node">
          <icon-yes v-if="node[statusField] === completedField" class="tiny-svg-size" />
          <span v-else>{{ showNumber ? index + start : '' }}</span>
        </slot>
      </div>
      <div
        :class="[
          'tiny-milestone__line',
          {
            'tiny-milestone__line-end': index === data.length - 1,
            'tiny-milestone__line-completed-custom': node[statusField] === 'completed'
          }
        ]"
        :style="getLineColor(node[statusField])"
      >
        <div v-if="index < data.length - 1">
          <div
            v-for="(flag, idx) in getMileContent({ data, index })"
            :style="{
              left: `calc(${(100 / (data[flagBefore ? index : index + 1][flagField].length + 1)) * (idx + 1)}% - 29px)`
            }"
            :key="idx"
            :class="['tiny-milestone__flag', `flag-status-${flag[flagStatusField]}`]"
          >
            <div
              :style="{ background: milestonesStatus[flag[flagStatusField]] }"
              class="tiny-milestone__flag-content"
              @mouseleave="flagOperate({ over: false })"
              @mouseenter="
                flagOperate({
                  event: $event,
                  text: flag[flagContentField],
                  over: true
                })
              "
              @click="handleFlagClick({ idx, flag })"
            >
              <slot name="flag" :slot-scope="flag">
                <p v-if="flag[flagNameField]">{{ flag[flagNameField] }}</p>
                <p v-if="flag[flagContentField]" class="content">
                  {{ flag[flagContentField] }}
                </p>
              </slot>
            </div>
            <div :style="{ background: milestonesStatus[flag[flagStatusField]] }" class="tiny-milestone__flag-line">
              <div
                :style="{
                  'border-color': milestonesStatus[flag[flagStatusField]]
                }"
                class="tiny-milestone__dot"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="tiny-milestone__description">
        <slot name="bottom" :slot-scope="node">
          <div class="tiny-milestone__description-name">
            {{ node[nameField] }}
          </div>
          <div class="tiny-milestone__description-status">
            {{ node[timeField] }}
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/milestone/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Tooltip from '@opentiny/vue-tooltip'
import { iconYes } from '@opentiny/vue-icon'
import type { IMilestoneApi } from '@opentiny/vue-renderless/types/milestone.type'

export default defineComponent({
  components: { Tooltip, IconYes: iconYes() },
  props: [
    ...props,
    'solid',
    'start',
    'lineStyle',
    'timeField',
    'showNumber',
    'flagBefore',
    'completedField',
    'milestonesStatus',
    'statusField',
    'nameField',
    'flagField',
    'flagNameField',
    'flagContentField',
    'flagStatusField',
    'data',
    'space'
  ],
  emits: ['click', 'flagclick', 'flag-click'], // deprecated 原事件flagclick v3.5.0废弃，v3.17.0移除；移除原因：命名规范
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IMilestoneApi
  }
})
</script>
