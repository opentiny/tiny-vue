<template>
  <button
    v-show="state.show"
    ref="tinyFloatButton"
    class="tiny-float-button"
    @click="handleClick"
    :class="[
      type ? 'tiny-float-button--' + type : '',
      size ? 'tiny-float-button--' + size : '',
      {
        'is-disabled': state.buttonDisabled,
        'is-loading': loading,
        'is-icon': icon && !loading && (description || slots.default),
        'is-only-icon': icon && !loading && !(description || slots.default),
        'is-circle': shape === 'circle',
        'is-square': shape === 'square'
      }
    ]"
    :style="{ top, bottom, right, left }"
  >
    <icon-loading v-if="loading" class="tiny-icon-loading tiny-svg-size" />
    <component v-if="icon && !loading && !state.open" :is="icon" :class="{ 'is-text': description || slots.default }" />
    <icon-close v-if="!loading && state.open"></icon-close>
    <div v-if="description && !state.open">{{ description }}</div>
    <div ref="tinyFloatButtonOpen" class="tiny-float-button--open" v-if="state.open">
      <slot> </slot>
    </div>
  </button>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/float-button/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconLoading, iconClose } from '@opentiny/vue-icon'
import type { IFloatButtonApi } from '@opentiny/vue-renderless/types/float-button.type'
import '@opentiny/vue-theme/float-button/index.less'

export default defineComponent({
  emits: ['click', 'mouseout', 'mouseover'],
  props: [
    ...props,
    'type',
    'open',
    'description',
    'size',
    'icon',
    'resetTime',
    'tooltip',
    'loading',
    'disabled',
    'href',
    'target',
    'top',
    'bottom',
    'right',
    'left',
    'trigger',
    'shape',
    'backTop',
    'visibilityHeight',
    'element'
  ],
  components: { IconLoading: iconLoading(), IconClose: iconClose() },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IFloatButtonApi
  }
})
</script>
