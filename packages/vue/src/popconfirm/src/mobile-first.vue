<template>
  <div data-tag="tiny-popconfirm" class="inline-block">
    <tiny-popover
      ref="popover"
      tiny_mode="mobile-first"
      v-model="state.showPopover"
      :placement="placement"
      trigger="manual"
      :width="width"
      :title="title"
      :popper-class="m('min-w-[theme(spacing.44)] max-w-[theme(spacing.96)]', customClass)"
      :reference="reference"
      @show="handleEmit('show')"
      @hide="handleEmit('hide')"
    >
      <template #header>
        <div data-tag="tiny-popconfirm-header" class="flex items-center leading-6 sm:pt-1">
          <component
            v-if="type"
            :is="state.getIcon"
            :class="
              m(
                'h-6 w-6 mr-2',
                { 'fill-color-info-secondary': type === 'info' },
                { 'fill-color-error': type === 'error' },
                { 'fill-color-warning': type === 'warning' },
                { 'fill-color-success': type === 'success' }
              )
            "
          >
          </component>
          <div class="flex-auto">{{ title }}</div>
        </div>
      </template>
      <template #default>
        <div data-tag="tiny-popconfirm-content">
          <div class="sm:leading-6 sm:text-xs sm:text-color-text-secondary">{{ message }}</div>
        </div>
      </template>
      <template #footer>
        <div data-tag="tiny-popconfirm-footer" class="sm:pb-1">
          <div class="hidden sm:flex mt-4 justify-end">
            <slot name="footer">
              <tiny-button v-if="cancelButton" class="mr-2 w-16" size="mini" tiny_mode="mobile-first" @click="hide">{{
                t('ui.buttonMessage.cancel')
              }}</tiny-button>
              <tiny-button class="w-16" size="mini" tiny_mode="mobile-first" type="primary" @click="confirm">{{
                t('ui.buttonMessage.confirm')
              }}</tiny-button>
            </slot>
          </div>
          <div class="flex sm:hidden text-base justify-center">
            <slot name="footer">
              <tiny-button
                v-if="cancelButton"
                custom-class="flex-1 text-color-text-secondary"
                tiny_mode="mobile-first"
                type="text"
                @click="hide"
                >{{ t('ui.buttonMessage.cancel') }}</tiny-button
              >
              <span v-if="cancelButton" class="border-r border-r-color-border-separator"></span>
              <tiny-button
                custom-class="flex-1 text-color-brand tiny-modal-mf-button"
                tiny_mode="mobile-first"
                type="text"
                @click="confirm"
                >{{ t('ui.buttonMessage.confirm') }}</tiny-button
              >
            </slot>
          </div>
        </div>
      </template>
      <template #reference>
        <div class="inline-block" @click="show('click')" @mouseover="show('hover')">
          <slot name="reference"></slot>
        </div>
      </template>
    </tiny-popover>
  </div>
</template>

<script>
import { setup, $prefix, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/popconfirm/vue'
import Popover from '@opentiny/vue-popover'
import Button from '@opentiny/vue-button'
import { iconError, iconInfoSolid, iconWarning, iconSuccess } from '@opentiny/vue-icon'

const $constants = {
  ICON_MAP: {
    success: 'icon-success',
    error: 'icon-error',
    info: 'icon-info-solid',
    warning: 'icon-warning'
  }
}

export default defineComponent({
  name: $prefix + 'Popconfirm',
  components: {
    TinyPopover: Popover,
    TinyButton: Button,
    IconSuccess: iconSuccess(),
    IconInfoSolid: iconInfoSolid(),
    IconWarning: iconWarning(),
    IconError: iconError()
  },
  props: {
    _constants: {
      type: Object,
      default: () => $constants
    },
    message: String,
    customClass: String,
    trigger: {
      type: String,
      default: 'hover',
      validator: (value) => ~['click', 'hover'].indexOf(value)
    },
    cancelButton: {
      type: Boolean,
      default: true
    },
    title: String,
    placement: {
      type: String,
      default: 'top'
    },
    width: {
      type: [String, Number],
      default: ''
    },
    type: [String, Object],
    reference: {},
    events: Object
  },
  emits: ['hide', 'show', 'confirm', 'handleEmit'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
