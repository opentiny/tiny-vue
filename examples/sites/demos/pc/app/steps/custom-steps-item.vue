<template>
  <div class="demo-steps-custom-field">
    <tiny-steps :data="stepsData" name-field="reName" count-field="reCount" status-field="reStatus"></tiny-steps>
  </div>
</template>

<script>
import { TinySteps } from '@opentiny/vue'

export default {
  components: {
    TinySteps
  },
  data() {
    return {
      stepsData: [
        {
          reName: 'name 属性内容 1',
          reCount: 0,
          reStatus: 'done'
        },
        {
          reName: 'name 属性内容 2',
          reCount: 9,
          reStatus: 'done'
        },
        {
          reName: 'name 属性内容 3',
          reCount: 0,
          reStatus: 'doing'
        },
        {
          reName: 'name 属性内容 4',
          reCount: 5,
          reStatus: 'done'
        }
      ]
    }
  }
}
</script>

<style scoped>
.demo-steps-custom-field {
  padding: 20px;
  max-width: 50%;
  min-width: 700px;
}
</style>
