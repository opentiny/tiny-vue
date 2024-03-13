<template>
  <div class="demo-loading">
    <tiny-button type="secondary" @click="handleClick" v-loading.lock.fullscreen="showLoading">
      指令方式加载全屏Loading
    </tiny-button>

    <tiny-button type="secondary" @click="handleClick2"> 静态方法加载全屏Loading </tiny-button>
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
      showLoading: false
    }
  },
  methods: {
    handleClick() {
      this.showLoading = true
      setTimeout(() => {
        this.showLoading = false
      }, 3000)
    },
    handleClick2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        tiny_mode: 'mobile'
      })
      setTimeout(() => {
        loading.close()
      }, 3000)
    }
  }
}
</script>

<style scoped>
.demo-loading {
  padding: 30px;
}

.demo-loading .tiny-mobile-button {
  width: 100%;
  margin-bottom: 30px;
}

#demo-loading {
  width: 100px;
  height: 100px;
}
</style>
