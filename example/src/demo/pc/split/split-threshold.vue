<template>
  <div class="demo-split">
    <tiny-split
      v-model="split1"
      mode="vertical"
      left-top-min="50px"
      right-bottom-min="80px"
    >
      <template #top>
        <div class="demo-split-pane">
          left-top-min 左上方拖动的最小高度为 50px
        </div>
      </template>
      <template #bottom>
        <div class="demo-split-pane">
          right-bottom-min 右下方拖动的最小高度为 80px
        </div>
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
      split1: 0.3
    }
  }
}
</script>

<style scoped>
.demo-split {
  height: 200px;
  border: 1px solid #d9d9d9;
  margin-bottom: 20px;
}

.demo-split-pane {
  padding: 10px;
}
</style>
