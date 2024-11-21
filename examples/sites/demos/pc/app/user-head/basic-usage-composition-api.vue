<template>
  <tiny-user-head type="icon" :model-value="tinyIconSmile"></tiny-user-head>
</template>

<script setup>
import { TinyUserHead } from '@opentiny/vue'
import { iconSmile } from '@opentiny/vue-icon'

const tinyIconSmile = iconSmile()
</script>
