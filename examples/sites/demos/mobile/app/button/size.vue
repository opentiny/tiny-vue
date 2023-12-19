<template>
  <div class="button-wrap">
    <h3>按钮小尺寸</h3>
    <tiny-button type="primary" size="small">主要按钮</tiny-button>
    <tiny-button type="secondary" size="small">次要按钮</tiny-button>
    <tiny-button type="danger" size="small">危险按钮</tiny-button>
    <tiny-button type="text" size="small">文字按钮</tiny-button>
    <tiny-button type="icon" :icon="IconMail" size="small"></tiny-button>
    <tiny-button type="icon" :icon="IconMail" text="图标按钮" size="small"></tiny-button>
    <tiny-button type="primary" loading size="small">主要按钮-加载</tiny-button>
    <tiny-button type="secondary" :loading="loading" @click="btnClick" size="small">点我加载</tiny-button>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'
import { iconMail } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {
      IconMail: iconMail(),
      loading: false
    }
  },
  methods: {
    btnClick() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
body {
  overflow: hidden;
}
.button-wrap {
  padding: 0 10px;
  overflow-y: scroll;
  height: 100%;
}
.button-wrap .tiny-mobile-button {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
