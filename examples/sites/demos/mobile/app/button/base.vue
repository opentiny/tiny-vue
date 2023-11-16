<template>
  <div class="button-wrap">
    <h3>按钮类型</h3>
    <tiny-button type="primary">主要按钮</tiny-button>
    <tiny-button type="secondary">次要按钮</tiny-button>
    <tiny-button type="danger">危险按钮</tiny-button>
    <tiny-button type="text">文字按钮</tiny-button>
    <tiny-button type="icon" :icon="IconMail"></tiny-button>
    <tiny-button type="icon" :icon="IconMail" text="图标按钮"></tiny-button>

    <h3>按钮不可用</h3>
    <tiny-button type="primary" disabled>主要按钮不可用</tiny-button>
    <tiny-button type="secondary" disabled>次要按钮不可用</tiny-button>
    <tiny-button type="text" disabled>文字按钮不可用</tiny-button>
    <tiny-button type="icon" :icon="IconMail" disabled></tiny-button>
    <tiny-button type="icon" :icon="IconMail" text="图标按钮" disabled></tiny-button>

    <h3>按钮加载状态</h3>
    <tiny-button type="primary" loading>主要按钮-加载</tiny-button>
    <tiny-button type="secondary" :loading="loading" @click="btnClick">点我加载</tiny-button>
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

<script lang="jsx">
import { Button } from '@opentiny/vue'
import { iconDel, iconYes, iconEdit, iconMail, iconStarO, iconSearch } from '@opentiny/vue-icon'

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
