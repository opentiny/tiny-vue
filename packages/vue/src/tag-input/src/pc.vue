<template>
  <div
    class="tiny-tag-input"
    :class="`${disabled ? 'tiny-tag-input-disabled' : ''}`"
    @mouseenter="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <div class="tiny-tag-input-wrapper">
      <slot name="prefix"></slot>
      <tiny-tag
        v-for="(tag, index) in state.showTagList"
        :key="index"
        :size="size"
        :type="tagType"
        :effect="tagEffect"
        :closable="state.closeable"
        :draggable="draggable"
        @close="removeTag(index)"
        @dragstart="handleDragStart(index, $event)"
        @dragover="handleDragOver(index, $event)"
        @dragenter="handleDragEnter(index, $event)"
        @dragend="handleDrop(index, $event)"
        >{{ tag }}</tiny-tag
      >
      <tiny-tooltip v-if="state.collapsedTagList.length" placement="top">
        <tiny-tag :size="size" :type="tagType" :effect="tagEffect">+{{ state.collapsedTagList.length }}</tiny-tag>
        <template #content>
          <div class="tiny-tag-input-collapsed-tags">
            <tiny-tag
              v-for="(tag, index) in state.collapsedTagList"
              :key="index"
              :size="size"
              :type="tagType"
              :effect="tagEffect"
              :closable="state.closeable"
              @close="removeTag(state.showTagList.length + index)"
              >{{ tag }}</tiny-tag
            >
          </div>
        </template>
      </tiny-tooltip>
      <input
        v-if="!readonly"
        class="tiny-tag-input-inner"
        v-model="state.currentValue"
        :placeholder="placeholder"
        :disabled="disabled"
        @keydown.enter="addTag"
        @keydown.backspace="handleBackspace"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
      />
    </div>
    <div class="tiny-tag-input-suffix-wrapper">
      <slot name="suffix"></slot>
      <div v-if="state.showClearIcon" @click="handleClear">
        <tiny-icon-close class="tiny-tag-input-clear-icon"></tiny-icon-close>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { props, setup, defineComponent, $prefix } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tag-input/vue'
import Tag from '@opentiny/vue-tag'
import Tooltip from '@opentiny/vue-tooltip'
import { iconClose } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/tag-input/index.less'

export default defineComponent({
  name: $prefix + 'TagInput',
  components: {
    TinyTag: Tag,
    TinyTooltip: Tooltip,
    TinyIconClose: iconClose()
  },
  props: [
    ...props,
    'size',
    'modelValue',
    'tagType',
    'tagEffect',
    'placeholder',
    'readonly',
    'disabled',
    'minCollapsedNum',
    'max',
    'clearable',
    'separator',
    'draggable'
  ],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
