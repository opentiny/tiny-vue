<template>
  <div>
    <div class="option-row">
      <span> 搜索值：</span>
      <tiny-input v-model="filterText" @input="inputChange"></tiny-input>
    </div>

    <tiny-tree
      ref="treeRef"
      :data="data"
      :nodeHeight="50"
      :treeHeight="400"
      :filter-node-method="filterNodeMethod"
      show-checkbox
      node-key="id"
    >
      <!-- 屏蔽默认的后缀图标 -->
      <template #suffix>
        <div></div>
      </template>
    </tiny-tree>
  </div>
</template>

<script lang="jsx">
import { Tree, Input } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree,
    TinyInput: Input
  },
  data() {
    return {
      filterText: '',
      showLine: 'hide',
      data: this.generateTreeData(100)
    }
  },
  methods: {
    inputChange() {
      this.$refs.treeRef.filter(this.filterText)
    },
    // eslint-disable-next-line unused-imports/no-unused-vars
    filterNodeMethod(text, data, node) {
      // console.log('过滤', text,data,node);
      
      return data.label.includes(text)
    },
    generateTreeData(num) {
      const data = []
      for (let i = 0; i < num; i++) {
        const children = []
        for (let j = 0; j < Math.floor(Math.random() * 3) + 1; j++) {
          children.push({
            label: `数据 ${i}-${j}`,
            children: [], // 子节点可以继续递归生成,
            id: i.toString()
          })
        }
        data.push({
          label: `数据 ${i}`,
          children,
          id: i.toString()
        })
      }
      return data
    }
  }
}
</script>

<style>
.option-row {
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
}

.option-row>span {
  font-size: 18px;
}

.tiny-input {
  width: 150px;
}
</style>
