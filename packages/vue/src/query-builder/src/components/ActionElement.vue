<template>
  <tiny-button v-bind="allProps" @click="handleOnClick">
    <slot>{{ disabledTranslation && disabled ? disabledTranslation.label : label }}</slot>
  </tiny-button>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/query-builder/vue'
import { defineComponent, setup } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'

export default defineComponent({
  components: {
    TinyButton: Button
  },
  props: {
    props: Object, // 自定义属性，优先级高，可覆盖其他已设置属性
    className: { type: String },
    handleOnClick: {
      type: Function,
      default: () => {
        return
      }
    },
    label: { type: String },
    title: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledTranslation: {
      type: Object || undefined
    },
    testID: {
      type: String
    }
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  },
  computed: {
    allProps() {
      const { className, title, disabled, disabledTranslation, testID, props } = this
      const commonClass = 'query-builder-button'
      return {
        class: className ? commonClass + ' ' + commonClass : commonClass,
        type: 'text',
        title: disabledTranslation && disabled ? disabledTranslation.title : title,
        disabled: disabled && !disabledTranslation,
        disabledTranslation,
        testID,
        ...props
      }
    }
  }
})
</script>
