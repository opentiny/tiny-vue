<template>
  <div class="tiny-demo-v-loading">
    <tiny-button @click="handleClick">open loading</tiny-button>
    <div
      v-loading="isLoading"
      tiny-loading__text="v-loadingText"
      tiny-loading__background="rgba(0,0,0,0.6)"
      tiny-loading__custom-class="tiny-demo-loading-custom"
    >
      <div class="tiny-demo-v-loading-bg">
        v-loading
      </div>
    </div>
  </div>
</template>

<script>
import { Loading, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  directives: {
    loading: Loading.directive
  },
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    handleClick() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 5000)
    }
  }
}
</script>

<style scoped>
.tiny-demo-v-loading-bg {
  height: 120px;
  line-height: 120px;
  text-align: center;
}
</style>
