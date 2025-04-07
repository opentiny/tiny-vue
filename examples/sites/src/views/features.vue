<template>
  <div class="ti-p48">
    <div class="ti-mw1000 !mx-auto markdown-body feature-list-container">
      <h1 class="ti-f-r ti-f-box-center">
        组件特性列表
        <tiny-tag size="small" type="success" :title="`${componentCount} components`" class="ml8">{{
          componentCount
        }}</tiny-tag>
        <tiny-tag size="small" type="success" :title="`${featureCount} features`" class="ml8">{{
          featureCount
        }}</tiny-tag>
      </h1>

      <p>TinyVue 组件库包含 {{ componentCount }} 个灵活、易用、功能强大的组件。</p>

      <div>
        <tiny-base-select v-model="cloudValue" :options="options" class="!ti-w200"></tiny-base-select>
      </div>

      <div
        v-for="(component, componentIndex) of cloudValue === 'cloud'
          ? components.filter((item) => item.config.cloud)
          : cloudValue === 'notCloud'
            ? components.filter((item) => !item.config.cloud)
            : components"
        :key="component.name"
      >
        <h3 class="ti-f-r ti-f-box-center">
          {{ componentIndex + 1 }}. {{ toUpperCamelCase(component.name) }}
          <tiny-tag
            size="small"
            type="success"
            class="ml8"
            :title="`${component.config.features?.length || 0} features`"
          >
            {{ component.config.features?.length || 0 }}
          </tiny-tag>
          <tiny-popover trigger="hover" placement="top">
            <p>
              {{
                component.config.features?.every((feature) => feature.cloud.value)
                  ? '全部特性在规范内'
                  : '部分特性在规范内'
              }}
            </p>
            <template #reference>
              <i
                :class="[
                  component.config.features?.every((feature) => feature.cloud.value) ? 'i-ti-cloud-full' : 'i-ti-cloud',
                  'ml4'
                ]"
                v-if="component.config.cloud"
              ></i>
            </template>
          </tiny-popover>
        </h3>
        <tiny-layout v-if="component.config.features" :cols="24">
          <tiny-row
            v-for="(groupFeature, index) of group(component.config.features)"
            :key="index"
            :style="{ marginTop: index === 0 ? '20px' : '0' }"
            :gutter="8"
          >
            <tiny-col v-for="feature of groupFeature" :key="feature.id" :span="8" class="ti-f-r ti-f-box-center">
              {{ feature.name }}
              <tiny-popover trigger="hover" placement="top">
                <p>{{ feature.description }}</p>
                <div>
                  Demos:
                  <span v-for="(demo, demoIndex) of feature.demos" :key="demoIndex">
                    <a
                      :href="origin + '/tiny-vue/zh-CN/os-theme/components/' + component.name + '#' + demo"
                      target="'_blank'"
                      >{{ demo }}</a
                    ><tiny-divider direction="vertical" v-if="demoIndex !== feature.demos.length - 1"></tiny-divider>
                  </span>
                </div>
                <div>
                  APIs:
                  <span v-for="(api, apiIndex) of feature.apis" :key="apiIndex">
                    <a
                      :href="origin + '/tiny-vue/zh-CN/os-theme/components/' + component.name + '#api'"
                      target="'_blank'"
                      >{{ api }}</a
                    ><tiny-divider direction="vertical" v-if="apiIndex !== feature.apis.length - 1"></tiny-divider>
                  </span>
                </div>
                <template #reference>
                  <tiny-icon-info-circle class="ti-ml4"></tiny-icon-info-circle>
                </template>
              </tiny-popover>
              <tiny-popover trigger="hover" placement="top" v-if="feature.cloud.value">
                <p>{{ feature.cloud.remark || '规范内的特性' }}</p>
                <template #reference>
                  <i :class="[feature.cloud.remark ? 'i-ti-cloud' : 'i-ti-cloud-full', 'ml4']"></i>
                </template>
              </tiny-popover>
              <i :class="[feature['e2e-test'] ? 'i-ti-e2e-test' : '', 'ml4']" title="E2E 测试用例已覆盖"></i>
              <i :class="[feature['unit-test'] ? 'i-ti-unit-test' : '', 'ml4']" title="单元测试用例已覆盖"></i>
            </tiny-col>
          </tiny-row>
        </tiny-layout>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TinyLayout, TinyRow, TinyCol, TinyPopover, TinyDivider, TinyTag, TinyBaseSelect } from '@opentiny/vue'
import { IconInfoCircle } from '@opentiny/vue-icon'
import { onMounted, ref } from 'vue'

const TinyIconInfoCircle = IconInfoCircle()

const origin = ref('')

const componentCount = ref(0)
const featureCount = ref(0)
const components = ref([])
const cloudValue = ref('all')

const options = ref([
  { value: 'all', label: '全部组件' },
  { value: 'cloud', label: '规范内组件' },
  { value: 'notCloud', label: '规范外组件' }
])

onMounted(async () => {
  origin.value = location.origin

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

<style lang="scss" scoped>
.feature-list-container :deep(.reference-wrapper) {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
