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
            <iframe ref="iframeRef" width="100%" height="100%" :src="iframeUrl" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </template>
  </ComponentDocs>
</template>

<script setup>
import { ref } from 'vue'
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
