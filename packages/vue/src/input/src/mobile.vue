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
  <div :class="[
    type === 'textarea' ? 'tiny-mobile-textarea' : 'tiny-mobile-input',
    state.inputSize ? 'tiny-mobile-input-' + state.inputSize : '',
    {
      'is-disabled': state.inputDisabled,
      'is-exceed': state.inputExceed,
      'is-showtitle': showTitle && type === 'textarea',
      'is-showcontent': slots.content && type === 'textarea',
      'is-showlimit': state.isWordLimitVisible && type === 'textarea',
      'tiny-mobile-input-group': slots.prepend || slots.append,
      'tiny-mobile-input-group-append': slots.append,
      'tiny-mobile-input-group-prepend': slots.prepend,
      'tiny-mobile-input-prefix': slots.prefix || prefixIcon,
      'tiny-mobile-input-suffix': slots.suffix || suffixIcon || clearable || showPassword
    }
  ]" @mouseenter="state.hovering = true" @mouseleave="state.hovering = false">
    <template v-if="type !== 'textarea' && type !== 'form'">
      <!-- 前置元素 -->
      <div class="tiny-mobile-input-group__prepend" v-if="slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input v-if="type !== 'textarea'" ref="input" :name="name" v-bind="a($attrs, ['size', 'class', 'style', '^on\w+'])"
        class="tiny-mobile-input__inner" :tabindex="tabindex"
        :type="showPassword ? (state.passwordVisible ? 'text' : 'password') : type" :disabled="state.inputDisabled"
        :readonly="readonly" :autocomplete="autocomplete" @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate" @compositionend="handleCompositionEnd" @input="handleInput"
        @focus="handleFocus" @blur="handleBlur" @change="handleChange" :aria-label="label" />
      <!-- 前置内容 -->
      <span class="tiny-mobile-input__prefix" v-if="slots.prefix || prefixIcon">
        <slot name="prefix"></slot>
        <component v-if="prefixIcon" :is="prefixIcon" class="tiny-mobile-input__icon" />
      </span>
      <!-- 后置内容 -->
      <span class="tiny-mobile-input__suffix" v-if="getSuffixVisible()">
        <span class="tiny-mobile-input__suffix-inner">
          <template v-if="!state.showClear || !state.showPwdVisible || !state.isWordLimitVisible">
            <slot name="suffix"></slot>
            <component v-if="suffixIcon" :is="suffixIcon" class="tiny-mobile-input__icon" />
          </template>
          <icon-operationfaild v-if="state.showClear" class="tiny-mobile-input__icon tiny-mobile-input__clear"
            @mousedown.prevent @click="clear"></icon-operationfaild>
          <icon-eyeopen v-if="state.showPwdVisible" class="tiny-mobile-input__icon"
            @click="handlePasswordVisible"></icon-eyeopen>
          <span v-if="state.isWordLimitVisible" class="tiny-mobile-input__count">
            <span class="tiny-mobile-input__count-inner">{{ state.showWordLimit ?
              `${state.textLength}/${state.upperLimit}` : state.textLength }}</span>
          </span>
        </span>
        <i class="tiny-mobile-input__icon" v-if="state.validateState"
          :class="['tiny-mobile-input__validateIcon', validateIcon]"> </i>
      </span>
      <!-- 后置元素 -->
      <div class="tiny-mobile-input-group__append" v-if="slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <template v-if="type === 'form'">
      <div class="tiny-mobile-input-form">
        <div v-if="isSelect" class="tiny-mobile-input-form__select" @click="showBox">
          <input type="text" :disabled="state.inputDisabled" :value="state.checkedLable"
            v-bind="a($attrs, ['size', 'class', 'style', '^on[A-Z]'])" @input="handleInput" :name="name"
            @change="handleChange" :aria-label="label" readonly
            class="tiny-mobile-input-form__input tiny-mobile-input__inner" :tabindex="tabindex" />
          <div class="tiny-mobile-input-form__icon" :style="{
            transform: state.boxVisibility ? 'rotate(90deg)' : 'none'
          }">
            <IconChevronRight></IconChevronRight>
          </div>
        </div>

        <input v-else ref="input" v-bind="a($attrs, ['size', 'class', 'style', '^on[A-Z]'])"
          :type="showPassword ? (state.passwordVisible ? 'text' : 'password') : 'text'" :name="name"
          class="tiny-mobile-input-form__input tiny-mobile-input__inner" :tabindex="tabindex"
          :disabled="state.inputDisabled" :readonly="readonly" @compositionstart="handleCompositionStart"
          @compositionupdate="handleCompositionUpdate" @compositionend="handleCompositionEnd" @input="handleInput"
          @focus="handleFocus" @blur="handleBlur" @change="handleChange" :aria-label="label" />
        <tiny-action-sheet v-model="state.sheetvalue" :menus="selectMenu" :ellipsis="ellipsis"
          :contentStyle="contentStyle" :visible="state.boxVisibility"
          @update:visible="state.boxVisibility = $event"></tiny-action-sheet>
      </div>
      <div class="tiny-mobile-input-form__tips" v-if="mobileTips">
        {{ mobileTips }}
      </div>
    </template>

    <div v-if="showTitle && type === 'textarea'" class="tiny-mobile-textarea__title">
      {{ textareaTitle }}
    </div>
    <div v-if="slots.content && type === 'textarea'" class="tiny-mobile-textarea__content">
      <slot name="content"></slot>
    </div>
    <textarea v-if="type === 'textarea'" ref="textarea" :name="name"
      v-bind="a($attrs, ['type', 'class', 'style', '^on[A-Z]'])" class="tiny-mobile-textarea__inner" :tabindex="tabindex"
      @compositionstart="handleCompositionStart" @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd" @input="handleInput" :disabled="state.inputDisabled" :readonly="readonly"
      :autocomplete="autocomplete" :style="state.textareaStyle" @focus="handleFocus" @blur="handleBlur"
      @change="handleChange" :aria-label="label">
          </textarea>
    <span v-if="state.isWordLimitVisible && type === 'textarea'" class="tiny-mobile-textarea__count">{{
      state.showWordLimit ? `${state.textLength}/${state.upperLimit}` : state.textLength
    }}</span>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/input/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconOperationfaild, iconEyeopen, iconChevronRight } from '@opentiny/vue-icon'
import ActionSheet from '@opentiny/vue-action-sheet'
import '@opentiny/vue-theme-mobile/input/index.less'

export default defineComponent({
  inheritAttrs: false,
  emits: ['update:modelValue', 'change', 'clear', 'focus', 'blur', 'keyup', 'keydown', 'paste', 'mouseenter', 'mouseleave'],
  components: {
    IconOperationfaild: iconOperationfaild(),
    IconChevronRight: iconChevronRight(),
    IconEyeopen: iconEyeopen(),
    TinyActionSheet: ActionSheet
  },
  props: [
    ...props,
    'name',
    'form',
    'selectMenu',
    'ellipsis',
    'contentStyle',
    'labelWidth',
    'mobileTips',
    'isSelect',
    'type',
    'label',
    'modelValue',
    'disabled',
    'readonly',
    'clearable',
    'maxlength',
    'suffixIcon',
    'prefixIcon',
    'autocomplete',
    'showPassword',
    'validateEvent',
    'showWordLimit',
    'showTitle',
    'textareaTitle',
    'counter',
    'autosize',
    'tabindex'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
