<template>
  <tiny-anchor :links="links" @on-change="handleChange"></tiny-anchor>
</template>

<script>
import { Anchor } from '@opentiny/vue'
export default {
  components: {
    TinyAnchor: Anchor
  },
  data() {
    return {
      links: [
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
          key: 'event',
          link: '#event',
          title: 'Event',
          children: [
            {
              key: 'on-change',
              link: '#on-change',
              title: 'On Change'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleChange(link) {
      console.log('change', link)
    }
  }
}
</script>
