<template>
  <tiny-company v-model="value" clearable :max="2" :disabled="false"></tiny-company>
</template>

<script lang="jsx">
import { TinyCompany } from '@opentiny/vue'

export default {
  components: {
    TinyCompany
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
