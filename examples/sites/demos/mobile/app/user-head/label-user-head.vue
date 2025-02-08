<template>
  <tiny-user-head class="head-item" type="label" round v-model="text"></tiny-user-head>
</template>

<script setup>
import { ref } from 'vue'
import { TinyUserHead } from '@opentiny/vue-mobile'

const text = ref('文字')
</script>
