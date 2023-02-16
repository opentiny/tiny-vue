<template>
  <div class="svgs-wrapper">
    <div v-for="(icon, index) in Svgs" :key="index" class="svgs-item">
      <component
        :is="icon.component"
        class="svgs-icon"
        style="width: 2em; fill: #000; height: 2em"
        @click="click(icon.name)"
      ></component>
      <span class="svgs-text">{{ icon.name }}</span>
    </div>
  </div>
</template>
<script>
import Svgs from '@opentiny/vue-icon'
import { Modal } from '@opentiny/vue'

export default {
  data() {
    return {
      Svgs: Object.keys(Svgs).map((name) => {
        return {
          name,
          component: Svgs[name]()
        }
      })
    }
  },
  mounted() {
    console.log('svg图标数量', Object.keys(Svgs).length)
  },
  methods: {
    click(name) {
      const input = document.createElement('input')
      input.value = name
      document.body.appendChild(input)
      input.select()
      document.execCommand('Copy')
      document.body.removeChild(input)
      Modal.message({
        message: `成功复制图标名称 ${name} `,
        status: 'info'
      })
    }
  }
}
</script>

<style scoped>
.svgs-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.svgs-icon {
  cursor: pointer;
  transition: all 0.4s;
}

.svgs-icon:hover {
  transform: scale(1.5, 1.5);
}

.svgs-item {
  width: 200px;
  text-align: center;
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
}

.svgs-text {
  padding-top: 8px;
  display: block;
  font-size: 14px;
  font-weight: 600;
}
</style>
