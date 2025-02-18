<template>
  <div class="split-nest">
    <tiny-split v-model="split1" trigger-simple collapse-right-bottom three-areas>
      <template #left>
        <tiny-split v-model="split2" trigger-simple collapse-left-top three-areas>
          <template #left>
            <div class="split-content">内容 A 区</div>
          </template>
          <template #right>
            <div class="split-content">内容 B 区</div>
          </template>
        </tiny-split>
      </template>
      <template #right>
        <div class="split-content">内容 C 区</div>
      </template>
    </tiny-split>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinySplit } from '@opentiny/vue'

const split1 = ref(0.8)
const split2 = ref(0.25)
</script>

<style scoped>
.split-nest {
  height: 300px;
}

.split-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
