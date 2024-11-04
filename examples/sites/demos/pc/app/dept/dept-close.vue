<template>
  <div class="demo-dept-class">
    <tiny-dept v-model="value" @close="close"></tiny-dept>
  </div>
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
    close() {
      TinyModal.message('关闭弹出框')
    }
  }
}
</script>

<style scoped>
.demo-dept-class {
  width: 280px;
}
</style>
