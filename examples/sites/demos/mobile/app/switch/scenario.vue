<template>
  <div>
    <tiny-list v-for="item of dataList" :key="item.id">
      {{ item.content }}
      <template #description>
        <span style="color: grey">{{ item.contentdes }}</span>
      </template>
      <template #suffix>
        <tiny-switch v-model="item.value"></tiny-switch>
      </template>
    </tiny-list>
  </div>
</template>

<script lang="jsx">
import { List, Switch } from '@opentiny/vue'

export default {
  components: {
    TinyList: List,
    TinySwitch: Switch
  },
  data() {
    return {
      dataList: [
        {
          id: 1,
          content: '主文本',
          contentdes: '',
          value: true
        },
        {
          id: 2,
          content: '主文本',
          contentdes: '此处是辅助说明文本',
          value: false
        }
      ]
    }
  }
}
</script>
