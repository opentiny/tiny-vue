<template>
  <div class="tiny-infinite-list-wrapper">
    <ul v-infinite-scroll="load" class="list" :infinite-scroll-disabled="disabled" :infinite-scroll-delay="300">
      <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</template>

<script setup lang="ts">
import InfiniteScroll from '@opentiny/vue-renderless/common/deps/infinite-scroll'
import { ref, computed } from 'vue'

const count = ref(0)
const loading = ref(false)
const vInfiniteScroll = InfiniteScroll

const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)

const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 1000)
}
</script>

<style>
.tiny-infinite-list-wrapper {
  height: 300px;
  text-align: center;
  overflow: auto;
}
.tiny-infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.tiny-infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: lightblue;
  color: goldenrod;
}
.tiny-infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
</style>
