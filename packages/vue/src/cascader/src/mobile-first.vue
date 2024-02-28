<template>
  <tiny-pc-first v-if="bp !== 'default'" v-bind="$props" @update:modelValue="updateValue"> </tiny-pc-first>

  <div v-else>
    <tiny-input
      tiny_mode="mobile-first"
      @click="visible = true"
      :model-value="showText"
      :disabled="disabled"
      :placeholder="placeholder"
      readonly
    >
      <template #suffix>
        <div>
          <icon-chevron-right
            :class="[
              visible ? 'fill-color-brand' : '',
              disabled ? 'fill-color-icon-placeholder sm:fill-color-icon-secondary' : 'fill-color-icon-secondary'
            ]"
            custom-class="w-5 h-5"
          />
        </div>
      </template>
    </tiny-input>
    <tiny-cascader-mobile
      :model-value="modelValue"
      @update:modelValue="updateValue"
      @close="visible = false"
      @update:text="updateText"
      :visible="visible"
      v-bind="computedMobileProp"
    />
  </div>
</template>

<script lang="ts">
import { props, hooks, useBreakpoint, defineComponent } from '@opentiny/vue-common'
import Input from '@opentiny/vue-input'
import { IconChevronRight } from '@opentiny/vue-icon'

import CascaderMobile from '@opentiny/vue-cascader-mobile'
import PcFirst from './pc-first.vue'
export default defineComponent({
  props: [
    ...props,
    'modelValue',
    'options',
    'props',
    'size',
    'placeholder',
    'disabled',
    'clearable',
    'filterable',
    'filterMethod',
    'separator',
    'showAllLevels',
    'collapseTags',
    'debounce',
    'beforeFilter',
    'popperClass',
    'placement',
    'popperOptions',
    'visibleArrow',
    'offset',
    'boundariesPadding',
    'arrowOffset',
    'popperAppendToBody',
    'autoSize',
    'displayOnly',
    'shape',
    'label',
    'tip',
    'hoverExpand',
    'title',
    'showHeader',
    'levelTitle'
  ],
  inheritAttrs: false,
  components: {
    TinyCascaderMobile: CascaderMobile,
    TinyPcFirst: PcFirst,
    TinyInput: Input,
    IconChevronRight: IconChevronRight()
  },
  emits: [
    'update:modelValue',
    'change',
    'visible-change',
    'focus',
    'blur',
    'expand-change',
    'active-item-change',
    'remove-tag',
    'created'
  ],
  setup(props, ctx) {
    const bp = useBreakpoint().current
    const visible = hooks.ref(false)
    const showText = hooks.ref('')

    // 适配级联组件的props 跟cascader-mobile组件的属性差异
    // 外层属性是 【pc-first】 和 【cascader-mobile】 属性 的并集。
    const computedMobileProp = hooks.computed(() => {
      // 将props中的filterMethod 转存到searchConfig中
      const mobileProp = hooks.reactive({
        _constants: props._constants,
        data: props.options,
        ellipsis: props.ellipsis,
        placeholder: Array.isArray(props.levelTitle) && props.levelTitle.length ? props.levelTitle : props.placeholder, // 未传入有效的 levelTitle,则使用默认的placeholder
        title: props.title, // 外层需要补充
        valueField: props.props.value || 'value',
        textField: props.props.label || 'label',
        textField2: props.props.textField2 || '', // 外层props需要补充2,3属性
        textField3: props.props.textField3 || '',
        childrenField: props.props.children || 'children',
        textSplit: props.separator,
        showHeader: props.showHeader, // 外层需要补充
        multiple: false, // 不支持多选
        searchConfig: { filterable: props.filterable, filterMethod: props.filterMethod }, // 外层需要补充
        nodeConfig: {
          lazy: props.props.lazy || false,
          load: props.props.lazyLoad || null,
          isLeaf: props.props.isLeaf || 'leaf',
          checkStrictly: props.props.checkStrictly || false,
          afterLoad: props.props.afterLoad || null, // 外层props需要补充以下属性
          currentNodeKey: props.props.currentNodeKey || null,
          checkDescendants: props.props.checkDescendants || null,
          defaultCheckedKeys: props.props.defaultCheckedKeys || null,
          defaultExpandedKeys: props.props.defaultExpandedKeys || null,
          autoExpandParent: props.props.autoExpandParent || null,
          defaultExpandAll: props.props.defaultExpandAll || null,
          filterNodeMethod: props.props.filterNodeMethod || null
        }
      })
      return mobileProp
    })

    const updateValue = (value) => {
      ctx.emit('update:modelValue', value)
      visible.value = false
    }
    const updateText = (value) => {
      // 第一次事件会触发， 但是cascader-mobile内部的navList没有值，所以获取不到正确的文字,
      // 通过注释mobile的renderless的2段代码，可以返回文字 了
      showText.value = value
    }

    return { bp, visible, showText, computedMobileProp, updateValue, updateText }
  }
})
</script>
