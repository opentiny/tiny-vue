<template>
  <div class="icon-demo">
    <tiny-tree :data="data" :icon="icon"></tiny-tree>
    <tiny-tree
      :data="data"
      show-checkbox
      :expand-icon="expandIcon"
      expand-icon-color="#c2c2c2"
      :shrink-icon="shrinkIcon"
      shrink-icon-color="#191919"
    >
      <template #prefix="{ node }">
        <component v-if="node.data.icon === 'file'" :is="tinyIconFile"></component>
        <component v-else :is="tinyIconEditorTable"></component>
      </template>
    </tiny-tree>
  </div>
</template>

<script lang="jsx">
import { Tree } from '@opentiny/vue'
import { iconPutAway, iconExpand, iconRightO, iconEditorTable, iconFile } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTree: Tree
  },
  data() {
    return {
      icon: iconRightO(),
      shrinkIcon: iconExpand(),
      expandIcon: iconPutAway(),
      tinyIconEditorTable: iconEditorTable(),
      tinyIconFile: iconFile(),
      data: [
        {
          id: '1',
          label: '数据 1',
          children: [
            { id: '1-1', label: '数据 1-1', children: [{ id: '1-1-1', label: '数据 1-1-1', icon: 'file' }] },
            { id: '1-2', label: '数据 1-2', icon: 'file' }
          ]
        },
        {
          id: '2',
          label: '数据 2',
          children: [
            { id: '2-1', label: '数据 2-1', icon: 'file' },
            { id: '2-2', label: '数据 2-2', icon: 'file' }
          ]
        },
        {
          id: '3',
          label: '数据 3',
          children: [{ id: '3-1', label: '数据 3-1', icon: 'file' }]
        }
      ]
    }
  }
}
</script>

<style scoped>
.icon-demo {
  display: flex;
  margin: 16px;
}
.icon-demo .tiny-tree {
  flex: 1;
}
</style>
