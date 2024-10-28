<template>
  <tiny-switch v-model="value" :loading="loading"></tiny-switch>
  <tiny-switch v-model="value2" class="demo-switch" :loading="loading"></tiny-switch>
  <tiny-button size="mini" @click="change()"> changeValue </tiny-button>
</template>

<script>
import { Switch, Button } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch,
    TinyButton: Button
  },
  data() {
    return {
      value: true,
      value2: false,
      loading: true
    }
  },
  methods: {
    change() {
      this.loading = !this.loading
    }
  }
}
</script>

<style scoped>
.demo-switch {
  margin: 0 40px;
}
</style>
