<template>
  <tiny-user-head type="image" :value="imgUrl"></tiny-user-head>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { UserHead as TinyUserHead } from '@opentiny/vue'

const imgUrl = ref('localhost:3000/webnova/static/img/compontent.b2f0f5b.png')
</script>
