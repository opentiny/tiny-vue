<template>
  <tiny-button @click="exportData">导出数据</tiny-button>
  <tiny-button @click="importData" :loading="loading">导入示例数据</tiny-button>
  <tiny-button @click="clearData" :loading="loading">清空数据</tiny-button>
  <tiny-mind-map class="demo-mind-map-export-date" ref="mindmap" @create="onCreate" v-model="exampleData" />
</template>

<script setup>
import { MindMap as TinyMindMap, Button as TinyButton, Modal } from '@opentiny/vue'
import { ref } from 'vue'

const render = ref(null)
const exampleData = ref({
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
})
const loading = ref(false)
const onCreate = (instance) => {
  render.value = instance
}
const exportData = () => {
  if (render.value) {
    Modal.message({ message: '数据已经输出于控制台, 请打开控制台查看', status: 'info' })

    console.log(render.value.getData())
  }
}
const importData = () => {
  if (render.value) {
    const fn = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (render.value) {
            render.value.init(exampleData.value)
          }
          resolve(null)
        }, 1000)
      })
    }
    loading.value = true
    fn().finally(() => (loading.value = false))
  }
}
const clearData = () => {
  loading.value = true
  const clearNodeData = {
    'nodeData': {
      'id': 'c9ee6647385c42de',
      'topic': '我的子节点被清空啦~',
      'root': true,
      'children': []
    }
  }
  try {
    render.value.init(clearNodeData)
    render.value.refresh(clearNodeData)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.demo-mind-map-export-date {
  width: 100%;
  height: 400px;
  margin-top: 10px;
}
</style>
