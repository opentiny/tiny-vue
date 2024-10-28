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

<script>
import { Split } from '@opentiny/vue'

export default {
  components: {
    TinySplit: Split
  },
  data() {
    return {
      split1: 0.5,
      split2: 0.5
    }
  },
  methods: {
    collapsedChangeHorizontal(collapsed) {
      console.log(collapsed ? '已折叠' : '已展开')
    },
    collapsedChangeVertical(collapsed) {
      console.log(collapsed ? '已折叠' : '已展开')
    }
  }
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
