<template>
  <div class="tiny-popconfirm">
    <div>
      <tiny-popover
        ref="popover"
        v-model="state.showPopover"
        :placement="placement"
        trigger="manual"
        :width="width"
        :popper-class="'tiny-popconfirm-popover ' + (customClass || '')"
        :popper-options="popperOptions"
        :append-to-body="popperAppendToBody"
        :reference="reference"
        @show="handleEmit('show')"
        @hide="handleEmit('hide')"
      >
        <div class="tiny-popconfirm-popover__container">
          <div class="tiny-popconfirm-popover__header">
            <component
              v-if="type"
              :is="state.getIcon"
              :class="['tiny-popconfirm-popover__icon', type ? `tiny-popconfirm-popover--${type}` : '']"
            >
            </component>
            <div class="tiny-popconfirm-popover__title" :class="[message ? '' : 'no-message']">
              {{ title }}
            </div>
          </div>
          <div class="tiny-popconfirm-popover__content">
            {{ message }}
          </div>
          <div class="tiny-popconfirm-popover__footer">
            <slot name="footer">
              <tiny-button v-if="cancelButton" class="tiny-popconfirm-popover__cancel-button" size="mini" @click="hide">
                {{ t('ui.button.cancel') }}
              </tiny-button>
              <tiny-button class="tiny-popconfirm-popover__confirm-button" size="mini" type="primary" @click="confirm">
                {{ t('ui.button.confirm') }}
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
import Button from '@opentiny/vue-button'
import { iconError, IconHelp, iconWarning, iconSuccess } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/popconfirm/index.less'

export default defineComponent({
  name: $prefix + 'Popconfirm',
  components: {
    TinyPopover: Popover,
    TinyButton: Button,
    IconSuccess: iconSuccess(),
    IconHelp: IconHelp(),
    IconWarning: iconWarning(),
    IconError: iconError()
  },
  props: {
    _constants: {
      type: Object,
      default: () => ({})
    },
    popperOptions: Object,
    message: String,
    customClass: String,
    trigger: {
      type: String,
      default: 'hover',
      validator: (value: string) => ['click', 'hover'].includes(value)
    },
    cancelButton: {
      type: Boolean,
      default: true
    },
    closeOnClickOutside: {
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
    events: Object,
    popperAppendToBody: {
      type: Boolean,
      default: true
    }
  },
  emits: ['hide', 'show', 'confirm'],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
