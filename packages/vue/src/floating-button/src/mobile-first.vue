<template>
  <div data-tag="tiny-floating-button-body">
    <div
      v-if="vague || mask"
      data-tag="tiny-floating-button-mask"
      :class="[
        'w-screen h-screen fixed top-0 bottom-0 left-0 right-0',
        { 'bg-color-fill-5 backdrop-blur-md': vague },
        { 'bg-black opacity-30': mask }
      ]"
    ></div>
    <div
      data-tag="tiny-floating-button"
      :class="[
        'rounded-full fixed bottom-11 leading-none',
        position === 'center' ? '' : position === 'left' ? !state.specialHiddenSpace && 'left-3' : 'right-3'
      ]"
      :style="state.style"
    >
      <button
        data-tag="tiny-floating-button-main"
        @click="handleClick($event, 0)"
        ref="floatingButton"
        :class="
          m(
            'w-11 h-11 p-3 rounded-full',
            state.disabled
              ? 'text-color-text-disabled bg-color-bg-3 border-transparent active:cursor-not-allowed'
              : backgroundColor === 'white'
                ? 'bg-color-bg-1'
                : 'text-color-bg-1 bg-color-brand'
          )
        "
      >
        <component
          data-tag="tiny-floating-button-icon"
          :is="icon"
          :class="
            m(
              'w-5 h-5 rotate-0 transition-transform duration-300 will-change-transform',
              state.disabled
                ? 'fill-color-icon-disabled active:cursor-not-allowed'
                : backgroundColor === 'white'
                  ? 'fill-color-icon-secondary'
                  : 'fill-color-bg-1',
              { 'rotate-45': state.isExpand }
            )
          "
        />
      </button>
      <div
        v-if="state.expandList && state.expandList.length >= 1"
        data-tag="tiny-floating-button-expand-first"
        @click="handleClick($event, 1)"
        :class="
          m(
            'absolute -bottom-5 -mb-0.5 -left-0.5 -z-10 transition-bottom ease-linear duration-100 cursor-pointer',
            {
              'bottom-18 [&_span]:opacity-100 [&_span]:visible': state.isExpand && position === 'right'
            },
            {
              'bottom-16 -mb-1 [&_span]:opacity-100 [&_span]:visible': state.isExpand && position === 'center'
            },
            {
              'bottom-18 [&_span]:opacity-100 [&_span]:visible': state.isExpand && position === 'left'
            }
          )
        "
      >
        <button
          :class="
            m(
              'w-11 h-11 rounded-full mx-0.5',
              state.disabled
                ? 'text-color-text-disabled bg-color-bg-3 border-transparent active:cursor-not-allowed'
                : 'bg-color-info-primary-subtler'
            )
          "
        >
          <component
            data-tag="tiny-floating-button-icon"
            :is="state.expandList && state.expandList[0].icon"
            :class="[
              'w-5 h-5',
              state.disabled ? 'fill-color-icon-disabled active:cursor-not-allowed' : 'fill-color-brand'
            ]"
          />
        </button>
        <span
          :class="[
            'text-center mt-0.5 text-xs w-12 leading-5 block opacity-0 transition-opacity ease-linear duration-100 invisible',
            !mask ? 'text-color-fill-primary' : 'text-color-bg-1'
          ]"
          >{{ state.expandList && state.expandList[0].title }}</span
        >
      </div>
      <div
        v-if="state.expandList && state.expandList.length >= 2"
        data-tag="tiny-floating-button-expand-second"
        @click="handleClick($event, 2)"
        :class="
          m(
            'absolute -bottom-5 -mb-0.5 -left-0.5 -z-10 transition-bottom ease-linear duration-100 cursor-pointer',

            {
              '-left-18 bottom-11 mb-0 [&_span]:opacity-100 [&_span]:visible': state.isExpand && position === 'right'
            },
            {
              '-left-18 right-auto bottom-4.5 mb-0 [&_span]:opacity-100 [&_span]:visible':
                state.isExpand && position === 'center'
            },
            {
              'left-18 right-auto bottom-11 mb-0 [&_span]:opacity-100 [&_span]:visible':
                state.isExpand && position === 'left'
            }
          )
        "
      >
        <button
          :class="
            m(
              'w-11 h-11 rounded-full mx-0.5',
              state.disabled
                ? 'text-color-text-disabled bg-color-bg-3 border-transparent active:cursor-not-allowed'
                : 'bg-color-success-subtler'
            )
          "
        >
          <component
            data-tag="tiny-floating-button-icon"
            :is="state.expandList && state.expandList[1].icon"
            :class="[
              'w-5 h-5',
              state.disabled ? 'fill-color-icon-disabled active:cursor-not-allowed' : 'fill-color-success-active'
            ]"
          />
        </button>
        <span
          :class="[
            'text-center text-xs mt-0.5 w-12 leading-5 block opacity-0 transition-opacity ease-linear duration-100 invisible',
            !mask ? 'text-color-fill-primary' : 'text-color-bg-1'
          ]"
          >{{ state.expandList && state.expandList[1].title }}</span
        >
      </div>
      <div
        v-if="state.expandList && state.expandList.length >= 3"
        data-tag="tiny-floating-button-expand-third"
        @click="handleClick($event, 3)"
        :class="
          m(
            'absolute -bottom-5 -mb-0.5 -left-0.5 -z-10 transition-bottom ease-linear duration-100 cursor-pointer',
            {
              '-left-18 -bottom-9 -mb-1 [&_span]:opacity-100 [&_span]:visible': state.isExpand && position === 'right'
            },
            {
              'left-18 right-auto bottom-4.5 mb-0 [&_span]:opacity-100 [&_span]:visible':
                state.isExpand && position === 'center'
            },
            {
              'left-18 -bottom-9 -mb-1 right-auto [&_span]:opacity-100 [&_span]:visible':
                state.isExpand && position === 'left'
            }
          )
        "
      >
        <button
          :class="
            m(
              'w-11 h-11 rounded-full mx-0.5',
              state.disabled
                ? 'text-color-text-disabled bg-color-bg-3 border-transparent active:cursor-not-allowed'
                : 'bg-color-warning-subtler'
            )
          "
        >
          <component
            data-tag="tiny-floating-button-icon"
            :is="state.expandList && state.expandList[2].icon"
            :class="[
              'w-5 h-5',
              state.disabled ? 'fill-color-icon-disabled active:cursor-not-allowed' : 'fill-color-alert-hover'
            ]"
          />
        </button>
        <span
          :class="[
            'text-center text-xs mt-0.5 w-12 leading-5 block opacity-0 transition-opacity ease-linear duration-100 invisible',
            !mask ? 'text-color-fill-primary' : 'text-color-bg-1'
          ]"
          >{{ state.expandList && state.expandList[2].title }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/floating-button/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconPlus } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['click'],
  props: [
    ...props,
    'position',
    'backgroundColor',
    'icon',
    'resetTime',
    'animated',
    'expandList',
    'isExpand',
    'vague',
    'mask',
    'elementSelector'
  ],
  components: { IconPlus: iconPlus() },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  }
})
</script>
