<template>
  <div class="tiny-selected-box">
    <div class="tiny-selected-box__header">
      <div class="tiny-selected-box__header-select">
        <slot name="select" :params="state.slotParams">
          <span class="tiny-selected-box__header-select-label">{{ i18nSelected() }}</span>
        </slot>
      </div>
      <div class="tiny-selected-box__header-right">
        <slot name="button" :params="state.slotParams"></slot>
        <slot name="clear" :params="state.slotParams" :clear="handleClear">
          <div class="tiny-selected-box__header-right-label" @click="handleClear">{{ t('ui.selectedBox.clear') }}</div>
        </slot>
      </div>
    </div>
    <div ref="list" :class="['tiny-selected-box__list', { 'tiny-selected-box__list--inverse': state.inverse }]">
      <div v-for="(option, i) in state.select" :key="`o${i}-${state.refresh}`" :data-key="keyOption(option)" data-tag="tiny-selected-box-item" class="tiny-selected-box__item">
        <div class="tiny-selected-box__item-grid">
          <div class="tiny-selected-box__item-grid-left">
            <slot name="option" :params="state.slotParams" :option="option" :mouseenter="handleMouseenter" :mouseleave="handleMouseleave">
              <div class="tiny-selected-box__item-grid-left-label">
                <div class="tiny-selected-box__item-grid-left-label-pri" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
                  {{ textPrimary(option) }}
                </div>
              </div>
              <div v-if="state.showAuxi" class="tiny-selected-box__item-grid-left-text">
                <div class="tiny-selected-box__item-grid-left-text-aux" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
                  {{ textAuxi(option) }}
                </div>
              </div>
            </slot>
          </div>
          <div>
            <slot name="close" :params="state.slotParams" :option="option" :close="handleDelete">
              <div class="tiny-selected-box__item-grid-right">
                <icon-close @click="handleDelete(option)"></icon-close>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <tiny-popover ref="popover" trigger="manual" class="tiny-selected-box__popover" :content="state.popoverContent" v-model="state.popoverVisible"></tiny-popover>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/selected-box/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconClose } from '@opentiny/vue-icon'
import Popover from '@opentiny/vue-popover'
import '@opentiny/vue-theme/selected-box/index.less'

export default defineComponent({
  emits: ['change', 'clear', 'delete', 'drag'],
  props: [...props, 'inverse', 'total', 'select', 'config'],
  components: {
    IconClose: IconClose(),
    TinyPopover: Popover
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
