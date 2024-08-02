<template>
  <div>
    <div>关键字：<tiny-input v-model="query" placeholder="输入关键字，观察下面的高亮"></tiny-input></div>
    <div v-highlight-query="query">
      <ul>
        <li v-for="line in list" :key="line">
          {{ line }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'
import { HighlightQuery as vHighlightQuery } from '@opentiny/vue-directive'

const query = ref('')
const list = ref(['一片一片又一片', '两片三片四五片', '六片七片八九片', '飞入芦花都不见'])
</script>

<style scoped>
.tiny-input {
  width: 280px;
  margin-bottom: 20px;
}
li {
  line-height: 2;
}
</style>
