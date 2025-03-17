<template>
  <div class="ti-pt48 ti-pl48 ti-pr48">
    <div class="markdown-body">
      <h1 class="flex-center">
        组件特性列表
        <span class="component-count" :title="`${componentCount} components`">{{ componentCount }}</span>
        <span class="component-count" :title="`${featureCount} features`">{{ featureCount }}</span>
      </h1>

      <p>TinyVue 组件库包含 {{ componentCount }} 个灵活、易用、功能强大的组件。</p>

      <div><tiny-switch v-model="isCloud"></tiny-switch> 是否规范内组件</div>

      <div
        v-for="(component, componentIndex) of isCloud ? components.filter((item) => item.config.cloud) : components"
        :key="component.name"
      >
        <h3 class="flex-center">
          {{ componentIndex + 1 }}. {{ toUpperCamelCase(component.name) }}
          <span class="component-count mr-xs">{{ component.config.features?.length || 0 }}</span>
        </h3>
        <tiny-layout v-if="component.config.features" :cols="24">
          <tiny-row
            v-for="(groupFeature, index) of group(component.config.features)"
            :key="index"
            :style="{ marginTop: index === 0 ? '20px' : '0' }"
            :gutter="8"
          >
            <tiny-col v-for="feature of groupFeature" :key="feature.id" :span="8">
              {{ feature.name }}
            </tiny-col>
          </tiny-row>
        </tiny-layout>
      </div>
    </div>
  </div>
</template>

<script setup>
import { TinyLayout, TinyRow, TinyCol, TinySwitch } from '@opentiny/vue'
import { onMounted, ref } from 'vue'

const componentCount = ref(0)
const featureCount = ref(0)
const components = ref([])
const isCloud = ref(false)

onMounted(async () => {
  const componentDocs = import.meta.glob(`@demos/app/**/webdoc/*.js`)

  for (const item in componentDocs) {
    const componentName = item.split('/')[4]
    const componentConfig = (await componentDocs[item]()).default

    if (componentConfig.show) {
      componentCount.value++
      components.value.push({
        name: componentName,
        config: componentConfig
      })

      const features = componentConfig.features

      if (features) {
        for (const feature in features) {
          featureCount.value++
        }
      }
    }
  }
})

const group = (arr, step = 3) => {
  if (!arr || arr.length === 0) return
  if (arr.length <= step) return [arr]
  return arr.reduce((x, y) => {
    return Array.isArray(x) ? (x[x.length - 1].push(y) === step ? [...x, []] : x) : [[x, y]]
  })
}

const toUpperCamelCase = (str) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
</script>

<style scoped lang="less">
.flex-center {
  display: flex;
  align-items: center;
}

.component-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  padding: 0 2px;
  min-width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
  border: 1px solid #dfe1e6;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #cfd0d3;
}

.markdown-body {
  width: 1000px;
  margin: 0 auto;
}
</style>
