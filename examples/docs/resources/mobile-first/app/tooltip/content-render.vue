<template>
  <tiny-tooltip :render-content="renderContent" :content="content" placement="bottom" effect="light">
    <tiny-button type="primary">
      文本自定义渲染
    </tiny-button>
  </tiny-tooltip>
</template>

<script>
import { Tooltip, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip,
    TinyButton: Button
  },
  data() {
    return {
      content: [
        '空山新雨后，天气晚来秋。',
        '明月松间照，清泉石上流。',
        '竹喧归浣女，莲动下渔舟。',
        '随意春芳歇，王孙自可留。'
      ].join('\n')
    }
  },
  methods: {
    renderContent(h, content) {
      return h(
        'div',
        {},
        content.split('\n').map((s, i) => h('div', { style: i % 2 === 0 ? '' : 'padding-left:12px' }, [s]))
      )
    }
  }
}
</script>
