<template>
  <ul v-infinite-scroll="load" class="tiny-infinite-list">
    <li v-for="i in count" :key="i" class="tiny-infinite-list-item">{{ i }}</li>
  </ul>
</template>

<script>
import InfiniteScroll from '@opentiny/vue-renderless/common/deps/infinite-scroll'

export default {
  directives: { InfiniteScroll },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    load() {
      this.count += 2
    }
  }
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
