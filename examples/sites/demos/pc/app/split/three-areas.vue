<template>
  <div class="split-nest">
    <tiny-split v-model="split1" trigger-simple collapse-right-bottom three-areas>
      <template #left>
        <tiny-split v-model="split2" trigger-simple collapse-left-top three-areas>
          <template #left>
            <div class="split-content">内容A区</div>
          </template>
          <template #right>
            <div class="split-content">内容B区</div>
          </template>
        </tiny-split>
      </template>
      <template #right>
        <div class="split-content">内容C区</div>
      </template>
    </tiny-split>
  </div>
</template>

<script>
import { Split } from '@opentiny/vue'

export default {
  components: {
    TinySplit: Split
  },
  data() {
    return {
      split1: 0.8,
      split2: 0.25
    }
  }
}
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
