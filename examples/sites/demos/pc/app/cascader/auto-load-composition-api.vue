<template>
  <tiny-cascader :props="propsAuto"></tiny-cascader>
</template>

<script setup>
import { ref } from 'vue'
import { Cascader as TinyCascader } from '@opentiny/vue'

let id = 0
const propsAuto = ref({
  lazy: true,
  lazyLoad(node, resolve) {
    const { level } = node

    setTimeout(() => {
      const nodes = Array.from({ length: level + 1 }).map(() => ({
        value: ++id,
        label: `选项${id}`,
        leaf: level >= 2
      }))
      // 通过调用 resolve 将子节点数据返回，通知组件数据加载完成
      resolve(nodes)
    }, 1000)
  }
})
</script>
