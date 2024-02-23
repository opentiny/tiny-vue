<template>
  <div class="tiny-infinite-list-wrapper">
    <ul v-infinite-scroll="load" class="list" :infinite-scroll-disabled="disabled" :infinite-scroll-delay="300">
      <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</template>

<script>
import InfiniteScroll from '@opentiny/vue-renderless/common/deps/infinite-scroll'

export default {
  directives: { InfiniteScroll },
  data() {
    return {
      count: 0,
      loading: false
    }
  },
  computed: {
    noMore() {
      return this.count >= 20
    },
    disabled() {
      return this.loading || this.noMore
    }
  },
  methods: {
    load() {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 1000)
    }
  }
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
