<template>
  <div>
    <tiny-button @click="exportData">导出数据</tiny-button>
    <tiny-button @click="importData" :loading="loading">导入示例数据</tiny-button>
    <tiny-button @click="clearData" :loading="loading">清空数据</tiny-button>
    <tiny-mind-map class="demo-mind-map-date" ref="mindmap" @create="onCreate" v-model="exampleData" />
  </div>
</template>

<script>
import { MindMap, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyMindMap: MindMap,
    TinyButton: Button
  },
  data() {
    return {
      render: null,
      exampleData: {
        'nodeData': {
          'id': 'c9ee6647385c42de',
          'topic': '前端修仙指南',
          'root': true,
          'children': [
            {
              'topic': 'Handfirst html and css',
              'id': 'c9ee977189f3b1f1'
            },
            {
              'topic': '高程',
              'id': 'c9ee9a4e8f3f83c5'
            },
            {
              'topic': 'Javascript权威指南',
              'id': 'c9ee9b8e87958282'
            },
            {
              'topic': '算法 第四版',
              'id': 'c9eea19c874d331f'
            },
            {
              'topic': '大话数据结构',
              'id': 'c9eea8d788441a71'
            },
            {
              'topic': '算法导论',
              'id': 'c9eeac4c84aaba37'
            },
            {
              'topic': '编译原理',
              'id': 'c9eeadee881cf229'
            },
            {
              'topic': '宫水三叶的刷题日记',
              'id': 'c9eec88a85d8ff76'
            }
          ]
        }
      },
      loading: false
    }
  },
  methods: {
    onCreate(instance) {
      this.render = instance
    },
    exportData() {
      if (this.render) {
        Modal.message({ message: '数据已经输出于控制台, 请打开控制台查看', status: 'info' })

        console.log(this.render.getData())
      }
    },
    importData() {
      if (this.render) {
        const fn = async () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              if (this.render) {
                this.render.init(this.exampleData)
              }
              resolve(null)
            }, 1000)
          })
        }
        this.loading = true
        fn().finally(() => (this.loading = false))
      }
    },
    clearData() {
      this.loading = true
      const clearNodeData = {
        'nodeData': {
          'id': 'c9ee6647385c42de',
          'topic': '我的子节点被清空啦~',
          'root': true,
          'children': []
        }
      }
      try {
        this.render.init(clearNodeData)
        this.render.refresh(clearNodeData)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.demo-mind-map-date {
  width: 100%;
  height: 400px;
  margin-top: 10px;
}
</style>
