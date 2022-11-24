<template>
  <div
    class="tiny-mobile-tabbar-item"
    :class="{ 'is-active': state.renderActive }"
    :style="{ color: state.renderColor }"
    @click="onClick"
  >
    <div class="tiny-mobile-tabbar-item__icon">
      <slot name="icon" :active="state.renderActive">
        <component :is="icon" :style="{ fill: state.renderColor }"></component>
      </slot>
      <div
        v-if="badge || dot"
        :class="['tiny-mobile-info', dot ? 'tiny-mobile-info--dot' : '']"
      >
        {{ state.info }}
      </div>
    </div>
    <div
      class="tiny-mobile-tabbar-item__text"
      :style="{ color: state.renderColor }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/tabbar-item/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [...props, 'url', 'replace', 'to', 'dot', 'icon', 'name', 'badge'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
