<template>
  <tiny-user-head type="image" :modelValue="imgUrl"></tiny-user-head>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyUserHead } from '@opentiny/vue-mobile'

const imgUrl = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`)
</script>
