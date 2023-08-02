<template>
  <tiny-tree :data="data5" :default-checked-keys="defaultcheckedkeys" node-key="id" default-expand-all show-radio
    :show-checkbox="false" :check-on-click-node="true" @check-change="onCheckChange" check-strictly></tiny-tree>
</template>

<script lang="jsx">
import { Tree, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree
  },
  data() {
    return {
      defaultcheckedkeys: [2],
      data5: [
        {
          id: 1,
          label: '一级 1',
          disabled: true,
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
          disabled: true,
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
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    onCheckChange(params) {
      Modal.message({ message: `${params.label}`, status: 'info' })
    }
  }
}
</script>
