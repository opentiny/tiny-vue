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
      $attrs.class,
      type === 'textarea' ? 'tiny-textarea' : 'tiny-input',
      state.inputSize ? 'tiny-input-' + state.inputSize : '',
      {
        'is-disabled': state.inputDisabled,
        'is-exceed': state.inputExceed,
        'tiny-input-group': slots.prepend || slots.append,
        'tiny-input-group-append': slots.append,
        'tiny-input-group-prepend': slots.prepend,
        'tiny-input-prefix': slots.prefix || prefixIcon,
        'tiny-input-suffix': slots.suffix || suffixIcon || clearable || showPassword
      }
    ]"
    :style="$attrs.style"
    @mouseenter="
      ($event) => {
        state.hovering = true
        $emit('mouseenter', $event)
      }
    "
    @mouseleave="
      ($event) => {
        state.hovering = false
        $emit('mouseleave', $event)
      }
    "
    @click="$emit('click', $event)"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="tiny-input-group__prepend" v-if="slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        v-if="type !== 'textarea'"
        ref="input"
        :name="name"
        v-bind="a($attrs, ['type', 'class', 'style', '^on\w+'])"
        class="tiny-input__inner"
        :tabindex="tabindex"
        :type="showPassword ? (state.passwordVisible ? 'text' : 'password') : type"
        :disabled="state.inputDisabled"
        :readonly="readonly"
        :unselectable="readonly ? 'on' : 'off'"
        :autocomplete="autocomplete"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        :aria-label="label"
        @keyup="$emit('keyup', $event)"
        @keydown="$emit('keydown', $event)"
        @paste="$emit('paste', $event)"
      />
      <tiny-tall-storage
        v-if="isMemoryStorage"
        :name="name"
        :localstorage-data="storageData"
        :is-memory-storage="isMemoryStorage"
        @selected="selectedMemory"
      ></tiny-tall-storage>
      <!-- 前置内容 -->
      <span class="tiny-input__prefix" v-if="slots.prefix || prefixIcon">
        <slot name="prefix"></slot>
        <component v-if="prefixIcon" :is="prefixIcon" class="tiny-svg-size tiny-input__icon" />
      </span>
      <!-- 后置内容 -->
      <transition name="tiny-transition-icon-out-in">
        <span class="tiny-input__suffix" v-if="getSuffixVisible()">
          <span class="tiny-input__suffix-inner">
            <template v-if="!state.showClear || !state.showPwdVisible || !state.isWordLimitVisible">
              <slot name="suffix"></slot>
              <component v-if="suffixIcon" :is="suffixIcon" class="tiny-svg-size tiny-input__icon" />
            </template>
            <icon-close v-if="state.showClear" class="tiny-svg-size tiny-input__icon tiny-input__clear" @mousedown.prevent @click="clear"></icon-close>
            <component
              v-if="showPassword"
              :is="state.passwordVisible ? 'icon-eyeopen' : 'icon-eyeclose'"
              class="tiny-svg-size tiny-input__icon"
              @click.native="handlePasswordVisible"
            ></component>
            <span v-if="state.isWordLimitVisible" class="tiny-input__count">
              <span class="tiny-input__count-inner">{{ state.showWordLimit ? `${state.textLength}/${state.upperLimit}` : state.textLength }}</span>
            </span>
          </span>
          <i class="tiny-input__icon" v-if="state.validateState" :class="['tiny-input__validateIcon', validateIcon]"> </i>
        </span>
      </transition>
      <!-- 后置元素 -->
      <div class="tiny-input-group__append" v-if="slots.append">
        <slot name="append"></slot>
      </div>
      <!-- Panel弹窗（例如时间组件的非范围选择窗口） -->
      <div class="tiny-input-group__panel" v-if="slots.panel">
        <slot name="panel"></slot>
      </div>
    </template>
    <textarea
      v-else
      ref="textarea"
      v-bind="a($attrs, ['type', 'class', 'style', '^on[A-Z]'])"
      :tabindex="tabindex"
      class="tiny-textarea__inner"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      :disabled="state.inputDisabled"
      :readonly="readonly"
      :unselectable="readonly ? 'on' : 'off'"
      :autocomplete="autocomplete"
      :style="state.textareaStyle"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      :aria-label="label"
    >
    </textarea>
    <span v-if="state.isWordLimitVisible && type === 'textarea'" class="tiny-input__count">{{
      state.showWordLimit ? `${state.textLength}/${state.upperLimit}` : state.textLength
    }}</span>
    <slot></slot>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/input/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import TinyTallStorage from './tall-storage.vue'
import { iconClose, iconEyeopen, iconEyeclose } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/input/index.less'

export default defineComponent({
  inheritAttrs: false,
  emits: ['update:modelValue', 'change', 'clear', 'focus', 'blur', 'keyup', 'input', 'keydown', 'paste', 'mouseenter', 'mouseleave', 'click'],
  components: {
    IconClose: iconClose(),
    IconEyeopen: iconEyeopen(),
    IconEyeclose: iconEyeclose(),
    TinyTallStorage
  },

  props: [
    ...props,
    'name',
    'size',
    'form',
    'type',
    'label',
    'modelValue',
    'height',
    'resize',
    'counter',
    'autosize',
    'disabled',
    'readonly',
    'tabindex',
    'clearable',
    'suffixIcon',
    'prefixIcon',
    'autocomplete',
    'showPassword',
    'validateEvent',
    'showWordLimit'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
