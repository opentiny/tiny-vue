<template>
  <div
    v-if="state.device === 'pc'"
    data-tag="tiny-select-dropdown tiny-popper"
    class="absolute z-[1001] border-none rounded bg-color-bg-1 shadow-md mt-1 box-border transition-[transform,opacity] ease-in-out duration-300 origin-top"
    :class="[state.popperClass, state.visible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0']"
    @mousedown.stop
    :style="{
      minWidth: state.minWidth,
      width: isDropInheritWidth ? state.minWidth : 'auto'
    }"
  >
    <slot></slot>
  </div>
  <div data-tag="tiny-select-dropdown tiny-popper" class="text-sm overflow-hidden" v-else>
    <!-- mask -->
    <div
      ref="mask"
      :class="
        m(
          'fixed left-0 right-0 top-0 bottom-0 w-full h-full bg-color-bg-7 transition-[opacity] ease-linear duration-100 opacity-0',
          { 'opacity-100': state.visible }
        )
      "
      @click="closeModal($event, true)"
      :style="{ 'z-index': state.zIndex }"
    ></div>
    <!-- main -->
    <div
      data-tag="tiny-select-dropdown-main"
      ref="drawerBox"
      :style="{ 'z-index': state.zIndex }"
      :class="
        m(
          'fixed w-full max-w-full flex flex-col justify-between bg-color-bg-1 shadow-sm border-color-border-separator max-h-[90%]',
          'min-h-[256px] left-0 bottom-0 border-t-0.5 rounded-t-lg transition-translate ease-linear duration-200 translate-y-full',
          { 'translate-y-0': state.visible }
        )
      "
    >
      <div data-tag="tiny-select-dropdown-header" class="px-4 pt-4">
        <div class="flex mb-3">
          <span v-if="state.showClose" class="inline-block h-6 leading-6 text-color-brand" @click="handleClear">{{
            t('ui.base.clear')
          }}</span>
          <p class="flex-1 text-base text-center leading-5">{{ title }}</p>
          <icon-close custom-class="w-5 h-5 ml-4  cursor-pointer" @click="closeModal($event, false)"></icon-close>
        </div>
        <div v-if="state.filterable" class="flex mb-3">
          <tiny-search
            v-model="state.query"
            :placeholder="searchPlaceholder"
            class="flex-1 px-0"
            @input="debouncedQueryChange"
            clearable
            big
          ></tiny-search>
          <span
            class="inline-block h-8 leading-8 text-color-text-secondary shrink-0 ml-3 text-base"
            @click="cancelSearch"
            >{{ t('ui.base.cancel') }}</span
          >
        </div>
      </div>
      <div data-tag="tiny-select-dropdown-body" class="px-4 pb-4 overflow-auto flex-1 scrollbar-size-0">
        <slot></slot>
      </div>
      <div
        v-if="state.multiple"
        data-tag="tiny-select-dropdown-footer"
        class="px-4 h-18 flex justify-between items-center bg-color-bg-1 shadow-[0_-2px_6px_rgba(0,0,0,0.08)] shrink-0"
      >
        <div>
          <span @click="toggleSelectedBox(true)" class="mr-2">{{
            t('ui.select.selectedNum', { num: state.selected.length })
          }}</span>
          <icon-chevron-up v-if="state.selected.length !== 0" custom-class="w-5 h-5 cursor-pointer"></icon-chevron-up>
        </div>
        <tiny-button type="primary" custom-class="w-28" @click="selectDropdownConfirm">{{
          t('ui.base.confirm')
        }}</tiny-button>
      </div>
      <div
        v-if="state.multiple"
        data-tag="tiny-selected-box"
        class="absolute left-0 bottom-0 flex flex-col w-full bg-color-bg-1 transition-all ease-linear duration-200 overflow-hidden z-[2001]"
        :class="[state.showSelectedBox ? 'h-full p-4' : 'h-0 p-0']"
      >
        <div data-tag="tiny-selected-box-header" class="flex h-10 justify-between items-center">
          <span class="inline-block h-6 py-1 text-color-brand" @click="deleteSelected('', true)">{{
            t('ui.base.clear')
          }}</span>
          <icon-close custom-class="w-5 h-5 ml-4 cursor-pointer" @click="toggleSelectedBox(false)"></icon-close>
        </div>
        <div data-tag="tiny-selected-box-body" class="flex-1 overflow-auto mb-3">
          <ul>
            <li
              v-for="(item, index) in state.selectedArr"
              :key="(item.value || '') + index"
              class="flex h-12 justify-between items-center"
            >
              <span class="mr-4 flex-1 leading-5 line-clamp-2">{{ item.label }}</span>
              <icon-error
                custom-class="w-5 h-5 cursor-pointer fill-color-none-hover"
                @click="deleteSelected(item)"
              ></icon-error>
            </li>
          </ul>
        </div>
        <div data-tag="tiny-selected-box-footer" class="text-center">
          <tiny-button type="primary" custom-class="w-full" @click="selectedBoxConfirm">{{
            t('ui.base.confirm')
          }}</tiny-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/select-dropdown/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import TinySearch from '@opentiny/vue-search'
import TinyButton from '@opentiny/vue-button'
import { iconClose, iconChevronUp, iconError } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    TinySearch,
    TinyButton,
    IconClose: iconClose(),
    IconChevronUp: iconChevronUp(),
    IconError: iconError()
  },
  props: [
    ...props,
    'placement',
    'boundariesPadding',
    'popperOptions',
    'visibleArrow',
    'appendToBody',
    'transformOrigin',
    'reference',
    'popper',
    'offset',
    'modelValue',
    'arrowOffset',
    'isDropInheritWidth',
    'title',
    'closeByMask',
    'searchPlaceholder'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
