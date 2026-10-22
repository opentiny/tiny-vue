<script setup lang="ts">
import Button from '@opentiny/vue-button'

const invalidDisabled = 'wrong'
</script>

<template>
  <Button :disabled="invalidDisabled" :text="123" />
</template>
