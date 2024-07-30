<template>
  <div class="tiny-steps-demo-space">
    <p>设置节点宽度为200像素：</p>
    <br />
    <tiny-steps space="200" :data="stepsData" :active="active" @click="onClick"></tiny-steps>
    <br /><br />
    <p>宽度自适应：</p>
    <br />
    <tiny-steps advanced flex :data="stepsData" :active="active" @click="onClick"></tiny-steps>
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
          status: 'doing'
        },
        {
          name: 'name属性内容3',
          count: 0,
          status: 'undo'
        }
      ],
      active: 1
    }
  },
  methods: {
    onClick(index, node) {
      this.active = index
      node.status = 'doing'
    }
  }
}
</script>

<style scoped>
.tiny-steps-demo-space p {
  margin: 16px 0;
}
</style>
