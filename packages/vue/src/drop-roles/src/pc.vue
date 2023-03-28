<template>
  <tiny-select
    :size="size"
    v-model="state.selectedValue"
    :placeholder="placeholder"
    v-bind="f(state.attrs)"
    :popper-class="'tiny-drop-roles' + (popperClass ? ' ' + popperClass : '')"
    :popper-append-to-body="popperAppendToBody"
    @change="change"
  >
    <tiny-option v-for="item in state.options" :key="item.value" :label="item.label" :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <icon-administrator class="user-icon tiny-svg-size" />
    </tiny-option>
  </tiny-select>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/drop-roles/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'
import { IconAdministrator } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    TinySelect: Select,
    TinyOption: Option,
    IconAdministrator: IconAdministrator()
  },
  props: [...props, 'size', 'modelValue', 'placeholder', 'fetchRole', 'fetchCurrentRole', 'fields', 'popperClass', 'popperAppendToBody'],
  emits: ['change', 'render', 'update:modelValue'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
