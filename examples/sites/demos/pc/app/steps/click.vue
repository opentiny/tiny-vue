<template>
  <div class="demo-steps-click">
    <tiny-steps :data="stepsData" :active="defaultActive" @click="normalClick"></tiny-steps>
    <div v-if="currentNode">
      <span>选中节点 index: {{ currentNode.index }}</span
      ><br />
      <span>选中节点 node: {{ currentNode.node }} </span>
    </div>
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
          name: 'Basic Info',
          count: 3,
          status: 'done'
        },
        {
          name: 'BOQ Info',
          count: 0,
          status: 'done'
        },
        {
          name: 'Involved Parties',
          count: 10,
          status: 'doing'
        },
        {
          name: 'Billing',
          count: 0,
          status: 'done'
        }
      ],
      defaultActive: 1,
      currentNode: null
    }
  },
  methods: {
    normalClick(index, node) {
      this.defaultActive = index
      this.currentNode = {
        index,
        node: JSON.stringify(node)
      }
    }
  }
}
</script>

<style scoped>
.demo-steps-click {
  padding: 20px;
  max-width: 50%;
  min-width: 700px;
}

.demo-steps-click > div:not(:last-child) {
  margin: 0 0 20px 0;
}

span {
  line-height: 1.5;
}
</style>
