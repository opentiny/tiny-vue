<template>
  <div style="width: 870px">
    <component :is="template"></component>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@opentiny/vue-common'

export default {
  props: {
    link: String
  },
  setup(props) {
    const mode = localStorage.getItem('vue-example-mode') || 'pc'
    return {
      template: defineAsyncComponent(() => import(/* @vite-ignore */ `./demo/${mode}/${props.link}`))
    }
  }
}
</script>
