<template>
  <div class="split-nest">
    <tiny-split v-model="split3">
      <template #left>
        <div class="demo-split-pane no-padding">
          <tiny-split v-model="split4" mode="vertical">
            <template #top>
              <div class="demo-split-pane">上面板</div>
            </template>
            <template #bottom>
              <div class="demo-split-pane">下面板</div>
            </template>
          </tiny-split>
        </div>
      </template>
      <template #right>
        <div class="demo-split-pane">右面板</div>
      </template>
    </tiny-split>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Split as TinySplit } from '@opentiny/vue'

const split3 = ref(0.5)
const split4 = ref(0.5)
</script>

<style scoped>
.split-nest {
  height: 200px;
  border: 1px solid #d9d9d9;
}

.demo-split-pane {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
}

.demo-split-pane.no-padding {
  height: 200px;
  padding: 0;
}
</style>
