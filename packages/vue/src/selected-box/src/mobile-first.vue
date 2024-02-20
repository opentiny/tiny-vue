<template>
  <div
    data-tag="tiny-selected-box"
    class="h-full mx-2 grid grid-cols-1 grid-rows-[theme(spacing.9)_auto] bg-color-bg-1"
  >
    <div
      data-tag="tiny-selected-box-content"
      class="flex justify-between items-center text-xs text-color-text-primary px-2"
    >
      <div data-tag="tiny-selected-box-select" class="max-w-[theme(spacing.32)]">
        <slot name="select" :params="state.slotParams">
          <span class="cursor-pointer">{{ i18nSelected() }}</span>
        </slot>
      </div>
      <div data-tag="tiny-selected-box-clear" class="flex space-x-2 select-none text-color-brand">
        <slot name="button" :params="state.slotParams"></slot>
        <slot name="clear" :params="state.slotParams" :clear="handleClear">
          <div class="cursor-pointer" @click="handleClear">{{ t('ui.selectedBox.clear') }}</div>
        </slot>
      </div>
    </div>
    <div
      data-tag="tiny-selected-box-list"
      ref="list"
      :class="[
        'overflow-x-hidden overflow-y-auto text-xs text-color-text-primary',
        { 'line-through decoration-solid decoration-color-text-primary': state.inverse }
      ]"
    >
      <div
        v-for="(option, i) in state.select"
        :key="`o${i}-${state.refresh}`"
        :data-key="keyOption(option)"
        data-tag="tiny-selected-box-item"
        class="cursor-pointer hover:bg-color-bg-2 px-2 rounded-sm"
      >
        <div class="grid grid-cols-[auto_theme(spacing.6)]" data-tag="tiny-selected-box-option">
          <div class="truncate" data-tag="tiny-selected-box-truncate">
            <slot
              name="option"
              :params="state.slotParams"
              :option="option"
              :mouseenter="handleMouseenter"
              :mouseleave="handleMouseleave"
            >
              <div class="h-7 truncate translate-y-1">
                <div
                  class="truncate relative top-1/2 -translate-y-1/2"
                  @mouseenter="handleMouseenter"
                  @mouseleave="handleMouseleave"
                >
                  {{ textPrimary(option) }}
                </div>
              </div>
              <div v-if="state.showAuxi" class="h-7 truncate -translate-y-1">
                <div
                  class="truncate text-color-text-placeholder relative top-1/2 -translate-y-1/2"
                  @mouseenter="handleMouseenter"
                  @mouseleave="handleMouseleave"
                >
                  {{ textAuxi(option) }}
                </div>
              </div>
            </slot>
          </div>
          <div data-tag="tiny-selected-box-close">
            <slot name="close" :params="state.slotParams" :option="option" :close="handleDelete">
              <div
                data-tag="tiny-selected-box-icon"
                :class="[
                  'h-7 translate-y-1 flex items-center justify-end',
                  'fill-color-icon-primary hover:fill-color-icon-hover'
                ]"
              >
                <icon-close @click="handleDelete(option)"></icon-close>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <tiny-popover
      ref="popover"
      trigger="manual"
      class="hidden"
      :content="state.popoverContent"
      v-model="state.popoverVisible"
    ></tiny-popover>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/selected-box/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconClose } from '@opentiny/vue-icon'
import Popover from '@opentiny/vue-popover'

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
