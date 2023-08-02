<template>
  <tiny-button @click="add">增加</tiny-button>
  <tiny-progress class="circle-progress" type="circle" :percentage="value" status="exception" :width="150"></tiny-progress>
</template>

<script lang="jsx">
import { Progress, Button } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress,
    TinyButton: Button
  },
  data() {
    return { value: 10 }
  },
  methods: {
    add() {
      this.value += 10
    }
  }
}
</script>

<style scoped>
.circle-progress {
  margin-right: 20px;
}
</style>
