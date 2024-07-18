<template>
  <div>
    <p class="demo-node">场景1：通过 setCurrentKey(key:string|number) 设置当前节点</p>
    <tiny-button @click="setCurrentKey" title="点击设置当前节点">setCurrentKey</tiny-button>
    <br />
    <p class="demo-node">场景2：通过 setCurrentNode(node:ITreeNode) 设置当前节点</p>
    <tiny-button @click="setCurrentNode" title="点击设置当前节点">setCurrentNode</tiny-button>
    <br />
    <p class="demo-node">
      场景3：通过 getCurrentKey() 获取当前节点的 key 为：<span class="current-node-key">{{ currentKey }}</span>
    </p>
    <tiny-button @click="getCurrentKey" title="点击获取当前节点的 key">getCurrentKey</tiny-button>
    <br />
    <p class="demo-node">
      场景4：通过 getCurrentNode() 获取当前节点的数据为：<span class="current-node">{{ currentNode }}</span>
    </p>
    <tiny-button @click="getCurrentNode" title="点击获取当前节点数据">getCurrentNode</tiny-button>

    <tiny-tree-menu
      ref="treeMenu"
      node-key="id"
      :data="treeData"
      :default-expanded-keys="expandedKeys"
    ></tiny-tree-menu>
  </div>
</template>

<script>
import { TreeMenu, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTreeMenu: TreeMenu,
    TinyButton: Button
  },
  data() {
    return {
      treeData: [
        {
          id: 100,
          label: '首页'
        },
        {
          id: 200,
          label: '指南',
          children: [
            {
              id: 201,
              label: '引入组件',
              children: [
                { id: 20101, label: '按需引入' },
                { id: 20102, label: '完整引入' }
              ]
            },
            { id: 202, label: '后端适配器' },
            { id: 203, label: '服务代理' },
            { id: 204, label: '构建部署' }
          ]
        },
        {
          id: 300,
          label: '组件',
          children: [
            {
              id: 301,
              label: '表单组件',
              children: [
                {
                  id: 30101,
                  label: 'Button 按钮',
                  url: 'button'
                },
                { id: 30102, label: 'Datepicker 日期', url: '' },
                { id: 30103, label: 'Dropdown 下拉框', url: '' },
                { id: 30104, label: 'DropTimes 下拉时间', url: '' },
                { id: 30105, label: 'Input 输入框', url: '' }
              ]
            },
            { id: 302, label: '数据组件' },
            { id: 303, label: '导航组件' },
            { id: 304, label: '业务组件' }
          ]
        },
        {
          id: 400,
          label: '教程',
          children: [
            {
              id: 401,
              label: '页面布局',
              children: [
                { id: 40101, label: '添加标签页', url: '' },
                { id: 40102, label: '标签页配置', url: '' }
              ]
            },
            {
              id: 402,
              label: '查询功能',
              children: [
                { id: 40201, label: '添加查询页面', url: '' },
                { id: 40202, label: '列表属性配置', url: '' },
                { id: 40203, label: '通讯录查询', url: '' }
              ]
            },
            {
              id: 403,
              label: '新增功能',
              children: [
                { id: 40301, label: '表单新增功能', url: '' },
                { id: 40302, label: '表单数据验证', url: '' }
              ]
            },
            {
              id: 404,
              label: '编辑功能',
              children: [
                { id: 40401, label: '开启编辑功能', url: '' },
                { id: 40402, label: '保存表格数据', url: '' }
              ]
            }
          ]
        },
        {
          id: 500,
          label: '规范'
        },
        {
          id: 600,
          label: '性能'
        },
        {
          id: 700,
          label: '案例'
        },
        {
          id: 800,
          label: '更新日志'
        }
      ],
      currentKey: '',
      currentNode: [],
      expandedKeys: []
    }
  },
  methods: {
    setCurrentKey() {
      this.$refs.treeMenu.setCurrentKey(20101)
      this.expandedKeys = [20101]
    },
    getCurrentKey() {
      this.currentKey = this.$refs.treeMenu.getCurrentKey()
    },
    setCurrentNode() {
      const targetNode = {
        id: 500,
        label: '规范'
      }
      this.$refs.treeMenu.setCurrentNode(targetNode)
      this.expandedKeys = [targetNode.id]
    },
    getCurrentNode() {
      this.currentNode = this.$refs.treeMenu.getCurrentNode()
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-button {
  margin: 0 10px 10px 0;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
.demo-node {
  margin-bottom: 4px;
}
</style>
