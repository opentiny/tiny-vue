<template>
  <div class="tiny-slide-bar" @mousewheel.passive="mouseEvent" ref="wrapper">
    <icon-chevron-left
      :class="[state.showLeft ? '' : 'tiny-disabled']"
      class="tiny-svg-size icon-chevron-left"
      @click="leftClick"
    />
    <div class="tiny-slide-bar__content">
      <transition>
        <component
          :is="tag"
          class="tiny-slide-bar__list tiny-repeat rightAni-enter-active"
          :style="{ width: state.blockWrapper + 'px' }"
          ref="insider"
        >
          <component
            :is="subTag"
            v-for="(item, key) in modelValue"
            :key="key"
            :class="[state.currentIndex === key ? 'tiny-slide-bar__select' : '']"
            class="block"
            :style="{
              width: state.blockWidth + 'px',
              'margin-left': key === 0 ? 0 : state.blockMargin + 'px'
            }"
            @click="blockClick({ item, index: key })"
          >
            <ul>
              <li>
                <slot :slotData="item">
                  <div>{{ item.title }}</div>
                  <div>
                    <icon-radio class="tiny-svg-size"></icon-radio>
                  </div>
                  <div>{{ item.lang }}</div>
                </slot>
              </li>
            </ul>
          </component>
        </component>
      </transition>
    </div>
    <icon-chevron-right
      :class="[state.showRight ? 'tiny-disabled' : '']"
      class="tiny-svg-size icon-chevron-right"
      @click="rightClick"
    />
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/slide-bar/vue'
import { props, setup } from '@opentiny/vue-common'
import { iconChevronLeft, iconChevronRight, iconRadio } from '@opentiny/vue-icon'

export default {
  components: {
    IconChevronLeft: iconChevronLeft(),
    IconChevronRight: iconChevronRight(),
    IconRadio: iconRadio()
  },
  inheritAttrs: false,
  props: [...props, 'initBlocks', 'wheelBlocks', 'modelValue', 'tag', 'subTag'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
