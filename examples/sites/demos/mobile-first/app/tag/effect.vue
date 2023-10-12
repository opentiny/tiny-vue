<template>
  <div>
    <span class="label">深色标签 </span>
    <tiny-tag v-for="item in items" :key="'tiny-tag2-' + item.label" :type="item.type" effect="dark">
      {{ item.label }}
    </tiny-tag>
    <br />
    <span class="label">浅色标签 </span>
    <tiny-tag v-for="item in items" :key="'tiny-tag1-' + item.label" :type="item.type" effect="light">
      {{ item.label }}
    </tiny-tag>
    <br />
    <span class="label">朴素标签 </span>
    <tiny-tag v-for="item in items" :key="'tiny-tag3-' + item.label" :type="item.type" effect="plain">
      {{ item.label }}
    </tiny-tag>
  </div>
</template>

<script>
import { Tag } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag
  },
  data() {
    return {
      // success / warning / alerting / error / info / default
      items: [
        { type: 'success', label: '标签一' },
        { type: 'warning', label: '标签二' },
        { type: 'alerting', label: '标签三' },
        { type: 'error', label: '标签四' },
        { type: 'info', label: '标签五' },
        { type: 'default', label: '标签六' }
      ]
    }
  }
}
</script>

<style scoped>
span {
  margin-right: 8px;
  margin-bottom: 8px;
  min-width: 33px;
}

.label {
  display: inline-block;
  width: 33px;
}
</style>
