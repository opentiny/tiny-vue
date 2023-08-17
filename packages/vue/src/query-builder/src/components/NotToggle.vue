<template>
  <tiny-checkbox
    v-model="value"
    :disabled="disabled"
    :data-testid="testID"
    :class="className"
    :title="title"
    @change="handleOnChange(value)"
    >{{ label }}</tiny-checkbox
  >
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import Checkbox from '@opentiny/vue-checkbox'

export default defineComponent({
  components: {
    TinyCheckbox: Checkbox
  },
  props: {
    className: {
      type: String
    },
    handleOnChange: {
      type: Function
    },
    title: {
      type: String,
      default: ''
    },
    label: {
      type: String
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    testID: {
      type: String
    }
  },
  setup(props: any) {
    return {
      value: props.checked
    }
  },
  watch: {
    checked() {
      this.value = this.checked
    }
  }
})
</script>
