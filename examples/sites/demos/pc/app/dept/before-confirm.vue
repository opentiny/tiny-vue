<template>
  <div class="demo-dept-class">
    <h3 class="title">基本用法</h3>
    <tiny-dept v-model="value" :before-confirm="beforeConfirm"></tiny-dept>
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
    beforeConfirm() {
      return new Promise((resolve, reject) => {
        TinyModal.confirm('确定关闭弹框？').then((res) => {
          res === 'confirm' ? resolve() : reject(new Error('已取消关闭'))
        })
      })
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
