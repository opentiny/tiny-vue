<template>
  <div class="alert-wrap">
    <p>1. 当 <code>closable</code> 属性设成 false 时, 提示不可关闭。</p>
    <tiny-alert :closable="false"> 这个提示不可关闭 </tiny-alert>
    <br />

    <p>2. 当 <code>auto-hide</code> 属性设成 true 时, 提示将在2秒后自动关闭。</p>
    自动关闭: <tiny-switch v-model="autoHide"></tiny-switch>
    <tiny-alert :auto-hide="autoHide"> {{ autoHide ? '2秒后将自动关闭' : '点击开关查看自动关闭功能' }} </tiny-alert>
    <br />

    <p>3. 通过 <code>close-text</code> 属性自定义关闭按钮文本。</p>
    <tiny-alert :close-text="closeText"> close-text属性使用示例 </tiny-alert>
    <br />

    <p>4. 提示关闭时触发 <code>close</code> 事件：</p>
    <tiny-alert @close="close"> close-text属性使用示例 </tiny-alert>
  </div>
</template>

<script>
import { Alert, Switch } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert,
    TinySwitch: Switch
  },
  data() {
    return {
      autoHide: false,
      closeText: '自定义关闭',
    }
  },
  methods: {
    close() {
      console.log('已关闭！')
    }
  }
}
</script>

<style>
.alert-wrap .tiny-mobile-alert {
  margin-bottom: 8px;
}
</style>
