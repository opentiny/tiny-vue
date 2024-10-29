<template>
  <tiny-dept v-model="value" @selected="selected"></tiny-dept>
</template>

<script lang="jsx">
import { TinyDept, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyDept
  },
  data() {
    return {
      value: '022471'
    }
  },
  methods: {
    selected(value) {
      TinyModal.message({ message: '下拉选项值改变为: ' + value, status: 'info' })
    }
  }
}
</script>
