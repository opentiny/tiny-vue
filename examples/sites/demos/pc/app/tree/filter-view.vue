<template>
  <div>
    <div class="option-row">
      <span> 视图：</span>
      <tiny-radio-group v-model="viewType">
        <tiny-radio label="tree">树视图 tree</tiny-radio>
        <tiny-radio label="plain">平铺视图 plain</tiny-radio>
      </tiny-radio-group>
    </div>
    <div class="option-row">
      <span> 平铺视图中是否显示辅助信息：</span>
      <tiny-radio-group v-model="showAuxi">
        <tiny-radio label="show"> 显示 </tiny-radio>
        <tiny-radio label="hide"> 隐藏 </tiny-radio>
      </tiny-radio-group>
    </div>
    <div class="option-row">
      <span> 搜索值：</span>
      <tiny-input v-model="filterText" @input="inputChange"></tiny-input>
    </div>

    <tiny-tree
      ref="treeRef"
      :data="data"
      :view-type="viewType"
      :filter-node-method="filterNodeMethod"
      default-expand-all
      :show-auxi="showAuxi === 'show'"
    >
      <!-- 屏蔽默认的后缀图标 -->
      <template #suffix> <div></div> </template>
    </tiny-tree>
  </div>
</template>

<script lang="jsx">
import { Tree, RadioGroup, Radio, Input } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree,
    TinyRadio: Radio,
    TinyRadioGroup: RadioGroup,
    TinyInput: Input
  },
  data() {
    return {
      viewType: 'tree',
      showAuxi: 'hide',
      filterText: '',
      data: [
        {
          id: '1',
          label: '数据 1',
          children: [{ id: '1-1', label: '数据 1-1', children: [{ id: '1-1-1', label: '数据 1-1-1' }] }]
        },
        {
          id: '2',
          label: '数据 2',
          children: [
            { id: '2-1', label: '数据 2-1' },
            { id: '2-2', label: '数据 2-2' }
          ]
        },
        {
          id: '3',
          label: '数据 3',
          children: [{ id: '3-1', label: '数据 3-1' }]
        }
      ]
    }
  },
  methods: {
    inputChange() {
      this.$refs.treeRef.filter(this.filterText)
    },
    // eslint-disable-next-line unused-imports/no-unused-vars
    filterNodeMethod(text, data, node) {
      return data.label.includes(text)
    }
  }
}
</script>

<style scoped>
.option-row {
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
}
.option-row > span {
  font-size: 18px;
}
.tiny-input {
  width: 150px;
}
</style>
