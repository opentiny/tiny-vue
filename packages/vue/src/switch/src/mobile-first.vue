<template>
  <span
    :class="
      m(
        gcls('switch-default'),
        gcls(`switch-${size ? size : 'small'}`),
        gcls(
          `${state.currentValue === trueValue ? 'switch-true' : 'switch-false'}${
            disabled || types === 'loading' ? '-disabled' : '-not-disabled'
          }`
        )
      )
    "
    data-tag="tiny-switch"
    :tabindex="tabindex"
    @click="toggle"
    @keydown.space="toggle"
  >
    <span
      data-tag="tiny-switch-handle"
      :class="
        m(
          gcls('switch-handle-default'),
          gcls(`switch-handle-${size ? size : 'small'}`),
          gcls(
            `${
              state.currentValue === trueValue
                ? `switch-handle-true-${size ? size : 'small'}${disabled || types === 'loading' ? '-disabled' : ''}`
                : `switch-handle-false-${size ? size : 'small'}${disabled || types === 'loading' ? '-disabled' : ''}`
            }`
          )
        )
      "
    ></span>
    <span
      data-tag="tiny-switch-inner"
      :class="
        m(
          gcls(`switch-inner-default`),
          gcls(`switch-inner-${size ? size : 'small'}`),
          gcls(
            `${
              state.currentValue === trueValue
                ? types === 'word'
                  ? 'switch-inner-true-word'
                  : `switch-inner-true-${size ? size : 'small'}-icon`
                : types === 'word'
                ? `switch-inner-false-${size ? size : 'small'}-word`
                : 'switch-inner-false-icon'
            }`
          )
        )
      "
    >
      <div data-tag="tiny-switch-word" v-if="types === 'word'" class="sm:text-xs text-sm">
        <slot v-if="state.currentValue === trueValue" name="open">A</slot>
        <slot v-if="state.currentValue === falseValue" name="close">B</slot>
      </div>
      <div data-tag="tiny-switch-icon" v-if="types === 'icon'">
        <slot v-if="state.currentValue === trueValue" name="open">
          <svg
            viewBox="0 0 24 24"
            :class="[
              gcls(`switch-icon-${size ? size : 'small'}`),
              gcls(`switch-icon-true-${disabled ? 'disabled' : 'default'}`)
            ]"
          >
            <path
              d="M9.9 15.6l9.4-9.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-10 10.1c-.4.4-1 .4-1.4 0-.1 0-.1-.1-.2-.1l-5.8-5.8c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.2 5.2z"
            ></path>
          </svg>
        </slot>
        <slot v-if="state.currentValue === falseValue" name="close">
          <svg
            viewBox="0 0 24 24"
            :class="[
              gcls(`switch-icon-${size ? size : 'small'}`),
              gcls(`switch-icon-false-${disabled ? 'disabled' : 'default'}`)
            ]"
          >
            <path
              d="M13.4 12l6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6 5.7 4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l6.3 6.3-6.3 6.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l6.3-6.3 6.3 6.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"
            ></path>
          </svg>
        </slot>
      </div>
      <div data-tag="tiny-switch-loading" v-if="types === 'loading'">
        <slot v-if="state.currentValue === trueValue" name="open">
          <svg
            viewBox="0 0 48 48"
            :class="[gcls(`switch-loading-${size ? size : 'small'}`), gcls('switch-icon-true-disabled')]"
          >
            <path
              d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
              transform="rotate(275.098 75 75)"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </svg>
        </slot>
        <slot data-tag="tiny-switch-close" v-if="state.currentValue === falseValue" name="close">
          <svg
            viewBox="0 0 48 48"
            :class="[gcls(`switch-loading-${size ? size : 'small'}`), gcls('switch-icon-false-disabled')]"
          >
            <path
              d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
              transform="rotate(275.098 75 75)"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </svg>
        </slot>
      </div> </span
  ></span>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/switch/vue'
import { props, setup } from '@opentiny/vue-common'
import { classes } from './token'
import { defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  emits: ['change', 'update:modelValue'],
  props: [...props, 'modelValue', 'trueValue', 'falseValue', 'disabled', 'size', 'tabindex', 'types'],
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
