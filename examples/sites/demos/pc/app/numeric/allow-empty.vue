<template>
  <tiny-numeric v-model="value" allow-empty @change="onChange"></tiny-numeric>
</template>

<script lang="ts">
import { TinyNumeric, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      value: 1,
      step: 2
    }
  },
  methods: {
    onChange(val: number | undefined, oldVal: number | undefined) {
      TinyModal.message({ message: `${val} ${oldVal}`, status: 'info' })
    }
  }
}
</script>
