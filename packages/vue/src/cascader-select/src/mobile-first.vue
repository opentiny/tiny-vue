<template>
  <div data-tag="tiny-mobile-cascader-select">
    <tiny-action-sheet
      :custom-class="m('rounded-t-lg bg-color-bg-1', customClass)"
      :lock-scroll="lockScroll"
      :visible="state.actionSheetVisible"
      @update:visible="state.actionSheetVisible = $event"
    >
      <template #header-left>
        <slot name="header-left"></slot>
      </template>
      <div
        data-tag="tiny-mobile-cascader-select-body"
        class="w-full h-max rounded-t-lg bg-color-bg-1 select-none overflow-hidden"
        @click.stop
      >
        <div
          data-tag="tiny-mobile-cascader-select-selectpanel"
          ref="selectPanel"
          :class="m('w-full h-max grid', panelCustomClass)"
        >
          <div data-tag="tiny-cascader-select-picker" class="relative text-sm">
            <slot name="top"></slot>
            <div data-tag="tiny-cascader-picker__column" :class="gcls('picker-column')" :style="columnStyle">
              <div
                v-for="(column, columnIndex) in columnsList"
                :key="columnIndex"
                data-tag="tiny-cascader-picker__columnitem"
                :class="gcls('picker-columnitem')"
              >
                <slot v-if="columnIndex > 0" name="split"></slot>
                <picker-column
                  ref="swipeRef"
                  :column="column"
                  :disabled="isDisabled"
                  :text-color="textColor"
                  :columns-type="columnsType"
                  :field-names="columnFieldNames"
                  :value="defaultValues[columnIndex]"
                  :default-value="defaultValue[columnIndex]"
                  :three-dimensional="threeDimensional"
                  :swipe-duration="swipeDuration"
                  :visible-option-num="visibleOptionNum"
                  :option-height="optionHeight"
                  :visible="state.actionSheetVisible"
                  @change="
                    (option) => {
                      changeHandler(columnIndex, option)
                    }
                  "
                ></picker-column>
              </div>
            </div>

            <slot name="default"></slot>
          </div>
        </div>
        <div class="w-full h-11 mt-4 flex justify-center items-center" data-tag="tiny-mobile-cascader-select-button">
          <tiny-button
            type="primary"
            size="large"
            :custom-class="
              m(
                'h-10 sm:h-10 w-full sm:w-auto mx-4 sm:mx-0 flex justify-center items-center',
                isDisabled ? 'bg-color-icon-disabled' : 'bg-color-icon-focus'
              )
            "
            :disabled="isDisabled"
            @click="confirm"
            >{{ t('ui.button.confirm') }}</tiny-button
          >
        </div>
      </div>
    </tiny-action-sheet>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/cascader-select/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { classes } from './token'
import PickerColumn from './Column.vue'
import ActionSheet from '@opentiny/vue-action-sheet'
import Button from '@opentiny/vue-button'

export default defineComponent({
  components: {
    PickerColumn,
    TinyActionSheet: ActionSheet,
    TinyButton: Button
  },
  emits: ['cancel', 'change', 'confirm', 'update:modelValue', 'update:visible'],
  props: [
    ...props,
    'modelValue',
    'options',
    'threeDimensional',
    'swipeDuration',
    'visibleOptionNum',
    'optionHeight',
    'fieldNames',
    'visible',
    'valueType',
    'valueField',
    'textField',
    'childrenField',
    'disabled',
    'textColor',
    'lockScroll',
    'customClass',
    'panelCustomClass',
    'type',
    'defaultValue'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
