<template>
  <tiny-user-head type="icon" :value="IconSmile"></tiny-user-head>
</template>

<script setup lang="jsx">
import { TinyUserHead } from '@opentiny/vue-mobile'
import { iconSmile } from '@opentiny/vue-icon'

const IconSmile = iconSmile()
</script>
