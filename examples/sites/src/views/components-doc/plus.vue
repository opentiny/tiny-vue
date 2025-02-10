<template>
  <ComponentDocs :load-data="loadData" demo-key="demoId" />
</template>

<script setup>
import { fetchDemosFile } from '@/tools'
import ComponentDocs from './common.vue'
import { getWebdocPath } from './cmp-config'

const baseUrl = import.meta.env.BASE_URL
const loadData = ({ cmpId, lang }) => {
  const promiseArr = [
    fetchDemosFile(`@demos/app/${getWebdocPath(cmpId)}/webdoc/${cmpId}.${lang}.md`),
    import(
      /* @vite-ignore */
      `${baseUrl}@demos/apis/${cmpId}.js`
    ),
    import(
      /* @vite-ignore */
      `${baseUrl}@demos/app/${getWebdocPath(cmpId)}/webdoc/${cmpId}.js`
    )
  ]

  // 兼容ts文档, 如果是ts文档则不拉取demos配置
  if (['interfaces', 'types', 'classes'].includes(cmpId)) {
    promiseArr.pop()
  }

  return Promise.all(promiseArr).then(([mdString, apisJson, demosJson]) => {
    return {
      mdString,
      apisJson: apisJson.default,
      demosJson: demosJson?.default
    }
  })
}
</script>
