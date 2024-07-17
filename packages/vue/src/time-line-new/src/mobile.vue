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

<script lang="ts">
// 从 renderless new包引入
import { renderless, api } from '@opentiny/vue-renderless/time-line-new/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/steps/index.less'

export default defineComponent({
  props: [...props, 'nameField', 'timeField', 'data', 'space'],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
