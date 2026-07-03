<template>
  <div>
    <tiny-flowchart :data="data" :config="config" />
  </div>
</template>

<script>
import { TinyFlowchart } from '@opentiny/vue'

const { createNode, createLink, createConfig } = TinyFlowchart

export default {
  components: { TinyFlowchart },
  data() {
    const config = createConfig()
    config.colors = { 1: '#52c41a', 2: '#1890ff', 3: '#d9d9d9', 4: '#ff4d4f' }
    config.background = '#f6ffed'
    config.font = '14px "Microsoft YaHei"'
    config.radius = 8
    config.thin = false
    config.iconWrapperSize = 32
    config.iconSize = 26
    config.iconSvgSize = 18
    config.labelWidth = 100
    config.labelHeight = 70
    config.labelSpacing = 12
    config.labelDateColor = '#666'
    config.listWidth = 70
    config.listIconSize = 24
    config.headSize = 24

    return {
      config,
      data: {
        nodes: [
          createNode('req', 1, '需求分析', '2024-06-01', null, 1, 1),
          createNode('dev', 2, '开发中', '2024-06-05', null, 1, 3),
          createNode('test', 3, '测试中', '', null, 1, 5),
          createNode('release', 3, '待发布', '', null, 1, 7)
        ],
        links: [
          createLink('req', 'dev', '0 r2', 1, 'solid'),
          createLink('dev', 'test', '0 r2', 2, 'solid'),
          createLink('test', 'release', '0 r2', 3, 'dashed')
        ]
      }
    }
  },
  created() {
    this.config.width = 860
    this.config.height = 260
  }
}
</script>
