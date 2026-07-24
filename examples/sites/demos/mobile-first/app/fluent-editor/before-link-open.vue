<template>
  <div>
    <tiny-fluent-editor v-model="content" :before-link-open="handleBeforeLinkOpen"></tiny-fluent-editor>
    <div class="fluent-editor-demo__before-link-open__tip">
      点击编辑器中的链接，会弹出确认框。点击「确定」将打开链接，点击「取消」将拦截跳转。
    </div>
  </div>
</template>

<script>
import TinyFluentEditor from '@opentiny/vue-fluent-editor'
import { TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyFluentEditor
  },
  data() {
    return {
      content:
        '{"ops":[{"insert":"点击访问 "},{"attributes":{"link":"https://opentiny.design"},"insert":"OpenTiny 官网"},{"insert":" 了解更多。"}]}'
    }
  },
  methods: {
    handleBeforeLinkOpen({ url }) {
      return TinyModal.confirm(`即将打开链接：${url}，是否允许跳转？`).then((res) => res === 'confirm')
    }
  }
}
</script>

<style scoped>
.fluent-editor-demo__before-link-open__tip {
  margin: 16px 0;
  color: #999;
  font-size: 14px;
}
</style>
