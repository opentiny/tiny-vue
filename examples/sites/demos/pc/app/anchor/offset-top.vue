<template>
  <tiny-anchor :links="links" :offsetTop="500"></tiny-anchor>
</template>

<script>
import { TinyAnchor } from '@opentiny/vue'

export default {
  components: {
    TinyAnchor
  },
  data() {
    return {
      links: [
        {
          key: 'basic-usage',
          link: '#basic-usage',
          title: '基本用法'
        },
        {
          key: 'is-affix',
          link: '#is-affix',
          title: '固定模式'
        },
        {
          key: 'set-container',
          link: '#set-container',
          title: '滚动容器'
        },
        {
          key: 'offset-top',
          link: '#offset-top',
          title: '顶部偏移量'
        },
        {
          key: 'on-change',
          link: '#change',
          title: 'change 事件'
        }
      ]
    }
  }
}
</script>
