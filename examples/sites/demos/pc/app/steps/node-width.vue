<template>
  <div class="tiny-steps-demo-space">
    <p>设置节点宽度为 200 像素：</p>
    <br />
    <tiny-steps space="200" :data="stepsData" :active="active" @click="onClick"></tiny-steps>
    <br /><br />
    <p>宽度自适应：</p>
    <br />
    <tiny-steps advanced flex :data="stepsData" :active="active" @click="onClick"></tiny-steps>
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
          name: 'name 属性内容 1',
          count: 0,
          status: 'done'
        },
        {
          name: 'name 属性内容 2',
          count: 9,
          status: 'doing'
        },
        {
          name: 'name 属性内容 3',
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
