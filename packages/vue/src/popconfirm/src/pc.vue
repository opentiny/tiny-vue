<template>
  <div class="tiny-popconfirm">
    <div>
      <tiny-popover
        ref="popover"
        v-model="state.showPopover"
        :placement="placement"
        trigger="manual"
        :width="width"
        :popper-class="m('tiny-popconfirm-popover', popperClass)"
      >
        <div class="tiny-popconfirm-popover__container">
          <div class="tiny-popconfirm-popover__header">
            <component
              v-if="type"
              :is="state.getIcon"
              :class="
                m(
                  'tiny-popconfirm-popover__icon',
                  { 'fill-color-info-secondary': type === 'info' },
                  { 'fill-color-error': type === 'error' },
                  { 'fill-color-warning': type === 'warning' },
                  { 'fill-color-success': type === 'success' }
                )
              "
            >
            </component>
            <div class="tiny-popconfirm-popover__title">
              {{ title }}
            </div>
          </div>
          <div class="tiny-popconfirm-popover__content">
            {{ content }}
          </div>
          <div class="tiny-popconfirm-popover__footer">
            <slot name="footer">
              <tiny-button v-if="cancelButton" class="tiny-popconfirm-popover__cancel-button" size="mini" @click="hide">
                {{
                  t('ui.buttonMessage.cancel')
                }}
              </tiny-button>
              <tiny-button class="tiny-popconfirm-popover__confirm-button" size="mini" type="primary" @click="confirm">
                {{
                  t('ui.buttonMessage.confirm')
                }}
              </tiny-button>
            </slot>
          </div>
        </div>
        <template #reference>
          <div class="tiny-popconfirm__reference" @click="show('click')" @mouseenter="show('hover')">
            <slot name="reference"></slot>
          </div>
        </template>
      </tiny-popover>
    </div>
  </div>
</template>

<script lang="ts">
import { setup, $prefix, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/popconfirm/vue'
import Popover from '@opentiny/vue-popover'
import Modal from '@opentiny/vue-modal'
import Button from '@opentiny/vue-button'
import { iconError, iconInfoSolid, iconWarning, iconSuccess } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/popconfirm/index.less'

export default defineComponent({
  name: $prefix + 'Popconfirm',
  components: {
    TinyPopover: Popover,
    TinyModal: Modal,
    TinyButton: Button,
    IconSuccess: iconSuccess(),
    IconInfoSolid: iconInfoSolid(),
    IconWarning: iconWarning(),
    IconError: iconError()
  },
  props: {
    _constants: {
      type: Object,
      default: () => ({})
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
      default: '350'
    },
    type: [String, Object]
  },
  emits: ['hide', 'show', 'confirm'],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
