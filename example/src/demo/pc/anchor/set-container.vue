<template>
  <tiny-row>
    <tiny-col :span="10">
      <div id="container" class="scroll-container">
        <div id="basic-usage" class="basic-usage">Basic Usage</div>
        <div id="set-container" class="set-container">Set Container</div>
        <div id="event" class="event">
          Event
          <div id="on-change" class="on-change">On Change</div>
          <div id="link-click" class="link-click">Link Click</div>
        </div>
      </div>
    </tiny-col>
    <tiny-col :span="2">
      <tiny-anchor :links="links" containerId="#container" @link-click="handleClick" mark-class="is-active-anchor"></tiny-anchor>
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
  },
  methods: {
    handleClick(e, link) {
      e.preventDefault()
      console.log('link', link)
    }
  }
}
</script>

<style scoped>
.is-active-anchor {
  border: 1px solid red;
}
.scroll-container {
  height: 30vh;
  border: 2px solid #333;
  overflow: hidden;
}
.basic-usage {
  height: 100vh;
  background: rgba(125, 0, 0, 0.1);
}
.set-container {
  height: 100vh;
  background: rgba(0, 125, 0, 0.1);
}
.event {
  background: rgba(0, 0, 125, 0.1);
}
.on-change {
  height: 100vh;
  background: rgba(0, 0, 125, 0.2);
}
.link-click {
  height: 100vh;
  background: rgba(0, 0, 125, 0.3);
}
</style>
