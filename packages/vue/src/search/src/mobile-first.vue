<template>
  <div
    :class="m(gcls('search-default'))"
    data-tag="tiny-search"
    @mouseenter="state.hovering = true"
    @mouseleave="state.hovering = false"
  >
    <div
      :class="
        m(
          gcls('pc-search-line'),
          gcls({ 'pc-search-line-focus': state.focus }),
          gcls({ 'pc-search-line-unfocus': !state.focus }),
          gcls({ 'pc-search-line-big': big }),
          gcls({ 'pc-search-line-unbig': !big })
        )
      "
      data-tag="tiny-search__line"
    >
      <transition name="mf-transition-search-line-fade" mode="out-in">
        <div
          v-show="!state.collapse && state.types.length"
          data-tag="tiny-search__present"
          :class="
            m(
              gcls('pc-search-present'),
              gcls({ 'pc-search-present-big': big }),
              gcls({ 'pc-search-present-unbig': !big })
            )
          "
          @click="showSelector"
        >
          <slot name="text" :slot-scope="state.searchValue">
            <span data-tag="tiny-search__text" :class="m(gcls('pc-search-present-pointer'))">{{
              state.searchValue['text']
            }}</span>
          </slot>
          <span data-tag="tiny-icon-outer" :class="m(gcls('pc-search-present-icon-outer'))">
            <icon-chevron-down data-tag="tiny-svg-size" :class="m(gcls('pc-search-present-icon-chevron-down'))" />
          </span>
        </div>
      </transition>
      <input
        ref="input"
        v-model="state.currentValue"
        :class="
          m(
            gcls({ 'pc-search-input-background-transparent': transparent }),
            gcls({ 'pc-search-input-background-transparent-collapse': transparent && state.collapse }),
            gcls('pc-search-input-default'),
            gcls({ 'pc-search-input-collapse': state.collapse }),
            gcls({ 'pc-search-input-uncollapse': !state.collapse }),
            gcls({ 'pc-search-input-collapse-big': state.collapse && big }),
            gcls({ 'pc-search-input-collapse-unbig': state.collapse && !big }),
            gcls({ 'pc-search-input-big': big }),
            gcls({ 'pc-search-input-unbig': !big })
          )
        "
        :style="
          transparent && state.collapse
            ? {
                background: 'rgba(255,255,255,0.3)'
              }
            : {}
        "
        :placeholder="placeholder"
        type="text"
        data-tag="tiny-search__input"
        @keyup.enter="searchEnterKey"
        @input="handleInput"
        @change="handleInput"
        @focus="state.focus = true"
        @blur="state.focus = false"
        @select.stop
        :tabindex="tabindex"
      />
      <transition name="mf-transition-icon-scale-in">
        <div
          data-tag="tiny-search__input-btn"
          :class="
            m(
              gcls('pc-search-input-btn-transtion'),
              gcls({ 'pc-search-input-btn-transtion-big': big }),
              gcls({ 'pc-search-input-btn-transtion-unbig': !big })
            )
          "
          v-if="state.showClear && !state.collapse"
        >
          <a
            :class="
              m(
                gcls('pc-search-input-btn-transtion-a-big'),
                gcls({ 'pc-search-input-btn-transtion-a': big }),
                gcls({ 'pc-search-input-btn-transtion-a-unbig': !big })
              )
            "
            @click="clear"
          >
            <icon-close
              @mousedown.prevent
              data-tag="tiny-svg-size"
              :class="m(gcls('pc-search-input-btn-transtion-svg-size'))"
            />
          </a>
        </div>
      </transition>
      <div
        data-tag="tiny-search__input-btn"
        :class="
          m(
            gcls('pc-search-input-btn'),
            gcls({ 'pc-search-input-btn-big': big }),
            gcls({ 'pc-search-input-btn-unbig': !big })
          )
        "
      >
        <a
          :class="
            m(
              gcls('pc-search-input-btn-a'),
              gcls({ 'pc-search-input-btn-a-big': big }),
              gcls({ 'pc-search-input-btn-a-unbig': !big })
            )
          "
          @click="searchClick"
        >
          <icon-search
            :class="
              m(
                gcls('pc-search-input-btn-icon-search'),
                gcls({ 'pc-search-input-btn-icon-search-transparent': state.collapse && transparent })
              )
            "
            data-tag="tiny-svg-size"
          />
        </a>
      </div>
    </div>
    <transition name="mf-transition-zoom-in-top" mode="out-in">
      <div
        v-show="state.show && state.types.length"
        ref="selector"
        data-tag="tiny-search__selector"
        :class="m(gcls('search-selector'))"
      >
        <div data-tag="tiny-search__selector-body" :class="m(gcls('search-selector-body'))">
          <ul data-tag="tiny-search__poplist">
            <li
              v-for="(item, index) in state.types"
              :key="index"
              data-tag="tiny-search__poplist-item"
              :class="
                m(
                  gcls('search-selector-poplist-item'),
                  gcls({ 'search-selector-poplist-item-big': big }),
                  gcls({ 'search-selector-poplist-item-unbig': !big })
                )
              "
              @click="changeKey(item)"
            >
              <slot name="poplist" :slot-scope="item">{{ item.text }} </slot>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <div :class="m(gcls('mobile-search'))">
      <tiny-input
        v-model="state.currentValue"
        @input="handleInput"
        clearable
        :input-class="m(gcls('mobile-search-input'), gcls({ 'mobile-search-input-bg-change': changeBgColor }))"
        :placeholder="placeholder"
      >
        <template #prefix>
          <icon-search
            :class="
              m(gcls('mobile-search-svg-size'), gcls({ 'mobile-search-svg-size-color': state.collapse && transparent }))
            "
            data-tag="tiny-svg-size"
          />
        </template>
      </tiny-input>
      <tiny-button
        type="text"
        @click="searchClick"
        :class="m(gcls('mobile-search-button'), gcls({ 'mobile-search-button-notShowButton': !showButton }))"
        >搜索</tiny-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/search/vue'
import { props, setup } from '@opentiny/vue-common'
import { IconChevronDown, IconSearch, IconClose } from '@opentiny/vue-icon'
import Input from '@opentiny/vue-input'
import Button from '@opentiny/vue-button'
import { classes } from './token'
import { defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [
    ...props,
    'mini',
    'big',
    'transparent',
    'searchTypes',
    'placeholder',
    'modelValue',
    'tabindex',
    'clearable',
    'isEnterSearch',
    'showButton',
    'changeBgColor'
  ],
  components: {
    IconChevronDown: IconChevronDown(),
    IconSearch: IconSearch(),
    IconClose: IconClose(),
    TinyInput: Input,
    TinyButton: Button
  },
  emits: ['change', 'update:modelValue', 'select', 'search', 'clear'],
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
