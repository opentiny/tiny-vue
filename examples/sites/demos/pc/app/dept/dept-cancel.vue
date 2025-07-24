<template>
  <div class="demo-dept-class">
    <h3 class="title">基本用法</h3>
    <tiny-dept v-model="value" @cancel="cancel"></tiny-dept>
  </div>
</template>

<script lang="jsx">
import { TinyDept, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyDept
  },
  setup() {
    return {
      value: '022471'
    }
  },
  methods: {
    cancel() {
      TinyModal.message({ message: 'Dept 部门 cancel 事件' })
    }
  }
}
</script>

<style scoped>
.demo-dept-class {
  width: 280px;
}
.title {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
