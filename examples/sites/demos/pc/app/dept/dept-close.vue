<template>
  <tiny-dept v-model="value" @close="close"></tiny-dept>
</template>

<script lang="jsx">
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
    close() {
      Modal.message('关闭弹出框')
    }
  }
}
</script>
