<template>
  <div class="inline-flex flex-col">
    <div
      v-for="(node, index) in state.stackNodes"
      :key="index"
      :style="{
        height: index === state.stackNodes.length - 1 ? '' : space && space + 'px'
      }"
      :class="['inline-flex', getStatusCls(index)]"
    >
      <ul class="inline-flex sm:items-start">
        <slot v-if="subField" name="left" :slot-scope="node">
          <li class="text-color-text-secondary text-left pr-3 inline-flex text-xs">
            <span class="sm:inline-block hidden leading-5"
              >{{ getDate(node[timeField]).date }} {{ getDate(node[timeField]).time }}</span
            >
            <div class="sm:hidden inline-flex flex-col leading-5.5">
              <span>{{ getDate(node[timeField]).date }} </span>
              <span class="mb-6">{{ getDate(node[timeField]).time }}</span>
            </div>
          </li>
        </slot>
        <li
          :style="{
            height: index === state.stackNodes.length - 1 ? '' : space && space + 'px'
          }"
          class="ml-1.5 relative h-full"
        >
          <div
            :class="[
              'sm:w-px absolute mt-4 h-[calc(100%-theme(spacing.3))]',
              {
                'sm:bg-color-bg-3 sm:border-0 border-l-0.5 border-l-color-bg-3': index !== state.stackNodes.length - 1
              }
            ]"
          ></div>
          <div
            class="mt-1 w-3 h-3 leading-3 box-border relative text-xs text-center -ml-1.5 cursor-pointer inline-flex items-center justify-center align-top"
          >
            <span
              v-if="typeof node[autoColorField] === 'string'"
              :class="[
                'rounded-full block w-1.5 h-1.5',
                node[autoColorField] === 'success' && 'bg-color-success',
                node[autoColorField] === 'error' && 'bg-color-error',
                node[autoColorField] === 'info' && 'bg-color-text-disabled'
              ]"
            ></span>
            <span v-else-if="!node[autoColorField]" :class="['rounded-full block w-1.5 h-1.5 bg-color-brand']"></span>
            <component v-else :is="node[autoColorField]"></component>
          </div>
        </li>
        <slot v-if="!subField" name="left" :slot-scope="node">
          <li
            class="sm:text-color-text-secondary text-color-text-placeholder text-left sm:pl-3 pl-2 inline-flex flex-col sm:flex-row"
          >
            <span class="inline-block sm:text-xs text-sm sm:leading-5 leading-5.5"
              >{{ getDate(node[timeField]).date }} {{ getDate(node[timeField]).time }}</span
            >
            <span
              v-if="node[nameField]"
              class="sm:hidden inline-block sm:leading-5 leading-5.5 text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[theme(spacing.56)] mb-6 text-color-text-primary"
              >{{ node[nameField] }}</span
            >
            <span
              v-if="node[tipsField]"
              class="sm:hidden max-w-[theme(spacing.56)] inline-block text-color-icon-secondary text-xs mt-2.5 leading-5"
              >{{ node[tipsField] }}</span
            >
          </li>
        </slot>
        <slot name="right" :slot-scope="node">
          <li
            :class="[
              'hidden sm:text-xs text-sm text-color-text-primary sm:inline-flex flex-col',
              subField ? 'ml-4.5' : 'ml-3 '
            ]"
          >
            <span
              :class="[
                'inline-block leading-5 sm:text-xs text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[theme(spacing.56)]',
                { 'mb-4': !subField }
              ]"
              >{{ node[nameField] }}</span
            >
            <span
              v-if="subField"
              class="max-w-[theme(spacing.56)] inline-block text-color-icon-secondary sm:text-xs text-sm leading-5 mb-4"
              >{{ node[tipsField] }}</span
            >
          </li>
          <li
            v-if="subField"
            :class="['sm:hidden text-xs text-color-text-primary inline-flex flex-col', subField ? 'ml-4.5' : 'ml-3 ']"
          >
            <span
              class="inline-block leading-5.5 sm:text-xs text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[theme(spacing.56)]"
              >{{ node[nameField] }}</span
            >
            <span
              v-if="node[tipsField]"
              class="max-w-[theme(spacing.56)] leading-5 inline-block text-color-icon-secondary text-xs sm:text-xs"
              >{{ node[tipsField] }}</span
            >
          </li>
        </slot>
      </ul>
    </div>
    <div
      v-if="state.showData"
      class="sm:ml-6 ml-5 sm:m-0 my-1 sm:leading-5 sm:h-5 leading-5.5 inline-flex items-center"
    >
      <div
        class="sm:h-3 h-3.5 cursor-pointer inline-flex text-color-brand fill-color-brand sm:text-xs text-sm"
        @click="changeStatus"
      >
        <span v-if="state.showAll" class="inline-flex items-center">收起</span>
        <span v-else class="inline-flex items-center">展开</span>
        <icon-chevron-up v-if="state.showAll" class="w-3 h-3 sm:ml-2 ml-1 my-px sm:my-0" />
        <icon-chevron-down v-else class="w-3 h-3 sm:ml-2 ml-1 my-px sm:my-0" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/time-line/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconChevronDown, IconChevronUp } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['click'],
  props: [
    ...props,
    'vertical',
    'showNumber',
    'nameField',
    'timeField',
    'tipsField',
    'autoColorField',
    'start',
    'data',
    'space',
    'active',
    'subField',
    'autoColor'
  ],
  components: { IconChevronDown: IconChevronDown(), IconChevronUp: IconChevronUp() },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
