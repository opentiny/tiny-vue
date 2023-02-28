<template>
  <tiny-row>
    <tiny-col :span="10">
      <div id="basic-usage" style="height: 100vh; background: rgba(125, 0, 0, 0.1)">Basic Usage</div>
      <div id="set-container" style="height: 100vh; background: rgba(0, 125, 0, 0.1)">Set Container</div>
      <div id="event" style="height: 100vh; background: rgba(0, 0, 125, 0.1)">
        Event
        <div id="on-change" style="height: 100vh; background: rgba(0, 0, 125, 0.2)">On Change</div>
        <div id="link-click" style="height: 100vh; background: rgba(0, 0, 125, 0.3)">Link Click</div>
      </div>
    </tiny-col>
    <tiny-col :span="2">
      <tiny-anchor :links="links"></tiny-anchor>
    </tiny-col>
  </tiny-row>
</template>

<script>
import { Anchor, Row, Col } from '@opentiny/vue'
export default {
  components: {
    TinyAnchor: Anchor,
    TinyRow: Row,
    TinyCol: Col
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
            },
            {
              key: 'link-click',
              link: '#link-click',
              title: 'Link Click'
            }
          ]
        }
      ]
    }
  }
}
</script>
