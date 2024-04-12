<template>
  <!-- TINY-TODO: tiny-select-group的类名命名不规范，应定在后续的某个版本去掉 -->
  <ul class="tiny-option-group tiny-select-group__wrap" v-show="state.visible">
    <li class="tiny-option-group__title tiny-select-group__title">
      {{ label }}
    </li>
    <li>
      <ul class="tiny-option-group__list tiny-select-group" ref="selectGroup">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/option-group/vue'
import { setup, $prefix, props, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/option-group/index.less'

export default defineComponent({
  name: $prefix + 'OptionGroup',
  componentName: 'OptionGroup',
  props: [...props, 'label', 'disabled'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
