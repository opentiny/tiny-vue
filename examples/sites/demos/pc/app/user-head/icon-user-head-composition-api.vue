<template>
  <tiny-user-head v-model="tinyIconSmile" type="icon"></tiny-user-head>
</template>

<script setup>
import { TinyUserHead } from '@opentiny/vue'
import { iconSmile } from '@opentiny/vue-icon'

const tinyIconSmile = iconSmile()
</script>
