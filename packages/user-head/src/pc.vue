<template>
  <div class="tiny-user-head">
    <div
      :style="state.style"
      :class="['tiny-user-head__portrait', { min, round }, type]"
    >
      <slot>
        <component
          v-if="type === 'icon'"
          :is="state.internalValue"
          class="tiny-svg-size"
        />
        <span
          v-if="type === 'label'"
          :style="state.fontSize"
          :title="state.internalValue"
          >{{ state.label }}</span
        >
      </slot>
    </div>
    <div
      v-if="messageTotal"
      :class="[
        'tiny-user-head__message',
        { min, round, basic: messageType === 'basic' || messageType === 'icon' }
      ]"
    >
      {{ state.message }}
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/user-head/vue'
import { props, setup } from '@opentiny/vue-common'
import { iconUser } from '@opentiny/vue-icon'

export default {
  components: {
    IconUser: iconUser()
  },
  props: [
    ...props,
    'min',
    'round',
    'color',
    'backgroundColor',
    'type',
    'value',
    'messageTotal',
    'messageType',
    'messageUpperLimit'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
