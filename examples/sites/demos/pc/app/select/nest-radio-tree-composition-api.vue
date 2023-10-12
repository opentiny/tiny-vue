<template>
  <div class="demo-select">
    <tiny-select
      v-model="treeRadio"
      value-field="id"
      text-field="label"
      render-type="tree"
      :tree-op="treeOp"
      placeholder="请选择"
    ></tiny-select>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Select as TinySelect } from '@opentiny/vue'

const treeRadio = ref(10)
const treeOp = ref({
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
})
</script>

<style scoped>
.demo-select .tiny-select {
  width: 270px;
}
</style>
