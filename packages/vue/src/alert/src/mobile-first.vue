<template>
  <transition>
    <div
      data-tag="tiny-alert"
      v-if="state.show"
      :class="
        m(
          'min-h-min flex py-2 sm:py-3 px-4 my-2 rounded box-border font-light sm:font-normal',
          { 'bg-color-info-primary-subtler': type === 'info' || !type },
          { 'bg-color-error-subtler': type === 'error' },
          { 'bg-color-warning-subtler': type === 'warning' },
          { 'bg-color-success-subtler': type === 'success' },
          { 'text-center': center },
          customClass
        )
      "
    >
      <component
        v-if="showIcon"
        :is="state.getIcon"
        custom-class="h-4.5 w-4.5 mt-1 sm:mt-0.5 sm:h-6 sm:w-5 sm:h-5 fill-current"
        :class="[
          { 'text-color-info-primary': type === 'info' || !type },
          { 'text-color-error': type === 'error' },
          { 'text-color-warning': type === 'warning' },
          { 'text-color-success': type === 'success' }
        ]"
      />
      <div
        data-tag="tiny-alert-foldable"
        v-if="showFoldable"
        class="flex-1 leading-6 text-sm overflow-hidden"
        :class="showIcon ? 'mx-2' : 'mr-2'"
      >
        <div
          data-tag="tiny-alert-large"
          v-if="size === 'large'"
          @click="handleHeaderClick"
          class="inline-flex cursor-pointer font-medium"
        >
          <span data-tag="tiny-alert-title">
            <slot name="title">{{ state.getTitle }}</slot>
          </span>
          <span data-tag="tiny-alert-icon" class="ml-2.5"
            ><icon-chevron-down
              class="transition-transform duration-300 align-top my-1 fill-color-icon-placeholder"
              :class="[state.contentVisible ? 'rotate-180' : 'rotate-0']"
            ></icon-chevron-down
          ></span>
        </div>

        <div
          data-tag="tiny-alert-content"
          ref="ContentDescribe"
          :class="[
            'transition-all duration-900 ease-linear',
            { 'hidden': size === 'large' && !description && !slots.description },
            { 'overflow-y-auto': state.scrollStatus },
            state.contentVisible ? 'max-h-[theme(spacing.72)]' : 'max-h-0'
          ]"
        >
          <div
            data-tag="tiny-alert-singline"
            :class="[
              { 'truncate': singleLine },
              {
                'hover:animate-[leftMove_10s_linear_infinite] hover:overflow-visible cursor-pointer':
                  singleLine && scrolling
              }
            ]"
          >
            <slot name="description">{{ description }}</slot>
          </div>
        </div>

        <div
          data-tag="tiny-alert-default"
          ref="ContentDefault"
          v-if="size === 'large' && slots.default"
          :class="[
            'transition-all duration-900 ease-linear',
            { 'pt-2': description && state.contentVisible },
            { 'overflow-y-auto': state.scrollStatus },
            state.contentVisible ? 'max-h-[theme(spacing.72)]' : 'max-h-0'
          ]"
        >
          <slot></slot>
        </div>
      </div>
      <div
        data-tag="tiny-alert-notfoldable"
        v-else
        class="flex-1 leading-6 text-sm overflow-hidden cursor-pointer"
        :class="showIcon ? 'mx-2' : 'mr-2'"
      >
        <div data-tag="tiny-alert-large" v-if="size === 'large'" class="font-medium">
          <slot name="title">{{ state.getTitle }}</slot>
        </div>
        <div
          data-tag="tiny-alert-singlelinebox"
          :class="[{ 'hidden': size === 'large' && !description && !slots.description }]"
        >
          <div
            data-tag="tiny-alert-singleline"
            :class="[
              { 'truncate': singleLine },
              {
                'hover:animate-[leftMove_10s_linear_infinite] hover:overflow-visible cursor-pointer':
                  singleLine && scrolling
              }
            ]"
          >
            <slot name="description">{{ description }}</slot>
          </div>
        </div>
        <div v-if="size === 'large' && slots.default" class="pt-2">
          <slot></slot>
        </div>
      </div>
      <icon-close
        v-if="!closeText && closable"
        @click="handleClose"
        class="h-4 w-4 mt-1 cursor-pointer fill-color-text-primary opacity-70"
      ></icon-close>
      <span
        v-else-if="closeText && closable"
        data-tag="tiny-alert-close-text"
        @click="handleClose"
        class="leading-6 text-sm cursor-pointer"
        >{{ closeText }}</span
      >
    </div>
  </transition>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/alert/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconClose, iconSuccess, iconError, iconHelp, iconWarning, iconChevronDown } from '@opentiny/vue-icon'
import type { IAlertApi } from '@opentiny/vue-renderless/types/alert.type'

export default defineComponent({
  emits: ['close'],
  props: [
    ...props,
    'icon',
    'type',
    'size',
    'description',
    'title',
    'closable',
    'center',
    'showIcon',
    'closeText',
    'singleLine',
    'scrolling',
    'showFoldable',
    'customClass'
  ],
  components: {
    IconClose: iconClose(),
    IconSuccess: iconSuccess(),
    IconError: iconError(),
    IconHelp: iconHelp(),
    IconWarning: iconWarning(),
    IconChevronDown: iconChevronDown()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IAlertApi
  }
})
</script>
