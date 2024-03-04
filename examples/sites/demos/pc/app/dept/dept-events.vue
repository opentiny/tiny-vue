<template>
  <tiny-dept v-model="value" @change="change" @open="open"></tiny-dept>
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
    open() {
      Modal.message('打开弹出框')
    },
    change(value) {
      Modal.message({ message: '改变的部门值: ' + value, status: 'info' })
    }
  }
}
</script>
