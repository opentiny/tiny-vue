<template>
  <div data-tag="tiny-user-head-group" class="inline-block">
    <div
      :style="{ 'width': state.width + 'px', 'min-height': state.minHeight + 'px' }"
      :class="[state.list.length === 3 ? 'block text-center' : 'flex items-center justify-around flex-wrap']"
      v-if="!horizontal"
      data-tag="tiny-user-head-group-horizontal"
    >
      <template v-if="state.list.length === 3">
        <div class="leading-[0] mb-px" data-tag="tiny-user-head-group-first">
          <tiny-user-head
            :background-color="state.list[0].backgroundColor"
            :color="state.list[0].color"
            :round="state.list[0].round"
            :type="state.list[0].type"
            v-model="state.list[0].modelValue"
          ></tiny-user-head>
        </div>
        <div class="flex items-center justify-around" data-tag="tiny-user-head-group-center">
          <div v-for="(item, i) in state.list.slice(1, 3)" :key="i" class="inline-block leading-[0]">
            <tiny-user-head
              :background-color="item.backgroundColor"
              :color="item.color"
              :round="item.round"
              :type="item.type"
              v-model="item.modelValue"
            ></tiny-user-head>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          data-tag="tiny-user-head-group-all"
          v-for="(item, i) in state.list.slice(0, 4)"
          :key="i"
          class="leading-[0]"
        >
          <tiny-user-head
            :background-color="item.backgroundColor"
            :color="item.color"
            :round="item.round"
            :type="item.type"
            v-model="item.modelValue"
          ></tiny-user-head>
        </div>
      </template>
    </div>
    <div data-tag="tiny-user-head-group-nothorizontal" v-else class="flex items-center cursor-pointer">
      <div
        data-tag="tiny-user-head-group-maxitem"
        v-for="(item, index) in state.list.slice(
          0,
          state.list.length > 4 ? (showMax ? (state.list.length > 6 ? 5 : state.list.length) : 3) : state.list.length
        )"
        :key="index"
        :style="{ 'margin-left': index !== 0 && -state.horizontalLeft + 'px' }"
        class="leading-[0]"
      >
        <tiny-user-head
          class="rounded-full border border-color-bg-1 border-solid"
          :round="item.round"
          :type="item.type"
          v-model="item.modelValue"
          @click="handleClick"
          @mouseenter="mouseEnter"
        ></tiny-user-head>
      </div>
      <div
        data-tag="tiny-user-head-group-maxitem"
        :style="{ 'margin-left': -state.horizontalLeft + 'px' }"
        :class="[
          'leading-[0] z-10',
          state.list.length > 4 ? (showMax ? state.list.length <= 6 && 'hidden' : 'block') : 'hidden'
        ]"
      >
        <div
          data-tag="tiny-user-head-group-size"
          class="rounded-full border border-color-bg-1 border-solid flex justify-center items-center text-color-text-primary bg-color-border-separator box-content"
          :style="{
            'height': `${groupSize}px`,
            'width': `${groupSize}px`,
            'lineHeight': `${groupSize}px`
          }"
          :round="state.list[state.list.length - 1].round"
          :type="state.list[state.list.length - 1].type"
          @click="handleClick"
          @mouseenter="mouseEnter"
        >
          {{ '+' + (state.list.length - (showMax ? 6 : 3)) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/user-head-group/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import UserHead from '@opentiny/vue-user-head'

export default defineComponent({
  components: {
    TinyUserHead: UserHead
  },
  emits: ['click', 'mouseenter'],
  props: [...props, 'groupSize', 'list', 'horizontal', 'showMax', 'color', 'backgroundColor'],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
