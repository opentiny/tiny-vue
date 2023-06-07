<template>
  <div>
    <tiny-search v-model="value" placeholder="请输入关键字搜索" clearable>
      <template #prefix>
        <icon-search />
      </template>
    </tiny-search>
    {{ value }}
  </div>
</template>

<script lang="jsx">
import { Search } from '@opentiny/vue'
import { iconSearch } from '@opentiny/vue-icon'

export default {
  components: {
    TinySearch: Search,
    IconSearch: iconSearch()
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
