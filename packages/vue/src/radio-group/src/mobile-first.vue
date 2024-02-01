<template>
  <component
    :is="state.tag"
    :class="['inline-flex', vertical && 'flex-col']"
    role="radiogroup"
    @keydown="handleKeydown"
    ref="group"
    data-tag="tiny-radio-group"
  >
    <slot>
      <template v-if="type === 'radio'">
        <radio v-for="(item, index) in options" :display-only="displayOnly" :key="index" v-bind="item"></radio>
      </template>
      <template v-if="type === 'button'">
        <radio-button v-for="(item, index) in options" :key="index" v-bind="item"></radio-button>
      </template>
    </slot>
  </component>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/radio-group/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Radio from '@opentiny/vue-radio'
import RadioButton from '@opentiny/vue-radio-button'

export default defineComponent({
  components: {
    Radio,
    RadioButton
  },
  emits: ['change'],
  props: [
    ...props,
    'options',
    'modelValue',
    'type',
    'size',
    'fill',
    'textColor',
    'disabled',
    'vertical',
    'showTips',
    'displayOnly'
  ],
  inheritAttrs: false,
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
