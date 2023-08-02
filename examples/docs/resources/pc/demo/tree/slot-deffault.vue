<template>
  <tiny-tree :data="data5">
    <template #default="sourceData">
      <div class="custom-label">
        {{ sourceData.data.label }}
      </div>
    </template>
  </tiny-tree>
</template>

<script lang="jsx">
import { Tree } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree
  },
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      data5: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.custom-label {
  color: #5e7ce0;
}
:deep(.is-current>.tiny-tree-node__content)  svg {
  fill: #fff;
}

:deep(.is-current>.tiny-tree-node__content) .custom-label {
  color: #fff;
  font-weight: 500;
  margin-left: 8px;
}
</style>
