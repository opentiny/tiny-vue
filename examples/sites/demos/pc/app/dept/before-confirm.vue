<template>
  <div class="demo-dept">
    <h3 class="title">基本用法</h3>
    <div class="content">
      <tiny-dept v-model="value" :before-confirm="beforeConfirm"></tiny-dept>
    </div>
  </div>
</template>

<script lang="jsx">
import { Dept, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyDept: Dept
  },
  setup() {
    return {
      value: '022471'
    }
  },
  methods: {
    beforeConfirm() {
      return new Promise((resolve, reject) => {
        Modal.confirm('确定关闭弹框？').then((res) => {
          res === 'confirm' ? resolve() : reject(new Error())
        })
      })
    }
  }
}
</script>

<style scoped>
.demo-dept .tiny-dept {
  width: 270px;
}
</style>
