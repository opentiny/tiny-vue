<template>
  <div>
    <div>场景1：下拉树（单选）</div>
    <br />
    <tiny-base-select
      v-model="treeValue1"
      value-field="id"
      text-field="label"
      render-type="tree"
      :tree-op="treeOp"
    ></tiny-base-select>
    <br />
    <br />
    <div>场景2：下拉树（多选）</div>
    <br />
    <tiny-base-select
      v-model="treeValue2"
      multiple
      value-field="id"
      text-field="label"
      render-type="tree"
      :tree-op="treeOp"
    ></tiny-base-select>
    <br />
    <br />
    <div>场景3：下拉树可搜索</div>
    <br />
    <tiny-base-select
      v-model="treeValue3"
      filterable
      :filter-method="filter"
      clearable
      value-field="id"
      text-field="label"
      render-type="tree"
      :tree-op="treeOp"
    ></tiny-base-select>
    <br />
    <br />
    <div>场景4：下拉树懒加载（单选）</div>
    <br />
    <tiny-base-select
      v-model="treeValue4"
      value-field="id"
      text-field="label"
      render-type="tree"
      :tree-op="treeOpLazy"
      placeholder="请选择"
    ></tiny-base-select>
    <br />
    <br />
    <div>场景5：下拉树懒加载（多选）</div>
    <br />
    <tiny-base-select
      v-model="treeValue5"
      value-field="id"
      text-field="label"
      render-type="tree"
      :tree-op="treeOpLazy"
      multiple
      placeholder="请选择"
    ></tiny-base-select>
  </div>
</template>

<script>
import { BaseSelect } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect: BaseSelect
  },
  data() {
    return {
      treeValue1: 10,
      treeValue2: [1, 9],
      treeValue3: '',
      treeValue4: 3,
      treeValue5: [1],
      treeOp: {
        data: [
          {
            id: 1,
            label: '一级 1',
            children: [
              {
                id: 4,
                label: '二级 1-1',
                children: [
                  {
                    id: 9,
                    label: '三级 1-1-1'
                  },
                  {
                    id: 10,
                    label: '三级 1-1-2'
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            label: '一级 2',
            children: [
              {
                id: 5,
                label: '二级 2-1'
              },
              {
                id: 6,
                label: '二级 2-2'
              }
            ]
          }
        ]
      },
      treeOpLazy: {
        lazy: true,
        load(node, resolve) {
          if (node.level === 0) {
            return resolve([
              {
                id: 3,
                label: '一级 3'
              }
            ])
          }
          if (node.level > 1) return resolve([])

          setTimeout(() => {
            const data = [
              {
                id: 1,
                label: '一级 1'
              },
              {
                id: 2,
                label: '一级 2',
                isLeaf: true
              }
            ]

            resolve(data)
          }, 500)
        }
      }
    }
  },
  methods: {
    filter(value, data) {
      if (!value) return true

      return data.label.includes(value)
    }
  }
}
</script>

<style scoped>
.tiny-select {
  width: 270px;
}
</style>
