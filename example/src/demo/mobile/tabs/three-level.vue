<template>
  <div class="tiny-mobile-tabs-three-level-demo">
    <tiny-tabs v-model="activeName1" :swipeable="true">
      <tiny-tab-item v-for="(state, key) in states" :key="key" :title="state.title" :name="state.name">
        <div v-for="(item, index) in list" :key="index" class="tab-item-demo">
          <tiny-button :class="[active === index ? 'is-active' : '']" @click="click(index)" round :reset-time="0"> {{ item }}</tiny-button>
        </div>
      </tiny-tab-item>
    </tiny-tabs>
  </div>
</template>

<script>
import { Tabs, TabItem, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTabs: Tabs,
    TinyTabItem: TabItem,
    TinyButton: Button
  },
  data() {
    return {
      activeName1: 'first',
      active: '',
      states: [
        {
          title: '标签1',
          name: 'first'
        },
        {
          title: '标签2',
          name: 'second'
        },
        {
          title: '标签3',
          name: 'third'
        }
      ],
      list: ['客户', '关注的客户', '最近访问', '近七天新增客户', '近七天访问最多的信息', '其他']
    }
  },
  methods: {
    click(index) {
      this.active = index
    }
  }
}
</script>

<style scoped>
.tiny-mobile-tabs-three-level-demo .tiny-tab-pane {
  display: flex;
  overflow: hidden;
}
.tiny-mobile-tabs-three-level-demo .tiny-mobile-tabs__content {
  height: 40px;
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
}
.tab-item-demo .tiny-mobile-button {
  min-width: 60px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  padding: 0 8px;
  margin-right: 12px;
}
.tab-item-demo .tiny-mobile-button.is-active {
  border: 1px solid #f36f64;
  color: #f36f64;
}
.tab-item-demo .tiny-mobile-button.is-active::before,
.tab-item-demo .tiny-mobile-button:active::before {
  opacity: 0;
}
</style>
