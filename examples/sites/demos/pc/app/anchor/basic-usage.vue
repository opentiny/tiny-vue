<template>
  <div>
    <div class="demo-top mb10">
      <tiny-switch v-model="type" true-value="line" false-value="dot"> </tiny-switch>
      <span class="demo-anchor">当前类型：{{ type }}</span>
    </div>
    <tiny-anchor :links="links" :type="type"></tiny-anchor>
  </div>
</template>

<script>
import { Anchor, Switch } from '@opentiny/vue'

export default {
  components: {
    TinyAnchor: Anchor,
    TinySwitch: Switch
  },
  data() {
    return {
      links: [
        {
          key: 'demonstrate',
          link: '#demonstrate',
          title: '演示',
          children: [
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
              key: 'on-change',
              link: '#change',
              title: 'change 事件'
            }
          ]
        },
        {
          key: 'api',
          link: '#API',
          title: 'API'
        }
      ],
      type: 'dot'
    }
  }
}
</script>

<style scoped>
.demo-top {
  display: flex;
  align-items: center;
}
.demo-anchor {
  margin-left: 8px;
  font-size: 14px;
}
</style>
