<template>
  <div>
    <tiny-search v-model="value" placeholder="请输入关键字搜索" clearable>
      <template #prefix>
        <tiny-icon-search />
      </template>
    </tiny-search>
    <div class="mt10">{{ value }}</div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Search as TinySearch } from '@opentiny/vue'
import { iconSearch } from '@opentiny/vue-icon'

const value = ref('')

const TinyIconSearch = iconSearch()
</script>
