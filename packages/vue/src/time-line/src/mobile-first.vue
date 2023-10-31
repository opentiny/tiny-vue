<template>
  <div class="inline-flex flex-col" data-tag="tiny-timeline">
    <div
      data-tag="tiny-timeline-nodes"
      v-for="(node, index) in state.stackNodes"
      :key="index"
      :style="{
        height: index === state.stackNodes.length - 1 ? '' : space && space + 'px'
      }"
      :class="['inline-flex', getStatusCls(index)]"
    >
      <ul class="inline-flex sm:items-start" data-tag="tiny-timeline-list">
        <slot v-if="subField" name="left" :slot-scope="node">
          <li class="text-color-text-secondary text-left pr-0.5 inline-flex text-xs">
            <div class="sm:inline-block hidden leading-5 w-32">
              <span>{{ getDate(node[timeField]).date }}</span>
              <span class="ml-1">{{ getDate(node[timeField]).time }}</span>
            </div>
            <div class="sm:hidden inline-flex flex-col leading-5.5 w-20">
              <span class="text-sm">{{ getDate(node[timeField]).date }}</span>
              <span class="text-sm mb-6">{{ getDate(node[timeField]).time }}</span>
            </div>
          </li>
        </slot>
        <li
          data-tag="tiny-timeline-autocolor"
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
            data-tag="tiny-timeline-list-left"
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
            class="max-w-[theme(spacing.56)] inline-block text-color-icon-secondary sm:text-xs text-sm leading-5 mb-4 break-all break-words"
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
            class="max-w-[theme(spacing.56)] break-all break-words leading-5 inline-block text-color-icon-secondary text-xs sm:text-xs"
            >{{ node[tipsField] }}</span
          >
        </li>
      </ul>
    </div>
    <div
      data-tag="tiny-timeline-showdata"
      v-if="state.showData"
      class="sm:ml-6 ml-5 sm:m-0 my-1 sm:leading-5 sm:h-5 leading-5.5 inline-flex items-center"
    >
      <div
        data-tag="tiny-timeline-status"
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
  props: [...props, 'vertical', 'nameField', 'timeField', 'tipsField', 'autoColorField', 'data', 'space', 'subField'],
  components: { IconChevronDown: IconChevronDown(), IconChevronUp: IconChevronUp() },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
