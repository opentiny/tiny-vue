<template>
  <tiny-row>
    <tiny-col :span="10">
      <div id="container" class="scroll-container">
        <div id="section-1" class="section-1">Section 1</div>
        <div id="section-2" class="section-2">Section 2</div>
        <div id="section-3" class="section-3">
          Section 3
          <div id="section-3-1" class="section-3-1">Section 3-1</div>
          <div id="section-3-2" class="section-3-2">Section 3-2</div>
        </div>
      </div>
    </tiny-col>
    <tiny-col :span="2">
      <tiny-anchor :links="links" container-id="#container" @link-click="handleClick" mark-class="is-active-anchor"></tiny-anchor>
    </tiny-col>
  </tiny-row>
</template>

<script lang="jsx">
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
          key: 'section-1',
          link: '#section-1',
          title: 'Section 1'
        },
        {
          key: 'section-2',
          link: '#section-2',
          title: 'Section 2'
        },
        {
          key: 'section-3',
          link: '#section-3',
          title: 'Section 3',
          children: [
            {
              key: 'section-3-1',
              link: '#section-3-1',
              title: 'Section 3-1'
            },
            {
              key: 'section-3-2',
              link: '#section-3-2',
              title: 'Section 3-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleClick(e, link) {
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
.is-active-anchor {
  border: 1px solid red;
}
.scroll-container {
  height: 20vh;
  border: 2px solid #333;
  overflow: auto;
}
.section-1 {
  height: 100vh;
  background: rgba(125, 0, 0, 0.1);
}
.section-2 {
  height: 100vh;
  background: rgba(0, 125, 0, 0.1);
}
.section-3 {
  background: rgba(0, 0, 125, 0.1);
}
.section-3-1 {
  height: 100vh;
  background: rgba(0, 0, 125, 0.2);
}
.section-3-2 {
  height: 100vh;
  background: rgba(0, 0, 125, 0.3);
}
</style>
