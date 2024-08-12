<template>
  <div>
    <tiny-fluent-editor v-model="value" :data-type="false" :data-upgrade="false"></tiny-fluent-editor>
    内容：<br />
    {{ value }}
  </div>
</template>

<script>
import { TinyFluentEditor } from '@opentiny/vue'

export default {
  components: {
    TinyFluentEditor
  },
  data() {
    return {
      value: '<p>Hello <strong>FluentEditor</strong>!</p>'
    }
  }
}
</script>
