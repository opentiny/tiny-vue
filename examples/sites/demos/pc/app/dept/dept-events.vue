<template>
  <div class="demo-dept-class">
    <tiny-dept v-model="value" @change="change" @open="open"></tiny-dept>
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
    open() {
      TinyModal.message('打开弹出框')
    },
    change(value) {
      TinyModal.message({ message: '改变的部门值：' + value, status: 'info' })
    }
  }
}
</script>

<style scoped>
.demo-dept-class {
  width: 280px;
}
</style>
