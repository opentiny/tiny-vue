<template>
  <div class="index-bar-wrapper">
    <tiny-index-bar :index-list="indexList">
      <div v-for="item in indexList" :key="item">
        <tiny-index-bar-anchor :index="item"></tiny-index-bar-anchor>
        <div>内容 {{ item }}</div>
        <div>内容 {{ item }}</div>
        <div>内容 {{ item }}</div>
        <div>内容 {{ item }}</div>
      </div>
    </tiny-index-bar>
    <div class="btn" @click="addData">增加数据</div>
  </div>
</template>

<script lang="jsx">
import { IndexBar, IndexBarAnchor } from '@opentiny/vue'

export default {
  components: {
    TinyIndexBar: IndexBar,
    TinyIndexBarAnchor: IndexBarAnchor
  },
  data() {
    return {
      indexList: [],
      num: 8
    }
  },
  mounted() {
    this.indexList = Array.from(new Array(this.num), (ele, index) => String.fromCharCode(65 + index))
  },
  methods: {
    addData() {
      this.num += 2
      this.indexList = Array.from(new Array(this.num), (ele, index) => String.fromCharCode(65 + index))
    }
  }
}
</script>

<style scoped>
.index-bar-wrapper {
  width: 414px;
}

.btn {
  position: fixed;
  bottom: 50px;
  left: 50%;
  background: red;
  cursor: pointer;
}
</style>
