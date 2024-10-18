<template>
  <tiny-floatbar class="custom">
    <ul>
      <li><a>本地引入</a></li>
      <li><a>按需引入</a></li>
      <li><a>搜索引入</a></li>
      <li><a>完整引入</a></li>
    </ul>
  </tiny-floatbar>
</template>

<script lang="jsx">
import { Floatbar } from '@opentiny/vue'

export default {
  components: {
    TinyFloatbar: Floatbar
  }
}
</script>

<style scoped>
.custom {
  position: static;
  width: 120px;
  background-color: #dbdbdb;
}
.custom li:hover {
  background: #fff;
}
</style>
