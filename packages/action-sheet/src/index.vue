<template>
  <div class="tiny-mobile-action-sheet" v-show="visible" @click="visibleHandle">
    <div class="tiny-mobile-action-sheet__mask"></div>
    <div
      :class="[
        'tiny-mobile-action-sheet__content',
        state.toggle ? 'is-toggle' : ''
      ]"
    >
      <div
        :class="[
          'tiny-mobile-action-sheet__menu',
          ellipsis ? 'is-ellipsis' : ''
        ]"
      >
        <div
          :class="[
            'tiny-mobile-action-sheet__item',
            item.warn ? 'is-warn' : '',
            item.id === modelValue || item.id === state.active
              ? 'is-active'
              : ''
          ]"
          v-for="(item, index) in menus"
          :key="index"
          @click="menuHandle(item, index)"
        >
          <slot name="item" :item="item">
            {{ item.label }}
          </slot>
        </div>
      </div>
      <div class="tiny-mobile-action-sheet__action">
        <slot name="action">
          <div class="tiny-mobile-action-sheet__cancel" @click="visibleHandle">
            {{ t('ui.actionSheet.cancel') }}
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/action-sheet/vue'
import { $prefix, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/action-sheet/index.css'

export default {
  name: $prefix + 'ActionSheet',
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    modelValue: [Number, String],
    visible: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
