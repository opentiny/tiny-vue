<template>
  <tiny-company v-model="value" clearable :max="2" :disabled="false"></tiny-company>
</template>

<script lang="jsx">
import { Company } from '@opentiny/vue'

export default {
  components: {
    TinyCompany: Company
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
