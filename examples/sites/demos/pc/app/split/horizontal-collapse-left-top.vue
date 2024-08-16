<template>
  <div class="split-v-model">
    <tiny-split v-model="split1" trigger-simple collapse-left-top>
      <template #left>
        <div class="demo-split-pane">左面板</div>
      </template>
      <template #right>
        <div class="demo-split-pane">右面板</div>
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
      split1: 0.5
    }
  }
}
</script>

<style scoped>
.split-v-model {
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
</style>
