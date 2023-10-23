<template>
  <tiny-user-head v-model="imgUrl" type="image"></tiny-user-head>
</template>

<script setup>
import { ref } from 'vue'
import { UserHead as TinyUserHead } from '@opentiny/vue'

const imgUrl = ref('/static/images/ld.png')
</script>
