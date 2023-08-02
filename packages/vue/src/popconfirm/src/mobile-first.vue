<template>
  <div data-tag="tiny-popconfirm" class="inline-block">
    <div class="hidden sm:inline-block">
      <tiny-popover
        ref="popover"
        tiny_mode="mobile-first"
        v-model="state.showPopover"
        :placement="placement"
        trigger="manual"
        :width="width"
        :popper-class="m('min-w-[10.5rem] max-w-[21.875rem] hidden sm:block', popperClass)"
        @show="show"
        @hide="hide"
      >
        <div class="py-1 text-xs text-color-text-primary">
          <div data-tag="tiny-popconfirm-header" class="flex items-center leading-6">
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
            <div class="flex-auto">
              {{ title }}
            </div>
          </div>
          <div data-tag="tiny-popconfirm-content" class="text-color-text-secondary leading-6">
            {{ content }}
          </div>
          <div class="flex mt-4 justify-end">
            <slot name="footer">
              <tiny-button v-if="cancelButton" class="mr-2 w-16" size="mini" tiny_mode="mobile-first" @click="hide">
                {{
                  t('ui.buttonMessage.cancel')
                }}
              </tiny-button>
              <tiny-button class="w-16" size="mini" tiny_mode="mobile-first" type="primary" @click="confirm">
                {{
                  t('ui.buttonMessage.confirm')
                }}
              </tiny-button>
            </slot>
          </div>
        </div>
        <template #reference>
          <div class="inline-block" @click="show('click')" @mouseover="show('hover')">
            <slot name="reference"></slot>
          </div>
        </template>
      </tiny-popover>
    </div>

    <div class="sm:hidden inline-block">
      <div class="inline-block" @click="show('click')" @mouseover="show('hover')">
        <slot name="reference"></slot>
      </div>

      <tiny-modal
        ref="modal"
        tiny_mode="mobile-first"
        class="sm:hidden"
        v-model="state.showPopover"
        :title="title"
        show-footer
      >
        <template #default>
          {{ content }}
        </template>
        <template #footer>
          <div class="flex text-base justify-center">
            <slot name="footer">
              <tiny-button
                v-if="cancelButton"
                class="flex-1 text-color-text-secondary"
                tiny_mode="mobile-first"
                type="text"
                @click="hide"
              >
                {{ t('ui.buttonMessage.cancel') }}
              </tiny-button>
              <span v-if="cancelButton" class="border-r border-r-color-border-separator"></span>
              <tiny-button
                class="flex-1 text-color-brand tiny-modal-mf-button"
                tiny_mode="mobile-first"
                type="text"
                @click="confirm"
              >
                {{ t('ui.buttonMessage.confirm') }}
              </tiny-button>
            </slot>
          </div>
        </template>
      </tiny-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { setup, $prefix, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/popconfirm/vue'
import Popover from '@opentiny/vue-popover'
import Modal from '@opentiny/vue-modal'
import Button from '@opentiny/vue-button'
import { IconError, IconInfoSolid, IconWarning, IconSuccess } from '@opentiny/vue-icon'

export default defineComponent({
  name: $prefix + 'Popconfirm',
  components: {
    TinyPopover: Popover,
    TinyModal: Modal,
    TinyButton: Button,
    IconSuccess: IconSuccess(),
    IconInfoSolid: IconInfoSolid(),
    IconWarning: IconWarning(),
    IconError: IconError()
  },
  props: {
    _constants: {
      type: Object,
      default: () => $constants
    },
    content: String,
    popperClass: String,
    trigger: {
      type: String,
      default: 'hover',
      validator: (value: string) => Boolean(~['click', 'hover'].indexOf(value))
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
    type: [String, Object]
  },
  emits: ['hide', 'show', 'confirm'],
  setup(props, context): any {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
