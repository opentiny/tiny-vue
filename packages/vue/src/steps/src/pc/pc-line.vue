<template>
  <div data-tag="tiny-steps" :class="['tiny-steps tiny-steps-line', size, { vertical }]">
    <!-- hidden left step section -->
    <div
      v-show="state.startIndex !== 0"
      :class="['tiny-steps-left', { 'vertical': vertical }]"
      @click="state.startIndex--"
    >
      <div class="tiny-steps-main">
        <div :class="['line left-line', { 'not-vertical': !vertical }]"></div>
        <div class="tiny-steps-icon">
          <span class="item-number">
            {{ size === 'mini' ? '' : state.startIndex }}
          </span>
          <template v-if="state.startIndex - 1 > 0">
            <div
              v-for="(item, index) in state.startIndex - 1"
              class="item-circle"
              :style="{ right: (state.startIndex - 1 - index) * 4 + 'px' }"
              :key="index"
            ></div
          ></template>
        </div>
        <div
          :class="[
            'line right-line',
            { 'not-vertical': !vertical },
            { 'line-brand': data[state.startIndex - 1] && data[state.startIndex - 1].status === 'done' }
          ]"
        ></div>
      </div>
    </div>
    <!-- visible step section -->
    <div
      v-for="(node, index) in data"
      v-show="isVisibleHandler(index) === 'visible'"
      :key="index"
      :class="[
        'tiny-steps-block',
        size,
        node[statusField] === 'error' ? 'fault' : node[statusField],
        { 'active': index === active },
        { 'not-vertical': !vertical },
        { 'flex-non': index === data.length - 1 && !vertical },
        { 'block-mini': data.length > 3 }
      ]"
      @click="$emit('click', index, node, $event)"
    >
      <div class="tiny-steps-main">
        <div
          :class="[
            'line left-line',
            { 'acetate': index === 0 && state.startIndex === 0 },
            { 'not-vertical': !vertical }
          ]"
        ></div>
        <div
          :class="[
            'tiny-steps-icon',
            node[statusField] === 'error' ? 'fault' : node[statusField],
            { 'active': index === active }
          ]"
        >
          <template v-if="size !== 'mini'">
            <template v-if="node[statusField] === 'done'">
              <icon-finish :class="['icon icon-finish', { 'active': index === active }]"></icon-finish>
            </template>
            <template v-else-if="node[statusField] === 'error'">
              <icon-warn :class="['icon icon-warn', { 'active': index === active }]"></icon-warn>
            </template>
            <template v-else>
              {{ index + 1 }}
            </template>
          </template>
        </div>
        <!-- title1 -->
        <div v-if="!vertical" v-auto-tip="{ placement: 'bottom' }" class="title">
          {{ node[nameField] }}
        </div>
        <div
          :class="[
            'line right-line',
            { 'hide': !vertical && index === data.length - 1 },
            { 'acetate': index === data.length - 1 },
            { 'not-vertical': !vertical }
          ]"
        ></div>
      </div>

      <slot name="item" :slot-scope="node" :index="index">
        <!-- title2 -->
        <div v-auto-tip="{ placement: 'bottom' }" :class="['title-vertical', { 'not-vertical': !vertical }]">
          {{ node[nameField] }}
        </div>
        <!-- description -->
        <div
          v-if="node[descriptionField]"
          :class="[
            'description',
            node[statusField] === 'error' ? 'fault' : node[statusField],
            { 'not-vertical': !vertical }
          ]"
          v-auto-tip="{ placement: 'bottom' }"
        >
          {{ node[descriptionField] }}
        </div>
        <div class="line-footer" v-if="slots.itemFooter">
          <slot class="line-footer" name="itemFooter" :slot-scope="node" :index="index"></slot>
        </div>
      </slot>
    </div>
    <!-- hidden right step section -->
    <div
      v-show="state.startIndex + visibleNum < data.length"
      :class="['tiny-steps-right', { 'not-vertical': !vertical }]"
      @click="state.startIndex++"
    >
      <div class="tiny-steps-main">
        <div
          :class="[
            'line left-line',
            { 'not-vertical': !vertical },
            {
              'line-brand': data[state.endIndex] && ['done', 'doing'].includes(data[state.endIndex].status)
            }
          ]"
        ></div>
        <div class="tiny-steps-icon">
          <span class="item-number">
            {{ size === 'mini' ? '' : state.endIndex + 1 }}
          </span>
          <template v-if="state.rightNodePositions.length > 0">
            <div v-for="(item, index) in state.rightNodePositions" class="item-circle" :style="item" :key="index"></div
          ></template>
        </div>
        <div :class="['line right-line', { 'not-vertical': !vertical }]"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/steps/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconFinish, IconWarn } from '@opentiny/vue-icon'
import { AutoTip } from '@opentiny/vue-directive'

export default defineComponent({
  components: {
    IconFinish: IconFinish(),
    IconWarn: IconWarn()
  },
  directives: { AutoTip }, // 新规范
  emits: ['click'],
  props: [...props, 'vertical', 'nameField', 'statusField', 'data', 'active', 'visibleNum', 'descriptionField', 'size'],
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  }
})
</script>
