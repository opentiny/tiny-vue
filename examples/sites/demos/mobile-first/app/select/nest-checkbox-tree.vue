<template>
  <div class="demo-select">
    <tiny-select
      v-model="treeValue"
      value-field="id"
      :multiple="true"
      text-field="label"
      render-type="tree"
      :tree-op="treeOp"
      placeholder="请选择"
      @change="change"
      title="标题"
    ></tiny-select>
  </div>
</template>

<script>
import { Select } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select
  },
  data() {
    return {
      treeValue: [1, 4, 9, 10],
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
      }
    }
  },
  methods: {
    change() {
      console.log('change')
    }
  }
}
</script>

<style scoped>
.demo-select .tiny-select {
  width: 270px;
}
</style>
