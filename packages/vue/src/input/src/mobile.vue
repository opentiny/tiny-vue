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
  <div
    :class="[
      type === 'textarea' ? 'tiny-mobile-textarea' : 'tiny-mobile-input',
      state.inputSize ? 'tiny-mobile-input-' + state.inputSize : '',
      {
        'is-focus': state.focused,
        'is-disabled': state.inputDisabled,
        'is-exceed': state.inputExceed,
        'is-showlimit': state.isWordLimitVisible && type === 'textarea',
        'tiny-mobile-input-group': slots.prepend || slots.append,
        'tiny-mobile-input-group-append': slots.append,
        'tiny-mobile-input-group-prepend': slots.prepend
      }
    ]"
    :style="$attrs.style"
    @mouseenter="state.hovering = true"
    @mouseleave="state.hovering = false"
  >
    <div class="tiny-mobile-input__title" v-if="slots.title || title">
      <slot name="title">{{ title }}</slot>
    </div>

    <div class="tiny-mobile-input__wrapper" v-if="type !== 'textarea'">
      <!-- 下拉列表 -->
      <div v-if="isSelect" class="tiny-mobile-input__select" @click="showBox">
        <input
          type="text"
          readonly
          class="tiny-mobile-input__inner"
          v-bind="a($attrs, ['size', 'class', 'style', '^on[A-Z]'])"
          :value="state.checkedLabel"
          :disabled="state.inputDisabled"
          :name="name"
          :aria-label="label"
          :style="state.inputStyle"
          :tabindex="tabindex"
          @input="handleInput"
          @change="handleChange"
        />
        <div
          class="tiny-mobile-input__select-icon"
          :style="{
            transform: state.boxVisibility ? 'rotate(90deg)' : 'none'
          }"
        >
          <IconChevronRight></IconChevronRight>
        </div>
      </div>

      <template v-else>
        <input
          v-if="type !== 'textarea'"
          ref="input"
          :name="name"
          v-bind="a($attrs, ['size', 'class', 'style', '^on[A-Z]'])"
          class="tiny-mobile-input__inner"
          :style="state.inputStyle"
          :tabindex="tabindex"
          :type="showPassword ? (state.passwordVisible ? 'text' : 'password') : type"
          :disabled="state.inputDisabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          @compositionstart="handleCompositionStart"
          @compositionupdate="handleCompositionUpdate"
          @compositionend="handleCompositionEnd"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
          :aria-label="label"
        />
        <!-- 前置元素 -->
        <div class="tiny-mobile-input-group__prepend" v-if="slots.prepend">
          <span><slot name="prepend"></slot></span>
        </div>
        <!-- 前置内容 -->
        <div class="tiny-mobile-input__prefix" v-if="slots.prefix || prefixIcon">
          <slot name="prefix"></slot>
          <component v-if="prefixIcon" :is="prefixIcon" class="tiny-mobile-input__icon" />
        </div>
        <!-- 后置内容 -->
        <span class="tiny-mobile-input__suffix" v-if="getSuffixVisible()">
          <template v-if="!state.showClear || !state.showPwdVisible || !state.isWordLimitVisible">
            <slot name="suffix"></slot>
            <component v-if="suffixIcon" :is="suffixIcon" class="tiny-mobile-input__icon" />
          </template>
          <icon-close
            v-if="state.showClear"
            class="tiny-mobile-input__icon tiny-mobile-input__clear"
            @mousedown.prevent
            @click="clear"
          ></icon-close>
          <component
            v-if="state.showPwdVisible"
            :is="state.passwordVisible ? 'icon-eyeopen' : 'icon-eyeclose'"
            class="tiny-mobile-input__icon"
            @click="handlePasswordVisible"
          ></component>
          <span v-if="state.isWordLimitVisible" class="tiny-mobile-input__count">
            <span class="tiny-mobile-input__count-inner">{{
              state.showWordLimit ? `${state.textLength}/${state.upperLimit}` : state.textLength
            }}</span>
          </span>
          <i
            class="tiny-mobile-input__icon"
            v-if="state.validateState"
            :class="['tiny-mobile-input__validateIcon', validateIcon]"
          >
          </i>
        </span>
        <!-- 后置元素 -->
        <div class="tiny-mobile-input-group__append" v-if="slots.append">
          <slot name="append"></slot>
        </div>
      </template>
    </div>
    <div v-else class="tiny-mobile-textarea__wrapper">
      <textarea
        ref="textarea"
        :name="name"
        v-bind="a($attrs, ['type', 'class', 'style', '^on[A-Z]'])"
        :class="['tiny-mobile-textarea__inner', { 'is-focus': state.focused, 'is-autosize': autosize }]"
        :tabindex="tabindex"
        :disabled="state.inputDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :style="{
          ...state.textareaStyle,
          width: $attrs.cols ? 'auto' : '100%',
          height: $attrs.cols || autosize ? 'auto' : ''
        }"
        :aria-label="label"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @keyup="$emit('keyup', $event)"
        @keydown="$emit('keydown', $event)"
        @paste="$emit('paste', $event)"
      >
      </textarea>
    </div>

    <!-- 字数限制 -->
    <span v-if="state.isWordLimitVisible && type === 'textarea'" class="tiny-mobile-textarea__count">{{
      state.showWordLimit ? `${state.textLength}/${state.upperLimit}` : state.textLength
    }}</span>

    <!-- 下方提示 -->
    <div class="tiny-mobile-input__tips" v-if="slots.tips || tips">
      <slot name="tips">{{ tips }}</slot>
    </div>

    <!-- 下拉列表弹窗 -->
    <tiny-action-sheet
      v-model="state.sheetvalue"
      :menus="selectMenu"
      :ellipsis="ellipsis"
      :content-style="contentStyle"
      :visible="state.boxVisibility"
      @update:visible="state.boxVisibility = $event"
    ></tiny-action-sheet>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/input/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconClose, iconEyeopen, iconEyeclose, iconChevronRight } from '@opentiny/vue-icon'
import ActionSheet from '@opentiny/vue-action-sheet'
import '@opentiny/vue-theme-mobile/input/index.less'

export default defineComponent({
  emits: [
    'update:modelValue',
    'change',
    'clear',
    'focus',
    'blur',
    'keyup',
    'keydown',
    'paste',
    'mouseenter',
    'mouseleave',
    'input'
  ],
  components: {
    IconClose: iconClose(),
    IconChevronRight: iconChevronRight(),
    IconEyeopen: iconEyeopen(),
    IconEyeclose: iconEyeclose(),
    TinyActionSheet: ActionSheet
  },
  props: [
    ...props,
    'name',
    'selectMenu',
    'ellipsis',
    'contentStyle',
    'labelWidth',
    'tips',
    'isSelect',
    'type',
    'label',
    'modelValue',
    'disabled',
    'readonly',
    'clearable',
    'suffixIcon',
    'prefixIcon',
    'autocomplete',
    'showPassword',
    'validateEvent',
    'showWordLimit',
    'title',
    'counter',
    'autosize',
    'tabindex',
    'width',
    'textAlign',
    'resize'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
