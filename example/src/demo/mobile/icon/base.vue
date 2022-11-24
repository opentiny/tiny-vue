<template>
  <div class="svgs-wrapper">
    <div
      class="svgs-item"
      title="点击图标复制图标文本"
      v-for="name in Object.keys(Svgs)"
      :key="name"
    >
      <component
        :is="Svgs[name]()"
        class="svgs-icon"
        :style="{ height: '2em', width: '2em', fill: '#000' }"
        @click="clickIcon(name)"
      ></component>
      <span class="svgs-text">{{ name }}</span>
    </div>
  </div>
</template>
<script>
import Svgs from '@opentiny/vue-icon'

export default {
  data() {
    return {
      Svgs
    }
  },
  methods: {
    clickIcon(name) {
      const input = document.createElement('input')
      input.value = name
      document.body.appendChild(input)
      input.select()
      document.execCommand('Copy')
      document.body.removeChild(input)
    }
  }
}
</script>

<style scoped>
.svgs-wrapper {
  height: calc(100% - 0px);
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
}
.svgs-icon {
  cursor: pointer;
  transition: all 0.4s;
}

.svgs-icon:hover {
  transform: scale(1.5, 1.5);
}

.svgs-item {
  width: 33%;
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
  border-left: 1px solid #eee;
  border-top: 1px solid #eee;
  padding-top: 30px;
  padding-bottom: 20px;
  box-sizing: border-box;
}
.svgs-item:nth-child(3n) {
  border-right: 1px solid #eee;
}
.svgs-item:nth-last-child(1) {
  border-right: 1px solid #eee;
}
.svgs-item:nth-last-child(1),
.svgs-item:nth-last-child(2),
.svgs-item:nth-last-child(3) {
  border-bottom: 1px solid #eee;
}
.svgs-text {
  padding-top: 8px;
  display: block;
  font-size: 12px;
  font-weight: 600;
}
</style>
