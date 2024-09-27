<template>
  <div class="demo-split set">
    <tiny-split v-model="split1" mode="vertical">
      <template #top>
        <div class="demo-split-pane">上面板</div>
      </template>
      <template #bottom>
        <div class="demo-split-pane">下面板</div>
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
      split1: 0.3,
      split2: 0.4
    }
  },
  methods: {
    movestart() {
      Modal.message({ message: '拖拽开始', status: 'info' })
    },
    moving() {
      Modal.message({ message: '正在拖拽...', status: 'info' })
    },
    moveend() {
      Modal.message({ message: '拖拽结束', status: 'info' })
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

.line {
  width: 5px;
  height: 200px;
  background-color: black;
}
</style>
