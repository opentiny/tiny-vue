<template>
  <tiny-steps space="200" :data="stepsData" :active="active" @click="onClick"></tiny-steps>
</template>

<script lang="jsx">
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
        },
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
