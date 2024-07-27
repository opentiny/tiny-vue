<template>
  <div>
    <tiny-fluent-editor v-model="content"></tiny-fluent-editor>
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
      content: ''
    }
  }
}
</script>
