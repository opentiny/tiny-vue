<template>
  <div class="tiny-tag-input-demo">
    <tiny-tag-input v-model="data" :placeholder="placeholder"></tiny-tag-input>
    <tiny-tag-input
      v-model="data1"
      :placeholder="placeholder"
      tag-type="info"
      tag-effect="light"
      disabled
    ></tiny-tag-input>
    <tiny-tag-input v-model="data2" :placeholder="placeholder" tag-type="success" tag-effect="plain"></tiny-tag-input>
  </div>
</template>

<script>
import { TinyTagInput } from '@opentiny/vue'

export default {
  components: {
    TinyTagInput
  },
  data() {
    return {
      data: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'],
      data1: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'],
      data2: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'],
      maxTagCount: 3,
      placeholder: 'please enter a tag'
    }
  }
}
</script>

<style scoped>
.tiny-tag-input-demo .tiny-tag-input {
  margin-bottom: 20px;
}
</style>
