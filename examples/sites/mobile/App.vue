<template>
  <div class="mobile-preview">
    <component :is="showComponent" />
  </div>
</template>

<script setup lang="tsx">
import { shallowRef, onMounted, onBeforeUnmount } from 'vue'
import { TinyLoading } from '@opentiny/vue-mobile'
import { vueComponents } from '@/views/components-doc/cmp-config'

const showComponent = shallowRef(null)
const notFoundDemo = (demoPath) => <div>{`${demoPath}示例资源不存在，请检查文件名是否正确？`}</div>
const getComponent = async (demoPath) => {
  if (vueComponents[demoPath]) {
    const cmp = (await vueComponents[demoPath]()).default
    return cmp
  } else {
    return notFoundDemo(demoPath)
  }
}

let loadingService
const showLoading = () => {
  if (!loadingService) {
    loadingService = TinyLoading.service({
      lock: true
    })
  }
}
const closeLoading = () => {
  if (loadingService) {
    loadingService.close()
    loadingService = null
  }
}

const receiveMessage = ({ data }) => {
  const { from, component, demo } = data || {}
  if (!['tiny-vue-site'].includes(from)) {
    return
  }
  const demoPath = `${component}/${demo}`
  getComponent(demoPath).then((cmp) => {
    showComponent.value = cmp
  })
}

onMounted(() => {
  const searchObj = new URLSearchParams(location.search)
  const component = searchObj.get('component')
  const demo = searchObj.get('demo')
  window.addEventListener('message', receiveMessage, false)
  if (component && demo) {
    showLoading()
    const demoPath = `${component}/${demo}`
    getComponent(demoPath).then((cmp) => {
      showComponent.value = cmp
      closeLoading()
    })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('message', receiveMessage)
})
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
  ::-webkit-scrollbar {
    width: var(--tvm-size-scrollbar-width);
    height: var(--tvm-size-scrollbar-height);
  }

  ::-webkit-scrollbar-track-piece {
    background: var(--tvm-color-bg-scrollbar-track);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--tvm-color-bg-scrollbar-thumb);
    border-radius: var(--tvm-border-radius-scrollbar-thumb);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--tvm-color-bg-scrollbar-thumb-hover);
  }

  ::-webkit-scrollbar-thumb:active {
    background: var(--tvm-color-bg-scrollbar-thumb-active);
  }
}
</style>
