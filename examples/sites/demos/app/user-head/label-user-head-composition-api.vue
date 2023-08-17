<template>
  <tiny-user-head class="head-item" type="label" round v-model="text"></tiny-user-head>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { UserHead as TinyUserHead } from '@opentiny/vue'

const text = ref('文字')
</script>
