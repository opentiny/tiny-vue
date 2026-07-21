<template>
  <ComponentDocs
    :load-data="loadData"
    app-mode="mobile"
    demo-key="demoId"
    @single-demo-change="changeDemo"
    @load-page="pageInit"
  >
    <template #main-right>
      <div class="mobile-view-container">
        <!-- 移动端展示内容 -->
        <div class="phone-container">
          <div class="mobile-iframe-container">
            <iframe id="iframeDom" ref="iframeRef" width="100%" height="100%" :src="iframeUrl" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </template>
  </ComponentDocs>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue'
import { router } from '@/router.js'
import { fetchDemosFile } from '@/tools'
import ComponentDocs from './common.vue'
import { getWebdocPath } from './cmp-config'

const baseUrl = import.meta.env.BASE_URL
const loadData = ({ cmpId, lang }) => {
  const promiseArr = [
    fetchDemosFile(`@demos/app/${getWebdocPath(cmpId)}/webdoc/${cmpId}.${lang}.md`),
    import(
      /* @vite-ignore */
      `${baseUrl}@demos/app/${getWebdocPath(cmpId)}/webdoc/${cmpId}.js`
    )
  ]

  return Promise.all(promiseArr).then(([mdString, cmpJson]) => {
    return {
      mdString,
      apisJson: cmpJson.default,
      demosJson: cmpJson.default
    }
  })
}

const iframeUrl = ref('')
const iframeRef = ref()

const changeDemo = (demo) => {
  const { cmpId } = router.currentRoute.value.params
  const frameWindow = iframeRef.value.contentWindow
  frameWindow.postMessage({ from: 'tiny-vue-site', component: cmpId, demo: demo.codeFiles[0] })
  router.push(`#${demo.demoId}`)
}

const mobilePreview = import.meta.env.VITE_MOBILE_URL
const pageInit = (demo) => {
  const { cmpId } = router.currentRoute.value.params
  iframeUrl.value = `${mobilePreview}?component=${cmpId}&demo=${demo.codeFiles[0]}`
}

let observer = new MutationObserver(() => {
  const isDarkMode = document.documentElement.classList.contains('dark')
  if (isDarkMode) {
    onIframeLoad()
  } else {
    try {
      const iframeDocument = iframeRef.value.contentDocument || iframeRef.value.contentWindow.document
      iframeDocument.documentElement.classList.remove('dark')
      const linkElement = iframeDocument.getElementById('theme-style-link')
      if (linkElement) {
        linkElement.remove()
      }
    } catch (error) {
      console.error('无法访问 iframe:', error)
    }
  }
})

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class']
})

const onIframeLoad = () => {
  try {
    const iframeDocument = iframeRef.value.contentDocument || iframeRef.value.contentWindow.document
    const htmlElement = iframeDocument.documentElement

    // 添加 dark 类
    htmlElement.classList.add('dark')

    const link = iframeDocument.createElement('link')
    link.rel = 'stylesheet'
    link.href = '/public/static/css/mobile-dark-theme.css'
    link.id = 'theme-style-link'

    iframeDocument.head.appendChild(link)
  } catch (error) {
    console.error('无法访问 iframe:', error)
  }
}

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})
</script>

<style scoped lang="less">
.phone-container {
  width: 374px;
  height: 740px;
  border: 0;
  position: fixed;
  top: 200px;
  background: url('../../assets/images/mobile-container.png') no-repeat center top;
  background-size: contain;
  z-index: 1;
}

.mobile-view-container {
  width: 375px;
  margin: 0 0 0 20px;
}

.mobile-iframe-container {
  position: relative;
  top: 58px;
  left: 10px;
  width: 360px;
  height: 612px;
}
</style>
