<template>
  <div class="index-bar-wrapper">
    <tiny-index-bar :index-list="indexList" @change="indexChange" @select="selectIndex">
      <div v-for="item in indexList" :key="item">
        <tiny-index-bar-anchor :index="item"></tiny-index-bar-anchor>
        <div>内容 {{ item }}</div>
        <div>内容 {{ item }}</div>
        <div>内容 {{ item }}</div>
        <div>内容 {{ item }}</div>
      </div>
    </tiny-index-bar>
  </div>
</template>

<script setup lang="jsx">
import { ref, onMounted } from 'vue'
import { TinyIndexBar, TinyIndexBarAnchor, TinyModal } from '@opentiny/vue-mobile'

const indexList = ref([])

onMounted(() => {
  indexList.value = Array.from(new Array(26), (ele, index) => String.fromCharCode(65 + index))
})

function indexChange(value) {
  TinyModal.message({ message: 'change事件:' + value })
}

function selectIndex(value) {
  TinyModal.message({ message: 'select事件:' + value })
}
</script>

<style scoped>
.index-bar-wrapper {
  width: 414px;
}
</style>
