<template>
  <div id="boxeight"></div>
</template>

<script setup lang="jsx">
import { onMounted } from 'vue'
import { Loading } from '@opentiny/vue'

onMounted(() => {
  Loading.service({
    lock: true,
    text: '指定 Loading 需要覆盖的 DOM 节点',
    target: '#boxeight', // 可传DOM节点对应ID名或类名字符串，也可以传入DOM对象，例如：domObj，let domObj = document.getElementById('boxeight')
    background: 'rgba(0, 0, 0, 0.8)'
  })
})
</script>

<style scoped>
#boxeight {
  height: 120px;
}
</style>
