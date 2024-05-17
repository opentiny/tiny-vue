<template>
  <div
    :class="
      m(
        'relative text-xs sm:text-sm',
        type !== 'textarea' || slots.prepend || slots.append ? 'inline-table' : '',
        type !== 'textarea' ? 'w-full' : 'align-bottom',
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
        data-tag="tiny-input-prepend"
        ref="prepend"
        class="border-r-0 rounded-tr-none rounded-br-none bg-color-bg-2 text-color-text-placeholder border border-solid border-color-border rounded px-3 py-0 w-px align-middle table-cell relative whitespace-nowrap"
        v-if="slots.prepend && !state.isDisplayOnly"
      >
        <slot name="prepend"></slot>
      </div>
      <span
        class="relative text-sm"
        :class="[state.inputSizeMf !== 'mini' ? 'sm:text-sm' : 'sm:text-xs']"
        data-tag="tiny-input-display-only"
      >
        <tiny-tooltip
          v-if="state.isDisplayOnly"
          effect="light"
          :content="state.displayOnlyTooltip"
          :display="type === 'password'"
          placement="top"
          :popper-options="{ bubbling: true }"
          @mouseenter.native="handleEnterDisplayOnlyContent"
        >
          <span
            class="absolute top-0 left-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap leading-7 sm:leading-normal text-color-text-primary"
            v-if="type === 'password'"
            >{{ state.hiddenPassword }}</span
          >
          <span
            class="absolute top-0 left-0 max-w-full flex items-center leading-7 sm:leading-normal text-color-text-primary"
            v-else-if="mask"
          >
            <span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap mr-4">
              {{ state.displayedMaskValue }}
            </span>
            <component
              :is="state.maskValueVisible ? 'icon-eyeopen' : 'icon-eyeclose'"
              @click.native="state.maskValueVisible = !state.maskValueVisible"
            ></component>
          </span>
          <span
            class="absolute top-0 left-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap leading-7 sm:leading-normal text-color-text-primary"
            v-else
          >
            {{ state.displayOnlyText }}
          </span>
        </tiny-tooltip>
        <input
          v-if="type !== 'textarea'"
          ref="input"
          data-tag="tiny-input-inner"
          :name="name"
          v-bind="a($attrs, ['type', 'class', 'style', '^on[A-Z]'])"
          :class="
            m(
              'w-full border-0 sm:border px-0 sm:px-3 sm:border-solid sm:border-color-border sm:hover:border-color-border-hover ' +
                'sm:focus:border-color-brand-focus sm:disabled:border-color-border-separator ' +
                'placeholder:text-color-text-placeholder placeholder:text-sm sm:disabled:placeholder:text-color-text-disabled text-sm text-color-text-primary ' +
                'bg-color-bg-1 disabled:cursor-not-allowed disabled:text-color-text-disabled sm:disabled:text-color-text-secondary ' +
                'sm:disabled:bg-color-bg-6 py-0 outline-0 transition-colors duration-200 ease-in-out ',
              state.inputSizeMf === 'medium'
                ? `h-8 leading-8 ${m('sm:text-sm')} placeholder:text-sm`
                : state.inputSizeMf === 'mini'
                  ? 'h-6 leading-6 text-xs placeholder:text-xs'
                  : 'h-7 leading-7',
              slots.prepend || slots.append ? 'align-middle table-cell' : 'inline-block',
              slots.prepend && slots.append
                ? 'rounded-none'
                : slots.prepend
                  ? 'rounded-tl-none rounded-bl-none rounded-tr rounded-br'
                  : slots.append
                    ? 'rounded-tl rounded-bl rounded-tr-none rounded-br-none'
                    : 'rounded',
              readonly ? ' text-ellipsis overflow-hidden whitespace-nowrap' : 'sm:border',
              (slots.prefix || prefixIcon) && (slots.suffix || suffixIcon || clearable || showPassword)
                ? 'px-6 sm:px-6'
                : slots.prefix || prefixIcon
                  ? 'pl-6 sm:pl-6 pr-0 sm:pr-3'
                  : slots.suffix || suffixIcon || clearable || showPassword
                    ? 'pl-0 sm:pl-3 pr-6 sm:pr-6'
                    : '',
              mask && state.inputDisabled
                ? !state.maskValueVisible
                  ? 'font-[serif] pr-6 sm:pr-6'
                  : 'pr-6 sm:pr-6'
                : '',
              (slots.suffix || suffixIcon || showPassword) && clearable ? 'pr-10 sm:pr-10' : '',
              state.isDisplayOnly ? 'invisible h-auto leading-none border-0' : '',
              state.isWordLimitVisible ? (clearable ? 'pr-18 sm:pr-18' : 'pr-14 sm:pr-14') : '',
              customClass
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
        data-tag="tiny-input-prefix"
        ref="prefix"
        class="left-2 transition-all duration-300 ease-in-out text-xs sm:text-sm absolute top-1/2 -translate-y-1/2 text-center text-color-text-placeholder flex items-center"
        v-if="(slots.prefix || prefixIcon) && !state.isDisplayOnly"
      >
        <slot name="prefix"></slot>
        <component
          v-if="prefixIcon"
          :is="prefixIcon"
          :class="
            m(
              'text-center transition-all duration-300 ease-in-out text-xs sm:text-sm',
              state.inputSizeMf === 'medium' ? 'leading-8' : state.inputSizeMf === 'mini' ? 'leading-6' : 'leading-7'
            )
          "
        />
      </span>
      <!-- 后置内容 -->
      <span
        data-tag="tiny-input-suffix"
        ref="suffix"
        class="right-2 transition-all duration-300 ease-in-out pointer-events-none text-xs absolute top-1/2 -translate-y-1/2 text-center text-color-text-placeholder flex items-center z-[1]"
        v-if="!state.isDisplayOnly && getSuffixVisible()"
      >
        <span class="pointer-events-auto text-xs flex justify-start items-center">
          <template v-if="!state.showClear || !state.showPwdVisible || !state.isWordLimitVisible">
            <slot name="suffix"></slot>
            <component
              v-if="suffixIcon"
              :is="suffixIcon"
              :class="
                m(
                  'text-center transition-all duration-300 ease-in-out text-xs',
                  state.inputSizeMf === 'medium'
                    ? 'leading-8'
                    : state.inputSizeMf === 'mini'
                      ? 'leading-6'
                      : 'leading-7'
                )
              "
            />
          </template>
          <icon-error
            v-if="state.showClear"
            :class="
              m(
                'text-center transition-all duration-300 ease-in-out text-xs cursor-pointer fill-color-none-hover block sm:hidden',
                state.inputSizeMf === 'medium' ? 'leading-8' : state.inputSizeMf === 'mini' ? 'leading-6' : 'leading-7'
              )
            "
            @mousedown.prevent
            @click="clear"
          ></icon-error>
          <icon-close
            v-if="state.showClear"
            :class="
              m(
                'hidden sm:block text-center transition-all duration-300 ease-in-out text-xs cursor-pointer',
                state.inputSizeMf === 'medium' ? 'leading-8' : state.inputSizeMf === 'mini' ? 'leading-6' : 'leading-7'
              )
            "
            @mousedown.prevent
            @click="clear"
          ></icon-close>
          <component
            v-if="showPassword"
            :is="state.passwordVisible ? 'icon-eyeopen' : 'icon-eyeclose'"
            :class="
              m(
                'text-center transition-all duration-300 ease-in-out text-xs',
                state.inputSizeMf === 'medium' ? 'leading-8' : state.inputSizeMf === 'mini' ? 'leading-6' : 'leading-7'
              )
            "
            @click.native="handlePasswordVisible"
          ></component>
          <component
            v-if="mask && state.inputDisabled"
            :is="state.maskValueVisible ? 'icon-eyeopen' : 'icon-eyeclose'"
            :class="
              m(
                'text-center transition-all duration-300 ease-in-out text-xs fill-color-text-placeholder',
                state.inputSizeMf === 'medium' ? 'leading-8' : state.inputSizeMf === 'mini' ? 'leading-6' : 'leading-7'
              )
            "
            @click.native="state.maskValueVisible = !state.maskValueVisible"
          ></component>
          <span
            v-if="state.isWordLimitVisible"
            class="h-full inline-flex items-center text-xs sm:text-sm text-color-text-placeholder"
          >
            <span class="bg-color-bg-1 leading-none inline-block">{{
              state.showWordLimit ? `${state.textLength}/${state.upperLimit}` : state.textLength
            }}</span>
          </span>
        </span>
        <i
          v-if="state.validateState"
          :class="
            m(
              'text-center transition-all duration-300 ease-in-out text-xs pointer-events-none',
              state.inputSizeMf === 'medium' ? 'leading-8' : state.inputSizeMf === 'mini' ? 'leading-6' : 'leading-7',
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
    <span v-else data-tag="tiny-input-textarea">
      <tiny-tooltip
        v-if="state.isDisplayOnly"
        effect="light"
        :content="state.displayOnlyTooltip"
        placement="top"
        :popper-options="{ bubbling: true }"
        @mouseenter.native="handleEnterDisplayOnlyContent($event, 'textarea')"
      >
        <span
          class="max-w-full text-ellipsis break-words line-clamp-5 text-sm pt-1.5 text-color-text-primary"
          :class="[state.inputSizeMf !== 'mini' ? 'sm:text-sm' : 'sm:text-xs']"
          >{{ state.displayOnlyText }}</span
        >
      </tiny-tooltip>
      <textarea
        ref="textarea"
        v-bind="a($attrs, ['type', 'class', 'style', '^on[A-Z]'])"
        :tabindex="tabindex"
        class="block w-full border-0 sm:border-solid sm:border-color-border sm:hover:border-color-border-hover sm:focus:border-color-brand-focus sm:disabled:border-color-border-separator outline-0 rounded placeholder:text-color-text-placeholder placeholder:text-sm sm:disabled:placeholder:text-color-text-disabled text-sm text-color-text-primary bg-color-bg-1 disabled:cursor-not-allowed disabled:text-color-text-disabled sm:disabled:text-color-text-secondary sm:disabled:bg-color-bg-6 leading-normal"
        :class="[
          readonly ? 'sm:border-0 px-0 py-0' : 'sm:border px-3 py-2',
          state.isDisplayOnly ? 'hidden' : '',
          state.inputSizeMf !== 'mini' ? 'sm:placeholder:text-sm sm:text-sm' : 'sm:placeholder:text-xs sm:text-xs'
        ]"
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
      data-tag="tiny-input-limit"
      v-if="state.isWordLimitVisible && type === 'textarea'"
      class="bg-color-bg-1 text-color-text-placeholder text-xs sm:text-sm absolute bottom-1 right-3"
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
    'click',
    'input'
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
    'mask',
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
    'customClass',
    'displayOnly',
    'displayOnlyContent',
    'showEmptyValue'
  ],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
