<template>
<div>
    <div class="f-r pt48 pl48 pr48">
      <component id="doc_wrap" :is="docMDs[currPage]" class="w0 fi-1" />
      <!-- 目录列表 -->
      <div class="catalog w128 sticky top32 ml24">
        <n-anchor :show-rail="true" offset-target="#doc-layout" :ignore-gap="true" :show-background="true">
          <n-anchor-link v-for="cat in catalog" :key="cat.id" :title="cat.text" :href="`#${cat.id}`" />
        </n-anchor>
      </div>
    </div>
    <div id="footer"></div>
  </div>
</template>
<script setup>
import { ref, nextTick, effectScope, watch, onMounted, onUnmounted } from 'vue';
import { $t2 } from '@/tools';
import docMDs from './docConfig.js';
import { router } from '@/router.js';
const currPage = ref('');
const catalog = ref([]);
function loadPage() {
  let suffix = $t2('', '-en');
  currPage.value = `${router.currentRoute.value.params.docId}${suffix}.md`;

  nextTick(() => {
    if (document.getElementById('doc_wrap')) {
      catalog.value = Array.from(document.getElementById('doc_wrap').querySelectorAll('h2[id],h3[id]')).map(h3 => ({
        id: h3.id,
        text: h3.dataset.label || decodeURIComponent(h3.id),
      }));
    }
  });
}
const scope = effectScope();
scope.run(() => {
  watch([router.currentRoute, () => appData.configMode], () => {
    loadPage();
  });
});
onMounted(() => {
  loadPage();
  const common = new window.TDCommon(['#footer'], {});
  common.renderFooter();
});
onUnmounted(() => scope.stop());
</script>
<style lang="less">
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

.n-anchor .n-anchor-link .n-anchor-link__title {
  font-size: 12px;
}

@media (max-width: 1279px) {
  .catalog {
    display: none;
  }
}
</style>
