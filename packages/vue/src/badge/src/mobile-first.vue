<template>
  <div :class="m(gcls('primary-status'), gcls({ 'dot-showleft': isDot && showLeft }))">
    <span v-if="data">{{ data }}</span>
    <slot v-else />
    <div
      v-if="!hidden && (state.content || state.content === 0 || isDot || showLeft)"
      :class="
        m(
          gcls('primary-status-child'),
          gcls({ 'dot-showleft-child': showLeft && isDot }),
          gcls(`type-${type || 'default'}`),
          gcls({ 'circle': !isDot }),
          gcls({ 'dot-default-icon-label': !showLeft && isDot && ['icon', 'label'].includes(type) }),
          gcls({ 'dot-default': !showLeft && isDot && !['icon', 'label'].includes(type) }),
          gcls({ 'circle-icon-label': !isDot && ['icon', 'label'].includes(type) })
        )
      "
    >
      <slot name="content">
        <a
          v-if="state.href"
          :class="m(gcls('state-href'))"
          :href="state.href"
          :target="target"
          rel="noopener noreferrer"
        >{{ state.content }}</a>
        <span :class="m(gcls('state-not-href'))" v-else>{{ state.content }}</span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/badge/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { classes } from './token'

export default defineComponent({
  props: [...props, 'showLeft', 'isDot', 'hidden', 'type', 'max', 'value', 'modelValue', 'href', 'target', 'data'],
  setup(props, context): any {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
