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

<script setup lang="jsx">
import { ref, onMounted } from 'vue'
import { TinyIndexBar, TinyIndexBarAnchor } from '@opentiny/vue-mobile'

const indexList = ref([])
const num = ref(8)

onMounted(() => {
  indexList.value = Array.from(new Array(num.value), (ele, index) => String.fromCharCode(65 + index))
})

function addData() {
  num.value += 2
  indexList.value = Array.from(new Array(num.value), (ele, index) => String.fromCharCode(65 + index))
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
