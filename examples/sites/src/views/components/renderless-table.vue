<template>
  <div class="ti-mt20 ti-mb20" id="Renderless">
    <h2 class="ti-f18 ti-fw-normal ti-mt28 ti-mb20">Renderless</h2>
    <Grid border v-if="gridData" :loading="status === 'pending'" :data="gridData" class="mb-20">
      <template #empty>
        <div>
          <p style="font-size: 14px">{{ componentName }}组件的renderless表格尚未补充或支持</p>
          <Link style="margin-top: 8px; font-size: 14px" href="https://g ithub.com/opentiny/tiny-vue/issues/new/choose">
            点击反馈
          </Link>
        </div>
      </template>
      <grid-column title="Api 名称" field="apiName" />
      <grid-column title="返回类型" field="returnType" />
      <grid-column title="简介" field="description" />
    </Grid>
  </div>
</template>

<script lang="ts" setup>
import { Grid, GridColumn, Link } from '@opentiny/vue'
import { computed, ref } from 'vue'
import { getWebdocPath } from './cmpConfig'
import { getWord } from '../../i18n'

const props = defineProps<{
  cmpId: string
}>()
const data = ref<null | RenderlessTableData>(null)
const status = ref<'pending' | 'success' | 'error'>('pending')
const reason = ref(null)

const componentName = computed(() => getWebdocPath(props.cmpId ?? ''))

fetch(`/renderless-table-data.json`, { method: 'get' })
  .then((res) => {
    return res.json()
  })
  .then((res) => {
    data.value = res as RenderlessTableData
    localStorage.setItem('renderless-table', JSON.stringify(res))
    status.value = 'success'
  })
  .catch((err) => {
    status.value = 'error'
    reason.value = err
  })

const lang = getWord('zh', 'en')

const gridData = computed(() => {
  if (data.value) {
    const tableData = data.value[componentName.value]
    const gridDatas: GridDataItem[] = []
    const apiObject = tableData.api
    for (const exposedApi of tableData.exposedApi) {
      const apiName = exposedApi
      if (!(apiName in apiObject)) {
        continue
      }
      gridDatas.push({
        apiName,
        description: apiObject[apiName].description[lang] ?? '-',
        returnType: apiObject[apiName].returnType ?? 'any'
      })
    }
    return gridDatas
  }
  return null
})

interface GridDataItem {
  apiName: string
  description: string
  returnType: string
}

interface RenderlessTableData {
  [compName: string]: {
    exposedApi: string[]
    api: {
      [apiName: string]: {
        description: {
          zh: string
          en: string
        }
        returnType: string
      }
    }
  }
}
</script>
