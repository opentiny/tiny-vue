<template>
  <div class="demo-slide-bar-tag">
    <tiny-slide-bar v-model="list" :init-blocks="initBlocks" tag="div" sub-tag="div"></tiny-slide-bar>
  </div>
</template>

<script lang="jsx">
import { SlideBar } from '@opentiny/vue'

export default {
  components: {
    TinySlideBar: SlideBar
  },
  data() {
    return {
      initBlocks: 4,
      list: [
        { title: 'a', lang: 'en_US' },
        { title: 'b', lang: 'zh-CN' },
        { title: 'c', lang: 'en_US' },
        { title: 'd', lang: 'en_US' },
        { title: 'e', lang: 'en_US' },
        { title: 'f', lang: 'en_US' },
        { title: 'g', lang: 'en_US' },
        { title: 'h', lang: 'en_US' },
        { title: 'i', lang: 'en_US' }
      ]
    }
  }
}
</script>

<style>
.demo-slide-bar-tag .tiny-slide-bar .tiny-slide-bar__list > div li div {
  margin: 15px 0;
  font-size: 12px;
  color: #4e5e67;
}

.demo-slide-bar-tag .tiny-slide-bar .tiny-slide-bar__list > div li div:nth-child(2) {
  border-bottom: 1px solid #ebebeb;
}

.demo-slide-bar-tag .tiny-slide-bar div div div svg {
  float: right;
  margin: -6px 0 0 0;
  background: #fff;
  fill: #ebebeb;
}

.demo-slide-bar-tag .tiny-slide-bar .tiny-slide-bar__list > div {
  width: 23%;
  padding: 20px;
  float: left;
  margin-left: 2%;
  position: relative;
  border: 5px solid #fff;
}

.demo-slide-bar-tag .tiny-slide-bar .tiny-slide-bar__list > div:first-child {
  margin-left: 0;
}

.demo-slide-bar-tag .tiny-slide-bar .tiny-slide-bar__list > div:hover {
  border-color: rgba(153, 153, 153, 0.7);
}

.demo-slide-bar-tag .tiny-slide-bar .tiny-slide-bar__list > div > .icon-chevron-down {
  position: absolute;
  top: 98.8%;
  left: 50%;
  margin-left: -10px;
  font-size: 2em;
  width: 22px;
  display: none !important;
}

.demo-slide-bar-tag .tiny-slide-bar .tiny-slide-bar__list > div > .icon-chevron-down:before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-right: 5px solid rgba(153, 153, 153, 0.7);
  border-bottom: 5px solid rgba(153, 153, 153, 0.7);
  transform: rotate(45deg);
  background: #fff;
  top: -5px;
}

.demo-slide-bar-tag .tiny-slide-bar .tiny-slide-bar__list > div.tiny-slide-bar__select {
  border-color: rgba(153, 153, 153, 0.7);
}

.demo-slide-bar-tag .tiny-slide-bar .tiny-slide-bar__list > div.tiny-slide-bar__select div .tiny-icon {
  color: rgba(153, 153, 153, 0.7);
}

.demo-slide-bar-tag .tiny-slide-bar .tiny-slide-bar__list > div.tiny-slide-bar__select div:nth-child(2) {
  border-bottom: 1px solid rgba(153, 153, 153, 0.7);
}
</style>
