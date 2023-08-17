<template>
  <tiny-user-head type="icon" :value="IconSmile"></tiny-user-head>
</template>

<script setup lang="jsx">
import { UserHead as TinyUserHead } from '@opentiny/vue'
import { iconSmile } from '@opentiny/vue-icon'

const IconSmile = iconSmile()
</script>
