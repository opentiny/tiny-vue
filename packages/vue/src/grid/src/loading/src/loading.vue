<template>
  <div class="tiny-grid-loading" :style="{ display: visible ? 'block' : 'none' }">
    <component v-if="loadingComponent" :is="loadingComponent" />
    <div v-else class="tiny-grid-loading__wrap tiny-loading__spinner" v-loading="visible" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import Loading from '@opentiny/vue-loading'

export default defineComponent({
  name: 'TinyGridLoading',
  directives: {
    loading: Loading.directive
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    loadingComponent: {
      type: Object,
      default: null
    }
  }
})
</script>
