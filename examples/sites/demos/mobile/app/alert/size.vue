<template>
  <div class="alert-wrap">
    <tiny-alert size="normal">size 为 normal (默认)</tiny-alert>
    <tiny-alert size="large">size 为 large</tiny-alert>
  </div>
</template>

<script setup>
import { TinyAlert } from '@opentiny/vue-mobile'
</script>

<style>
.alert-wrap .tiny-mobile-alert {
  margin-bottom: 8px;
}
</style>
