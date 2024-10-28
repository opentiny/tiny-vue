<template>
  <p>左右面板</p>
  <div class="split-v-model">
    <tiny-split v-model="split1" :collapsible="true" @collapsed-change="collapsedChangeHorizontal">
      <template #left>
        <div class="demo-split-pane">左面板</div>
      </template>
      <template #right>
        <div class="demo-split-pane">右面板</div>
      </template>
    </tiny-split>
  </div>
  <p>上下面板</p>
  <div class="demo-split">
    <tiny-split v-model="split2" mode="vertical" :collapsible="true" @collapsed-change="collapsedChangeVertical">
      <template #top>
        <div class="demo-split-pane">上面板</div>
      </template>
      <template #bottom>
        <div class="demo-split-pane">下面板</div>
      </template>
    </tiny-split>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Split as TinySplit } from '@opentiny/vue'

const split1 = ref(0.5)
const split2 = ref(0.5)

function collapsedChangeHorizontal(collapsed) {
  console.log(collapsed ? '已折叠' : '已展开')
}

function collapsedChangeVertical(collapsed) {
  console.log(collapsed ? '已折叠' : '已展开')
}
</script>

<style scoped>
.split-v-model {
  height: 200px;
}

.demo-split-pane {
  padding: 10px;
}

.demo-split {
  height: 200px;
  margin-bottom: 20px;
}
</style>
