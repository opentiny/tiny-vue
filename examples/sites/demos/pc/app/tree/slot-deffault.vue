<template>
  <tiny-tree :data="data5" :expand-on-click-node="false">
    <template #default="sourceData">
      <div class="custom-label">{{ sourceData.data.label }}</div>
    </template>

    <!-- 前缀插槽 -->
    <template #prefix="{ node }">
      <div class="prefix-slot" @click="click(node.label, '前缀插槽')">[前缀插槽]</div>
    </template>
    <!-- 后缀插槽 -->
    <template #suffix="{ node }">
      <div class="subfix-slot" @click="click(node.label, '后缀插槽')">[后缀插槽]</div>
    </template>
  </tiny-tree>
</template>

<script lang="ts">
import { Tree, Modal } from '@opentiny/vue'

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
  },
  methods: {
    click(msg, slotName) {
      Modal.message(`[${slotName}] 节点名称：${msg}`)
    }
  }
}
</script>

<style scoped>
.custom-label {
  color: #333;
}

:deep(.is-current > .tiny-tree-node__content) svg {
  fill: #5e7ce0;
}

:deep(.is-current > .tiny-tree-node__content) .custom-label {
  color: #5e7ce0;
  font-weight: 500;
}

.prefix-slot {
  margin-left: 8px;
}

.subfix-slot {
  margin-left: 8px;
}
</style>
