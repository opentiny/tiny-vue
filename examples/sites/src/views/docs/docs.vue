<template>
  <div>
    <div class="f-r pt48 pl48 pr48">
      <component id="doc_wrap" :is="docCmp" class="w0 fi-1" />
      <!-- 目录列表 TODO: 需要锚点组件配置整改，处理id中的特殊字符 -->
      <!-- <div v-if="anchorLinks.length > 0" class="docs-page-anchor catalog w128 sticky top32 ml24">
        <tiny-anchor :is-affix="true" :links="anchorLinks"> </tiny-anchor>
      </div> -->
    </div>
    <div id="footer"></div>
  </div>
</template>

<script setup>
import { ref, nextTick, effectScope, watch, onMounted, onUnmounted, computed, shallowRef } from 'vue'
import { Anchor as TinyAnchor } from '@opentiny/vue'
import { $t2 } from '@/tools'
import docMDs, { transformIdSelector } from './docConfig.js'
import { router } from '@/router.js'

const isOpen = import.meta.env.VITE_BUILD_TARGET === 'open'
const openDocMap = {
  'envpreparation': 'envpreparation-open',
  'installation': 'installation-open'
}
const getDocName = (docKey) => {
  if (isOpen && openDocMap[docKey]) {
    return openDocMap[docKey]
  } else {
    return docKey
  }
}

const currPage = ref('')
const catalog = ref([])
const docCmp = shallowRef(null)
const anchorLinks = computed(() => {
  return catalog.value.map((cat) => ({
    key: cat.id,
    title: cat.text,
    link: `#${transformIdSelector(cat.id)}`
  }))
})
async function loadPage() {
  let suffix = $t2('', '-en')
  currPage.value = `${getDocName(router.currentRoute.value.params.docId)}${suffix}.md`

  docCmp.value = (await docMDs?.[currPage.value]?.())?.default

  nextTick(() => {
    if (document.getElementById('doc_wrap')) {
      catalog.value = Array.from(document.getElementById('doc_wrap').querySelectorAll('h2[id],h3[id]')).map((h3) => ({
        id: h3.id,
        text: h3.dataset.label || decodeURIComponent(h3.id)
      }))
    }
  })
}
const scope = effectScope()
scope.run(() => {
  watch([router.currentRoute.value.params.docId, () => appData.configMode], () => {
    loadPage()
  })
})
scope.run(() => {
  watch(
    () => router.currentRoute.value,
    () => {
      loadPage()
    }
  )
})
onMounted(() => {
  loadPage()
  const common = new window.TDCommon(['#footer'], {})
  common.renderFooter()
})
onUnmounted(() => scope.stop())
</script>

<style lang="less">
.docs-page-anchor {
  .tiny-anchor__affix {
    overflow-y: auto;
    max-height: 80vh;
  }
  .tiny-anchor-link {
    margin-bottom: 10px;
    max-width: 150px;
    font-size: 12px;
    a {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
.catalog {
  height: calc(100vh - 150px);
  overflow: hidden;
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

@media (max-width: 1279px) {
  .catalog {
    display: none;
  }
}
</style>
