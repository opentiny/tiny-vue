<template>
  <div class="content">
    <tiny-steps :data="stepsData"></tiny-steps>
  </div>
</template>

<script>
import { Steps } from '@opentiny/vue'

export default {
  components: {
    TinySteps: Steps
  },
  data() {
    return {
      stepsData: [
        {
          name: 'name属性内容1',
          count: 0,
          status: 'done'
        },
        {
          name: 'name属性内容2',
          count: 9,
          status: 'done'
        },
        {
          name: 'name属性内容3',
          count: 0,
          status: 'doing'
        },
        {
          name: 'name属性内容4',
          count: 5,
          status: 'done'
        }
      ]
    }
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
  max-width: 50%;
  min-width: 700px;
}
</style>
