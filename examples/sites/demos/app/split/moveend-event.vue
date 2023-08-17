<template>
  <div class="demo-split">
    <tiny-split v-model="split1" @moveend="moveend">
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
    moveend() {
      Modal.message('拖拽结束')
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
