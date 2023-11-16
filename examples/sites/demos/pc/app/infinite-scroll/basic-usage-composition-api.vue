<template>
  <ul v-infinite-scroll="load" class="tiny-infinite-list">
    <li v-for="i in count" :key="i" class="tiny-infinite-list-item">{{ i }}</li>
  </ul>
</template>

<script setup lang="ts">
import InfiniteScroll from '@opentiny/vue-renderless/common/deps/infinite-scroll'
import { ref } from 'vue'

const count = ref(0)
const vInfiniteScroll = InfiniteScroll

const load = () => {
  count.value += 2
}
</script>

<style>
.tiny-infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: auto;
}
.tiny-infinite-list .tiny-infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: lightblue;
  margin: 10px;
  color: goldenrod;
}
.tiny-infinite-list .tiny-infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
