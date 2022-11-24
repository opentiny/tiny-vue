<template>
  <div class="tiny-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/breadcrumb/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [...props, 'separator', 'separatorIcon'],
  provide() {
    return {
      breadcrumb: this
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
