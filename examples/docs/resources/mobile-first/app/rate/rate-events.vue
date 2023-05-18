<template>
  <tiny-rate v-model="rate1" show-text @change="onchange"></tiny-rate>
</template>

<script>
import { Rate, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyRate: Rate
  },
  data() {
    return {
      rate1: 2
    }
  },
  methods: {
    onchange(v) {
      Modal.message({ message: `选中的值是${v}`, status: 'info' })
    }
  }
}
</script>
