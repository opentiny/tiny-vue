<template>
  <tiny-fluent-editor v-model="content" disabled></tiny-fluent-editor>
</template>

<script>
import { TinyFluentEditor } from '@opentiny/vue'

export default {
  components: {
    TinyFluentEditor
  },
  data() {
    return {
      content: '{"ops":[{"insert":"Hello "},{"attributes":{"bold":true},"insert":"FluentEditor"},{"insert":"!"}]}'
    }
  }
}
</script>
