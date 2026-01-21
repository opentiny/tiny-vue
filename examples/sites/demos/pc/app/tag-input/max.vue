<template>
  <div class="tiny-tag-input-demo">
    <tiny-tag-input v-model="data" :placeholder="placeholder" :max="max"></tiny-tag-input>
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
      max: 5,
      placeholder: 'enter up to 5 tags'
    }
  }
}
</script>

<style scoped>
.tiny-tag-input-demo .tiny-tag-input {
  margin-bottom: 20px;
}
</style>
