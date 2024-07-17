<template>
  <div>
    <tiny-button class="mb10" @click="changeDisabled"
      >点击切换为“{{ disabled ? '非禁用状态' : '禁用状态' }}”</tiny-button
    >
    <tiny-search v-model="value" placeholder="请输入关键字搜索" :disabled="disabled" clearable>
      <template #prefix>
        <icon-search />
      </template>
    </tiny-search>
    <tiny-search v-model="value" placeholder="请输入关键词" :disabled="disabled"></tiny-search>
    <div class="mt10">{{ value }}</div>
  </div>
</template>

<script lang="jsx">
import { Search, Button } from '@opentiny/vue'
import { iconSearch } from '@opentiny/vue-icon'

export default {
  components: {
    TinySearch: Search,
    TinyButton: Button,
    IconSearch: iconSearch()
  },
  data() {
    return {
      value: '',
      disabled: false
    }
  },
  methods: {
    changeDisabled() {
      this.disabled = !this.disabled
    }
  }
}
</script>
