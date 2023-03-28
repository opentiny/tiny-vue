<template>
  <div>
    <tiny-tree-menu :load="loadNode" lazy></tiny-tree-menu>
  </div>
</template>

<script lang="jsx">
import { TreeMenu } from '@opentiny/vue'

export default {
  components: {
    TinyTreeMenu: TreeMenu
  },
  data() {
    return {
      count: 1
    }
  },
  methods: {
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ label: '表单组件' }, { label: '数据组件' }])
      }

      if (node.level > 3) return resolve([])

      let hasChild

      if (node.data.label === '指南') {
        hasChild = true
      } else if (node.data.label === '组件') {
        hasChild = false
      } else {
        hasChild = Math.random() > 0.5
      }

      setTimeout(() => {
        let data

        if (hasChild) {
          data = [
            {
              label: '表单组件' + this.count++
            },
            {
              label: '数据组件' + this.count++
            }
          ]
        } else {
          data = []
        }

        resolve(data)
      }, 500)
    }
  }
}
</script>
