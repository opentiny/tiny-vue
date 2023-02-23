<template>
  <tiny-dept v-model="value" @selected="selected"></tiny-dept>
</template>

<script>
import { Dept, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyDept: Dept
  },
  data() {
    return {
      value: '022471'
    }
  },
  methods: {
    selected(value) {
      Modal.message({ message: '下拉选项值改变为: ' + value, status: 'info' })
    }
  }
}
</script>
