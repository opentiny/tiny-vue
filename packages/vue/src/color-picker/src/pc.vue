<template>
  <div 
    :class="[{
      'tiny-color-picker__trigger': true
      },
      state.size ? 'tiny-color-picker--' + state.size : '',
    ]"
    @click="() => changeVisible(!state.isShow)"
  >
    <div
      class="tiny-color-picker__inner"
      :style="{
        background: state.triggerBg ?? ''
      }"
    >
      <IconChevronDown />
    </div>
    <Transition name="tiny-zoom-in-top">
      <color-select
        @confirm="onConfirm"
        @cancel="onCancel"
        @hue-update="onHueUpdate"
        @sv-update="onSVUpdate"
        v-model="state.hex"
        :visible="state.isShow"
        :alpha="alpha"
        :predefine="state.predefineStack.length > 0 ? state.predefineStack : undefined"
        :history="state.stack.length > 0 ? state.stack : undefined"
      />
    </Transition>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/color-picker/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconChevronDown } from '@opentiny/vue-icon'
import colorSelect from '@opentiny/vue-color-select-panel'
import '@opentiny/vue-theme/color-picker/index.less'

export default defineComponent({
  emits: ['update:modelValue', 'confirm', 'cancel'],
  props: [...props, 'modelValue', 'visible', 'alpha', 'predefine', 'history', 'size'],
  components: {
    IconChevronDown: IconChevronDown(),
    ColorSelect: colorSelect
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  },
})
</script>
