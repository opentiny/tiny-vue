<template>
  <span class="tiny-breadcrumb__item">
    <span
      :class="['tiny-breadcrumb__inner', to ? 'is-link' : '']"
      ref="link"
      role="link"
    >
      <slot></slot>
    </span>
    <component
      v-if="breadcrumb.separatorIcon"
      :is="breadcrumb.separatorIcon"
      class="tiny-svg-size tiny-breadcrumb__separator-cls"
    />
    <span v-else class="tiny-breadcrumb__separator">{{
      breadcrumb.separator
    }}</span>
  </span>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/breadcrumb-item/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [...props, 'to', 'replace'],
  inject: ['breadcrumb'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
