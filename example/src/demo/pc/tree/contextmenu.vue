<template>
  <div>
    <tiny-tree
      :data="data5"
      :props="defaultProps"
      default-expand-all
      :show-contextmenu="true"
      ref="tree"
    >
      <template #contextmenu="{ data }">
        <div @click="add">
          <button>新增 {{ data.label }}</button>
          <br />
          <button>删除 {{ data }}</button>
          <br />
          <button>更新 {{ data.label }}</button>
        </div>
      </template>
    </tiny-tree>
  </div>
</template>

<script>
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
  },
  methods: {
    add(e) {
      this.$refs.tree.closeMenu()
      e.stopPropagation()
    }
  }
}
</script>
