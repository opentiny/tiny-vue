<template>
  <tiny-fluent-editor v-model="value" :data-type="false" :data-upgrade="false"></tiny-fluent-editor>
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
