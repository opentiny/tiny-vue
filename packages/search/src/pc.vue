<template>
  <div
    :class="['tiny-search', { mini: mini }, { collapse: state.collapse }]"
    @mouseenter="state.hovering = true"
    @mouseleave="state.hovering = false"
  >
    <div :class="['tiny-search__line', { focus: state.focus }]">
      <transition name="tiny-transition-search-line-fade" mode="out-in">
        <div
          v-show="!state.collapse && state.types.length"
          class="tiny-search__present"
          @click="showSelector"
        >
          <slot name="text" :slot-scope="state.searchValue">
            <span class="tiny-search__text">{{
              state.searchValue['text']
            }}</span>
          </slot>
          <span class="icon-outer">
            <icon-chevron-down class="tiny-svg-size" />
          </span>
        </div>
      </transition>
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
        class="tiny-search__input"
        @keyup.enter="searchEnterKey"
        @change="handleChange"
        @focus="state.focus = true"
        @blur="state.focus = false"
        @select.stop
        :tabindex="tabindex"
      />
      <transition name="tiny-transition-icon-scale-in">
        <div
          class="tiny-search__input-btn"
          v-if="state.showClear && !state.collapse"
        >
          <a @click="clear">
            <icon-close @mousedown.prevent class="tiny-svg-size" />
          </a>
        </div>
      </transition>
      <div class="tiny-search__input-btn">
        <a @click="searchClick">
          <icon-search
            :style="{ fill: state.collapse && transparent ? '#fff' : '' }"
            class="tiny-svg-size"
          />
        </a>
      </div>
    </div>
    <transition name="tiny-transition-zoom-in-top" mode="out-in">
      <div
        v-show="state.show && state.types.length"
        ref="selector"
        class="tiny-search__selector"
      >
        <div class="tiny-search__selector-body">
          <ul class="tiny-search__poplist">
            <li
              v-for="(item, index) in state.types"
              :key="index"
              class="tiny-search__poplist-item"
              @click="changeKey(item)"
            >
              <slot name="poplist" :slot-scope="item">{{ item.text }} </slot>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/search/vue'
import { props, setup } from '@opentiny/vue-common'
import { iconChevronDown, iconSearch, iconClose } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/search/index.css'

export default {
  props: [
    ...props,
    'mini',
    'transparent',
    'searchTypes',
    'placeholder',
    'modelValue',
    'tabindex',
    'clearable',
    'isEnterSearch'
  ],
  components: {
    IconChevronDown: iconChevronDown(),
    IconSearch: iconSearch(),
    IconClose: iconClose()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
