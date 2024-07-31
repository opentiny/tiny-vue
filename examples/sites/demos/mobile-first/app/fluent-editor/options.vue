<template>
  <div>
    <tiny-fluent-editor v-model="content" :options="options"></tiny-fluent-editor>
    内容：<br />
    {{ content }}
  </div>
</template>

<script>
import TinyFluentEditor from '@opentiny/vue-fluent-editor'

export default {
  components: {
    TinyFluentEditor
  },
  data() {
    return {
      content: '',
      options: {
        placeholder: '请输入内容'
      }
    }
  }
}
</script>
