<template>
  <div class="demo-company-class">
    <tiny-company v-model="value" clearable :max="2" :disabled="false"></tiny-company>
  </div>
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

<style scoped>
.demo-company-class {
  width: 280px;
}
</style>
