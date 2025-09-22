<template>
  <tiny-anchor
    id="anchor"
    v-if="links.length"
    :tiny_mode="isSaas ? 'pc' : 'mobile-first'"
    :offset-top="56"
    :links="links"
    :is-affix="props.anchorAffix"
    :type="isSaas ? 'line' : 'dot'"
    container-id="#doc-layout-scroller"
    @link-click="handleAnchorClick"
  >
  </tiny-anchor>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TinyAnchor } from '@opentiny/vue'
import { isSaas } from '../const'

const props = defineProps({ anchorAffix: {}, currentJson: {}, activeTab: {}, langKey: {}, apiTypes: {} })

const emit = defineEmits(['link-click'])

// 实例锚点
const demoAnchorLinks = computed(() => {
  const links =
    props.currentJson?.demos?.map((demo) => ({
      key: demo.demoId,
      title: demo.name[props.langKey],
      link: `#${demo.demoId}`
    })) || []
  return links
})

// 组件API锚点
const apiAnchorLinks = computed(() => {
  if (!props.currentJson.apis?.length) {
    return []
  }

  const apiAnchorLinks = []
  props.currentJson.apis?.forEach((apiGroup) => {
    const { name } = apiGroup
    const typeLinks = props.apiTypes
      .filter((i) => apiGroup[i]?.length)
      .map((i) => ({
        key: i,
        link: `#${name}--${i}`,
        title: i
      }))

    const linkItem = {
      key: name,
      link: `#cmp-${name}`,
      title: name,
      children: typeLinks
    }
    apiAnchorLinks.push(linkItem)
  })

  return apiAnchorLinks
})
const links = computed(() => (props.activeTab === 'demos' ? demoAnchorLinks.value : apiAnchorLinks.value))
const handleAnchorClick = (...args) => {
  emit('link-click', ...args)
}
</script>

<style scoped lang="less"></style>
