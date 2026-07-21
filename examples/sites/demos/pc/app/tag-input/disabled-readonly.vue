<template>
  <div class="tiny-tag-input-demo">
    <span>disabled: </span><tiny-tag-input v-model="data" :placeholder="placeholder" disabled></tiny-tag-input>
    <span>readonly：</span><tiny-tag-input v-model="data1" :placeholder="placeholder" readonly></tiny-tag-input>
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
