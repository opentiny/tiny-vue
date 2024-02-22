<template>
  <tiny-area v-model="area" placeholder="请选择"></tiny-area>
</template>

<script lang="jsx">
import { Area } from '@opentiny/vue'

export default {
  components: {
    TinyArea: Area
  },
  data() {
    return {
      area: ['3623', '4199', '649991', '661414']
    }
  }
}
</script>
