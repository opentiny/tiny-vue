<template>
  <div>
    <tiny-pc v-if="mode === 'pc'"></tiny-pc>
    <tiny-mobile v-else></tiny-mobile>
  </div>
</template>

<script>
import TinyPc from './pc.vue'
import TinyMobile from './mobile.vue'
export default {
  components: {
    TinyPc,
    TinyMobile
  },
  setup() {
    const mode = new URL(location.href).searchParams.get('mode') || localStorage.getItem('vue-example-mode') || 'pc'
    return {
      mode
    }
  }
}
</script>
