<template>
  <div
    ref="option"
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
    @mousedown.stop=""
    :data-index="state.index"
    v-show="visible && state.visible"
    :class="
      m(
        'h-fit flex items-center justify-between rounded text-color-text-primary text-sm sm:text-xs',
        'min-h-[40px] sm:min-h-[32px] cursor-pointer group sm:hover:bg-color-bg-4 sm:active:bg-color-bg-3 pl-0 pr-3 sm:px-3 my-1 sm:m-1',
        {
          'text-color-brand bg-color-bg-1 sm:bg-color-fill-6': state.itemSelected && !disabled,
          'text-color-text-disabled cursor-not-allowed [&_svg]:fill-color-icon-disabled [&_svg_path:first-of-type]:fill-color-bg-3':
            disabled || state.groupDisabled || state.limitReached,
          'bg-color-bg-1 sm:bg-color-bg-4': state.hover,
          'text-color-text-disabled cursor-not-allowed': required
        },
        highlightClass
      )
    "
    data-tag="tiny-select-dropdown-item"
  >
    <span v-if="state.select.multiple" class="w-4 mr-2">
      <component
        :is="`icon-${state.selectCls}`"
        :class="
          m('fill-color-icon-secondary relative', {
            'group-hover:fill-color-brand-hover': state.hover,
            'fill-color-brand': state.itemSelected,
            'fill-color-brand-disabled': state.itemSelected && required
          })
        "
      />
    </span>
    <slot>
      <span
        class="inline-block flex-1 leading-5 overflow-hidden text-ellipsis whitespace-normal sm:whitespace-nowrap"
        >{{ state.currentLabel }}</span
      >
    </slot>
    <span
      v-if="!state.select.multiple && state.itemSelected && !disabled && !state.groupDisabled"
      class="inline-block sm:hidden w-4 ml-4 shrink-0"
    >
      <icon-finish custom-class="w-4 h-4 fill-color-brand"> </icon-finish
    ></span>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/option/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconCheck, iconCheckedSur, iconFinish } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    IconCheck: iconCheck(),
    IconCheckedSur: iconCheckedSur(),
    IconFinish: iconFinish()
  },
  props: [...props, 'value', 'label', 'created', 'disabled', 'events', 'visible', 'highlightClass', 'required'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
