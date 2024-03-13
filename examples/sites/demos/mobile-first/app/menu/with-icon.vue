<template>
  <div>
    <tiny-menu :data="treeData"></tiny-menu>
  </div>
</template>

<script>
import { Menu } from '@opentiny/vue'
import { IconPlusCircle, IconPlusSquare, IconPreChecked, IconNode, IconNew } from '@opentiny/vue-icon'
export default {
  components: {
    TinyMenu: Menu
  },
  data() {
    return {
      treeData: []
    }
  },
  created() {
    this.getData().then((data) => {
      this.treeData = data
    })
  },
  methods: {
    getData() {
      return new Promise((resolve) => {
        resolve([
          {
            id: 1,
            label: '首页',
            customIcon: IconPlusCircle()
          },
          {
            id: 2,
            label: '指南',
            customIcon: IconPlusSquare()
          },
          {
            id: 3,
            label: '规范',
            customIcon: IconPreChecked()
          },
          {
            id: 4,
            label: '教程',
            customIcon: IconNode()
          },
          {
            id: 5,
            label: '性能',
            customIcon: IconNew()
          },
          {
            id: 6,
            label: '组件',
            customIcon: IconNew(),
            children: [
              {
                id: 201,
                label: '引入组件',
                customIcon: IconNew(),
                children: [
                  { id: 20101, label: '按需引入' },
                  { id: 20102, label: '完整引入' }
                ]
              },
              { id: 202, label: '后端适配器' },
              { id: 203, label: '服务代理' },
              { id: 204, label: '构建部署' }
            ]
          }
        ])
      })
    }
  }
}
</script>
