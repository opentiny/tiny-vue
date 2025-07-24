<template>
  <div class="demo-autocomplete">
    <tiny-autocomplete v-model="value" disabled name="name" label="autocompleteLabel"></tiny-autocomplete>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyAutocomplete } from '@opentiny/vue'

const value = ref('')
</script>

<style scoped>
.demo-autocomplete .tiny-autocomplete {
  width: 270px;
}
</style>
