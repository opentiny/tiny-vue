<template>
  <div class="tiny-steps">
    <div v-if="!vertical" class="tiny-steps-normal">
      <div
        v-for="(node, index) in state.nodes"
        :key="index"
        :style="{
          width: space ? space + 'px' : 100 / state.nodes.length + '%'
        }"
        :class="['normal', getStatusCls(index)]"
      >
        <slot name="top" :slot-scope="node"></slot>
        <div class="icon" @click="handleClick({ index, node })">
          <span v-if="index >= state.current">{{ showNumber ? index + start : '' }}</span>
          <icon-error v-else-if="node[autoColorField] === 'error'" class="tiny-svg-size fixicon icon-error" />
          <icon-warning v-else-if="node[autoColorField] === 'warning'" class="tiny-svg-size fixicon icon-warning" />
          <icon-yes
            v-else-if="node[autoColorField] === 'success' || !node[autoColorField]"
            class="tiny-svg-size fixicon"
          />
          <component v-else :is="node[autoColorField]" class="fixicons"></component>
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
          <slot name="bottom" :slot-scope="node">
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
          <slot name="left" :slot-scope="node">
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
              <icon-error
                v-if="(reverse ? index > state.current : index < state.current) && node[autoColorField] === 'error'"
                class="tiny-svg-size fixicon icon-error"
              />
              <icon-warning
                v-else-if="
                  (reverse ? index > state.current : index < state.current) && node[autoColorField] === 'warning'
                "
                class="tiny-svg-size fixicon icon-warning"
              />
              <icon-yes
                v-else-if="
                  (reverse ? index > state.current : index < state.current) &&
                  (node[autoColorField] === 'success' || !node[autoColorField])
                "
                class="tiny-svg-size fixicon"
              />
              <component
                v-else-if="reverse ? index > state.current : index < state.current"
                :is="node[autoColorField]"
                class="fixicons"
              ></component>
              <span v-else>{{
                showNumber ? (reverse ? state.nodes.length - 1 - index + start : index + start) : ''
              }}</span>
            </div>
          </li>
          <slot name="right" :slot-scope="node">
            <li class="name" v-text="node[nameField]"></li>
          </slot>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// 从 renderless new包引入
import { renderless, api } from '@opentiny/vue-renderless/time-line-new/vue'

import { props, setup, defineComponent } from '@opentiny/vue-common'

// 实际同步在 theme-saas 文件夹中的step中
import '@opentiny/vue-theme/steps/index.less'

import { IconYes } from '@opentiny/vue-icon'
import { IconError } from '@opentiny/vue-icon'
import { IconWarning } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['click'],
  props: [
    ...props,
    'vertical',
    'showNumber',
    'nameField',
    'timeField',
    'start',
    'data',
    'space',
    'active',
    'reverse',
    'showStatus',
    'autoColorField'
  ],
  components: {
    IconYes: IconYes(),
    IconError: IconError(),
    IconWarning: IconWarning()
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
