<template>
  <div>
    <span class="inline-block w-16 h-7 leading-7">深色标签 </span>
    <tiny-tag v-for="item in items" :key="'tiny-tag2-' + item.label" :theme="item.theme" effect="dark">
      {{ item.label }}
    </tiny-tag>
    <br />
    <span class="inline-block w-16 h-7 leading-7 mt-2">浅色标签 </span>
    <tiny-tag v-for="item in items" :key="'tiny-tag1-' + item.label" :theme="item.theme" effect="light">
      {{ item.label }}
    </tiny-tag>
    <br />
    <span class="inline-block w-16 h-7 leading-7 mt-2">朴素标签 </span>
    <tiny-tag v-for="item in items" :key="'tiny-tag3-' + item.label" :theme="item.theme" effect="plain">
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
      // pink、purple、cyan
      items: [
        { theme: 'pink', label: '标签一' },
        { theme: 'purple', label: '标签二' },
        { theme: 'cyan', label: '标签三' }
      ]
    }
  }
}
</script>
