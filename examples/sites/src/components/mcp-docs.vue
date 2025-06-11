<template>
  <div class="mcp-list">
    <div class="mcp-title">
      <h2>{{ capName }} 组件的 MCP 工具</h2>
    </div>
    <tiny-grid :data="mcpInfo" row-id="name">
      <tiny-grid-column field="name" title="名称" width="180"> </tiny-grid-column>
      <tiny-grid-column field="param" title="参数类型" width="150"> </tiny-grid-column>
      <tiny-grid-column field="desc" title="工具描述"> </tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { getTinyVueMcpConfig } from '@opentiny/tiny-vue-mcp'
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'
import { camelize, capitalize } from '@vue/shared'
import { onMounted, computed } from 'vue'

const props = defineProps({
  name: String
})

const mcpTools = getTinyVueMcpConfig({ t: null })
const capName = computed(() => capitalize(camelize(props.name)))

const mcpInfo = computed(() => {
  const schema = mcpTools.components[capName.value]?.paramsSchema
  if (schema) {
    return Object.keys(schema).map((name) => {
      const item = schema[name]
      return {
        name,
        param: item._def?.innerType?._def?.typeName || '',
        desc: item._def?.description || ''
      }
    })
  }
  return null
})

onMounted(() => {})
</script>

<style scoped lang="less">
.mcp-list {
  padding-bottom: 150px;
}
.mcp-title {
  font-size: 16px;
  font-weight: bold;
  margin-top: 26px;
  margin-bottom: 26px;
}
</style>
