<template>
  <div class="demo-split">
    <tiny-split v-model="split1" @movestart="movestart">
      <template #left>
        <div class="demo-split-pane">左面板</div>
      </template>
      <template #right>
        <div class="demo-split-pane">右面板</div>
      </template>
    </tiny-split>
  </div>
</template>

<script lang="jsx">
import { Split, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySplit: Split
  },
  data() {
    return {
      split1: 0.3
    }
  },
  methods: {
    movestart() {
      Modal.message('拖拽开始')
    }
  }
}
</script>

<style scoped>
.demo-split {
  height: 200px;
  margin-bottom: 20px;
}

.demo-split-pane {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
}
</style>
