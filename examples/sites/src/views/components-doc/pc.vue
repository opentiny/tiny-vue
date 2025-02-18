<template>
  <ComponentDocs :load-data="loadData" app-mode="pc" demo-key="pcDemo" />
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
      `${baseUrl}@demos/apis/${getWebdocPath(cmpId) === 'chart' ? cmpId : getWebdocPath(cmpId)}.js`
    ),
    import(
      /* @vite-ignore */
      `${baseUrl}@demos/app/${getWebdocPath(cmpId)}/webdoc/${cmpId}.js`
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
