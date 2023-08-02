<template>
  <div
    :class="
      m(
        'relative text-xs',
        type !== 'textarea' || slots.prepend || slots.append ? 'inline-table' : '',
        type !== 'textarea' ? 'w-full' : 'w-max align-bottom',
        slots.prepend || slots.append ? 'leading-normal border-separate border-spacing-0' : '',
        $attrs.class
      )
    "
    data-tag="tiny-input"
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
      <div
        ref="prepend"
        class="border-r-0 rounded-tr-none rounded-br-none bg-color-bg-2 text-color-text-placeholder border border-solid border-color-border rounded px-3 py-0 w-px align-middle table-cell relative whitespace-nowrap"
        v-if="slots.prepend && !state.isDisplayOnly"
      >
        <slot name="prepend"></slot>
      </div>
      <span class="relative">
        <tiny-tooltip
          v-if="state.isDisplayOnly"
          effect="light"
          :content="state.displayOnlyTooltip"
          :display="type === 'password'"
          placement="top"
          @mouseenter.native="handleEnterDisplayOnlyContent"
        >
          <span
            class="absolute top-0 left-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap"
            v-if="type === 'password'"
            >{{ state.hiddenPassword }}</span
          >
          <span class="absolute top-0 left-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap" v-else>{{
            displayOnlyContent || state.nativeInputValue
          }}</span>
        </tiny-tooltip>
        <input
          v-if="type !== 'textarea'"
          ref="input"
          :name="name"
          v-bind="a($attrs, ['type', 'class', 'style', '^on\w+'])"
          :class="
            m(
              'w-full border-0 px-3 sm:border-solid sm:border-color-border sm:hover:border-color-border-hover ' +
                'sm:focus:border-color-brand-focus sm:disabled:border-color-border ' +
                'placeholder:text-color-text-placeholder placeholder:text-sm text-sm sm:placeholder:text-xs sm:text-xs text-color-text-primary ' +
                'bg-white disabled:cursor-not-allowed disabled:text-color-text-disabled ' +
                'disabled:bg-color-bg-2 h-7 leading-7 py-0 outline-0 transition-colors duration-200 ease-in-out ',
              slots.prepend || slots.append ? 'align-middle table-cell' : 'inline-block',
              slots.prepend && slots.append
                ? 'rounded-none'
                : slots.prepend
                ? 'rounded-tl-none rounded-bl-none rounded-tr rounded-br'
                : slots.append
                ? 'rounded-tl rounded-bl rounded-tr-none rounded-br-none'
                : 'rounded-sm',
              readonly ? 'sm:border-0 text-ellipsis overflow-hidden whitespace-nowrap' : 'sm:border',
              (slots.prefix || prefixIcon) && (slots.suffix || suffixIcon || clearable || showPassword)
                ? 'pl-6 pr-6'
                : slots.prefix || prefixIcon
                ? 'pl-6 pr-3'
                : slots.suffix || suffixIcon || clearable || showPassword
                ? 'pl-3 pr-6'
                : '',
              state.isDisplayOnly ? 'invisible h-auto leading-none border-0' : '',
              inputClass
            )
          "
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
      </span>
      <tiny-tall-storage
        v-if="isMemoryStorage"
        :name="name"
        :localstorage-data="storageData"
        :is-memory-storage="isMemoryStorage"
        @selected="selectedMemory"
      ></tiny-tall-storage>
      <!-- 前置内容 -->
      <span
        ref="prefix"
        class="left-2 transition-all duration-300 ease-in-out text-xs absolute top-1/2 -translate-y-1/2 text-center text-color-text-placeholder flex items-center"
        v-if="(slots.prefix || prefixIcon) && !state.isDisplayOnly"
      >
        <slot name="prefix"></slot>
        <component
          v-if="prefixIcon"
          :is="prefixIcon"
          class="leading-7 text-center transition-all duration-300 ease-in-out text-xs"
        />
      </span>
      <!-- 后置内容 -->
      <span
        ref="suffix"
        class="right-2 transition-all duration-300 ease-in-out pointer-events-none text-xs absolute top-1/2 -translate-y-1/2 text-center text-color-text-placeholder flex items-center"
        v-if="!state.isDisplayOnly && getSuffixVisible()"
      >
        <span class="pointer-events-auto text-xs flex justify-start items-center">
          <template v-if="!state.showClear || !state.showPwdVisible || !state.isWordLimitVisible">
            <slot name="suffix"></slot>
            <component
              v-if="suffixIcon"
              :is="suffixIcon"
              class="leading-7 text-center transition-all duration-300 ease-in-out text-xs"
            />
          </template>
          <icon-error
            v-if="state.showClear"
            class="leading-7 text-center transition-all duration-300 ease-in-out text-xs cursor-pointer fill-color-none-hover block sm:hidden"
            @mousedown.prevent
            @click="clear"
          ></icon-error>
          <icon-close
            v-if="state.showClear"
            class="hidden sm:block leading-7 text-center transition-all duration-300 ease-in-out text-xs cursor-pointer"
            @mousedown.prevent
            @click="clear"
          ></icon-close>
          <component
            v-if="showPassword"
            :is="state.passwordVisible ? 'icon-eyeopen' : 'icon-eyeclose'"
            class="leading-7 text-center transition-all duration-300 ease-in-out text-xs"
            @click.native="handlePasswordVisible"
          ></component>
          <span
            v-if="state.isWordLimitVisible"
            class="h-full inline-flex items-center text-xs text-color-text-placeholder"
          >
            <span class="bg-white leading-none inline-block">{{
              state.showWordLimit ? `${state.textLength}/${state.upperLimit}` : state.textLength
            }}</span>
          </span>
        </span>
        <i
          v-if="state.validateState"
          :class="
            m(
              'leading-7 text-center transition-all duration-300 ease-in-out text-xs pointer-events-none',
              state.validateIcon
            )
          "
        >
        </i>
      </span>
      <!-- 后置元素 -->
      <div
        ref="append"
        class="border-l-0 rounded-tl-none rounded-bl-none bg-color-bg-2 text-color-text-placeholder border border-solid border-color-border rounded-tr rounded-br px-3 py-0 w-px align-middle table-cell relative whitespace-nowrap"
        v-if="slots.append && !state.isDisplayOnly"
      >
        <slot name="append"></slot>
      </div>
      <!-- Panel弹窗（例如时间组件的非范围选择窗口） -->
      <div ref="panel" v-if="slots.panel && !state.isDisplayOnly">
        <slot name="panel"></slot>
      </div>
    </template>
    <span v-else>
      <tiny-tooltip
        v-if="state.isDisplayOnly"
        effect="light"
        :content="state.displayOnlyTooltip"
        placement="top"
        @mouseenter.native="handleEnterDisplayOnlyContent"
      >
        <span class="max-w-full text-ellipsis break-words line-clamp-5">{{
          displayOnlyContent || state.nativeInputValue
        }}</span>
      </tiny-tooltip>
      <textarea
        ref="textarea"
        v-bind="a($attrs, ['type', 'class', 'style', '^on[A-Z]'])"
        :tabindex="tabindex"
        class="block w-full border-0 sm:border-solid sm:border-color-border sm:hover:border-color-border-hover sm:focus:border-color-brand-focus sm:disabled:border-color-border outline-0 rounded placeholder:text-color-text-placeholder placeholder:text-xs text-xs text-color-text-primary bg-white disabled:cursor-not-allowed disabled:text-color-text-disabled disabled:bg-color-bg-2 leading-normal"
        :class="[readonly ? 'sm:border-0 px-0 py-0' : 'sm:border px-3 py-2', state.isDisplayOnly ? 'hidden' : '']"
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
    </span>
    <span
      v-if="state.isWordLimitVisible && type === 'textarea'"
      class="bg-white text-color-text-placeholder text-xs absolute bottom-1 right-3"
      >{{ state.showWordLimit ? `${state.textLength}/${state.upperLimit}` : state.textLength }}</span
    >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/input/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import TinyTallStorage from './tall-storage.vue'
import { IconError, IconEyeopen, IconEyeclose, IconClose } from '@opentiny/vue-icon'
import TinyTooltip from '@opentiny/vue-tooltip'

export default defineComponent({
  inheritAttrs: false,
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
    'click'
  ],
  components: {
    IconClose: IconClose(),
    IconError: IconError(),
    IconEyeopen: IconEyeopen(),
    IconEyeclose: IconEyeclose(),
    TinyTallStorage,
    TinyTooltip
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
    'showWordLimit',
    'inputClass',
    'displayOnly',
    'displayOnlyContent'
  ],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
