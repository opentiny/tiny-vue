<template>
  <div class="demo-select">
    <tiny-select
      v-model="treeRadio"
      value-field="id"
      text-field="label"
      render-type="tree"
      :tree-op="treeOp"
      placeholder="请选择"
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
      treeRadio: 3,
      treeOp: {
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
  }
}
</script>

<style scoped>
.demo-select .tiny-select {
  width: 270px;
}
</style>
