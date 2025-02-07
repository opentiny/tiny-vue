<template>
  <div v-if="links.length" class="cmp-page-anchor catalog">
    <tiny-anchor
      id="anchor"
      :offset-top="56"
      :links="links"
      :is-affix="props.anchorAffix"
      type="dot"
      container-id="#doc-layout-scroller"
      @link-click="handleAnchorClick"
    >
    </tiny-anchor>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { TinyAnchor } from '@opentiny/vue'
const props = defineProps({ anchorAffix: {}, currentJson: {}, activeTab: {}, langKey: {}, apiTypes: {} })

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
const emit = defineEmits(['link-click'])
const handleAnchorClick = (...args) => {
  emit('link-click', ...args)
}
</script>
<style scoped lang="less">
.cmp-page-anchor {
  :deep(.tiny-anchor__affix) {
    top: unset !important;
    overflow-y: auto;
    max-height: calc(100vh - 300px);
  }

  :deep(.tiny-anchor-link) {
    font-size: 12px;

    a {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

.catalog {
  flex: none;
  width: 200px;
  height: calc(100vh - 280px);
  padding-top: 16px;
  overflow: hidden;

  .tiny-anchor__dot {
    max-height: calc(100vh - 300px);
    width: 200px;

    :deep(.tiny-anchor) {
      --ti-anchor-width: auto;
      background-color: transparent;
    }
  }
}

.catalog:hover {
  overflow-y: auto;
}

.catalog::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

.catalog::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #c1c1c1;
}
</style>
