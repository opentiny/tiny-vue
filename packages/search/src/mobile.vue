<template>
  <div
    :class="[
      'tiny-mobile-search',
      { collapse: state.collapse },
      { focus: state.focus || (!state.focus && state.currentValue) }
    ]"
  >
    <div :class="['tiny-mobile-search__line']">
      <div class="tiny-mobile-search__box">
        <div class="tiny-mobile-search__input-btn">
          <a class="tiny-mobile-search__icon">
            <icon-search
              :style="{ fill: state.collapse && transparent ? '#fff' : '' }"
              @click="searchClick"
            />
          </a>
        </div>
        <input
          ref="input"
          v-model="state.currentValue"
          :style="
            transparent
              ? {
                  border: 'transparent',
                  background: state.collapse ? 'rgba(255,255,255,0.3)' : '#fff'
                }
              : {}
          "
          :placeholder="placeholder"
          type="text"
          class="tiny-mobile-search__input"
          @input="handleInput"
          @change="handleInput"
          @focus="state.focus = true"
          @blur="state.focus = false"
        />
        <span class="tiny-mobile-search__close-icon" v-show="state.currentValue">
          <icon-operationfaild @click="clear" />
        </span>
      </div>
      <label class="tiny-mobile-search__label">
        <a class="tiny-mobile-search__icon-label">
          <icon-search />
        </a>
        <span>{{ placeholder }}</span>
      </label>
    </div>
    <div
      v-show="state.focus || (!state.focus && state.currentValue)"
      class="tiny-mobile-search__present"
      @click="searchClick"
    >
      <span class="tiny-mobile-search__text">{{ buttonText }}</span>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/search/vue'
import { props, setup } from '@opentiny/vue-common'
import { iconSearch,iconOperationfaild } from '@opentiny/vue-icon'
import '@opentiny/vue-theme-mobile/search/index.css'

export default {
  props: [
    ...props,
    'transparent',
    'searchTypes',
    'placeholder',
    'buttonText',
    'modelValue'
  ],
  components: {
    IconSearch: iconSearch(),
    IconOperationfaild: iconOperationfaild()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
