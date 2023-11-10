<template>
  <tiny-anchor :links="links" @change="handleChange"></tiny-anchor>
</template>

<script>
import { Anchor, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyAnchor: Anchor
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
              title: 'Basic Usage'
            },
            {
              key: 'is-affix',
              link: '#is-affix',
              title: 'Is Affix'
            },
            {
              key: 'set-container',
              link: '#set-container',
              title: 'Set Container'
            },
            {
              key: 'on-change',
              link: '#on-change',
              title: 'On Change'
            }
          ]
        },
        {
          key: 'api',
          link: '#api',
          title: 'Api'
        }
      ]
    }
  },
  methods: {
    handleChange(link) {
      Modal.message(`change${link}`)
    }
  }
}
</script>
