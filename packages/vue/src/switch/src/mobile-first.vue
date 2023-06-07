<template>
  <span
    :class="
      m(
        gcls('switch-default'),
        gcls('before-switch-default'),
        mini
          ? [
              gcls('switch-default-mini-mobile'),
              gcls('before-switch-default-mini-mobile'),
              disabled || types === 'loading' ? '' : gcls('active-before-switch-default-mini-mobile')
            ]
          : [
              gcls('switch-default-mobile'),
              gcls('before-switch-default-mobile'),
              disabled || types === 'loading' ? '' : gcls('active-before-switch-default-mobile')
            ],
        state.currentValue === trueValue
          ? disabled || types === 'loading'
            ? gcls(`switch-true-disabled${mini ? '-mini' : ''}`)
            : gcls(`switch-true${mini ? '-mini' : ''}`)
          : disabled
          ? gcls('switch-false-disabled')
          : types === 'loading'
          ? gcls('switch-false-loading')
          : gcls('switch-false')
      )
    "
    data-tag="tiny-switch"
    :tabindex="tabindex"
    @click="toggle"
    @keydown.space="toggle"
  >
    <span
      :class="
        m(
          gcls('switch-inner-default'),
          gcls(`switch-inner-default-mobile${mini === true ? '-mini' : ''}`),
          state.currentValue === trueValue
            ? types === 'icon'
              ? gcls(`switch-inner-true-icon${mini === true ? '-mini' : ''}`)
              : types === 'loading'
              ? gcls(`switch-inner-true-loading${mini === true ? '-mini' : ''}`)
              : gcls(`switch-inner-true${mini === true ? '-mini' : ''}`)
            : types === 'icon'
            ? gcls(`switch-inner-false-icon${mini === true ? '-mini' : ''}`)
            : types === 'loading'
            ? ''
            : gcls(`switch-inner-false${mini === true ? '-mini' : ''}`)
        )
      "
    >
      <div v-if="types === 'icon'">
        <slot v-if="state.currentValue === trueValue" name="open">
          <svg
            viewBox="0 0 24 24"
            :class="[
              mini === true ? 'w-3 h-3 sm:w-2.5 sm:h-2.5' : 'w-4 h-4 sm:w-3 sm:h-3',
              disabled === true ? 'fill-color-brand-disabled' : 'fill-color-brand'
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
              mini === true ? 'w-3 h-3 sm:w-2.5 sm:h-2.5' : 'w-4 h-4 sm:w-3 sm:h-3',
              disabled === true ? 'fill-color-icon-primary' : 'fill-color-icon-disabled'
            ]"
          >
            <path
              d="M13.4 12l6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6 5.7 4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l6.3 6.3-6.3 6.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l6.3-6.3 6.3 6.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"
            ></path>
          </svg>
        </slot>
      </div>
      <div v-if="types === 'word'" :class="['sm:text-xs', mini === true ? 'text-xs' : 'text-sm']">
        <slot v-if="state.currentValue === trueValue" name="open">A</slot>
        <slot v-if="state.currentValue === falseValue" name="close">B</slot>
      </div>
      <div v-if="types === 'loading'">
        <slot v-if="state.currentValue === trueValue" name="open">
          <svg
            :class="['fill-color-brand-disabled', mini === true ? 'sm:w-3 sm:h-3 w-4 h-4' : 'sm:w-4 sm:h-4 w-5 h-5']"
            viewBox="0 0 50 50"
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
        <slot v-if="state.currentValue === falseValue" name="close">
          <svg
            :class="['fill-color-none-hover', mini === true ? 'sm:w-3 sm:h-3 w-4 h-4' : 'sm:w-4 sm:h-4 w-5 h-5']"
            viewBox="0 0 50 50"
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
      </div>
    </span>
  </span>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/switch/vue'
import { props, setup } from '@opentiny/vue-common'
import { classes } from './token'
import { defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  emits: ['change', 'update:modelValue'],
  props: [...props, 'modelValue', 'trueValue', 'falseValue', 'disabled', 'mini', 'tabindex', 'types'],
  setup(props, context): any {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
