<template>
  <ComponentDocs ref="cmpRef" :load-data="loadData" :app-mode="templateModeState.mode" :demo-key="demoKey">
    <template #header-right>
      <div class="ti-pt20 ti-pl48 ti-mb-36">
        <span class="cmp-mode-title">文档类型： </span>
        <tiny-button-group :data="optionsList" v-model="templateModeState.mode"></tiny-button-group>
      </div>
    </template>
  </ComponentDocs>
</template>

<script setup>
import { watch, computed, ref } from 'vue'
import { TinyButtonGroup, TinyNotify } from '@opentiny/vue'
import { fetchDemosFile, useTemplateMode } from '@/tools'
import ComponentDocs from './common.vue'
import { getWebdocPath } from './cmp-config'

const { templateModeState, staticPath, optionsList } = useTemplateMode()

const cmpRef = ref()
watch(
  () => templateModeState.mode,
  (newMode) => {
    if (cmpRef.value) {
      cmpRef.value.loadPage()
    }

    // 当切换到 mobile-first 模式时显示提示
    if (newMode === 'mobile-first') {
      TinyNotify({
        type: 'info',
        title: '温馨提示',
        message: '打开演练场支持查看大小屏多端效果',
        duration: 3000, // 3秒后自动关闭
        position: 'bottom-right'
      })
    }
  }
)

const demoKey = computed(() => (templateModeState.mode === 'mobile-first' ? 'mfDemo' : 'pcDemo'))

const baseUrl = import.meta.env.BASE_URL
const loadData = ({ cmpId, lang }) => {
  const promiseArr = [
    fetchDemosFile(`${staticPath.value}/${getWebdocPath(cmpId)}/webdoc/${cmpId}.${lang}.md`),
    import(
      /* @vite-ignore */
      `${baseUrl}@demos/apis/${getWebdocPath(cmpId) === 'chart' ? cmpId : getWebdocPath(cmpId)}.js`
    ),
    import(
      /* @vite-ignore */
      `${baseUrl}${staticPath.value}/${getWebdocPath(cmpId)}/webdoc/${cmpId}.js`
    )
  ]

  return Promise.all(promiseArr).then(([mdString, apisJson, demosJson]) => {
    return {
      mdString,
      apisJson: apisJson.default,
      demosJson: demosJson.default
    }
  })
}
</script>

<style scoped lang="less">
.cmp-mode-title {
  font-size: 18px;
  vertical-align: middle;
  font-weight: 600;
}
</style>
