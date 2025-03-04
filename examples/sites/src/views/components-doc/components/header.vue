<template>
  <header class="docs-header">
    <div class="docs-title-wrap">
      <div class="markdown-body markdown-top-body" v-html="mdContent"></div>
      <version-tip
        v-if="props.currentJson.meta || props.currentJson.versionTipOption"
        :meta="props.currentJson.meta"
        v-bind="props.currentJson.versionTipOption"
      >
      </version-tip>
    </div>
    <slot name="header-right"></slot>
    <span class="docs-header-spacer"></span>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import hljs from 'highlight.js'
import { marked } from 'marked'
import VersionTip from './version-tip.vue'

const props = defineProps({ currentJson: {}, mdString: {} })
const mdContent = computed(() =>
  marked(props.mdString, {
    gfm: true,
    highlight(code, language) {
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext'
      return hljs.highlight(code, { language: validLanguage }).value
    }
  })
)
</script>

<style scoped lang="less">
.dark .docs-header {
  background-color: #1a1a1a;
}
.docs-header {
  padding: 16px 40px;
  min-height: 102px;
  background-color: #fff;
  box-shadow: 12px 0 20px 6px rgba(0, 0, 0, 0.06);

  .docs-title-wrap {
    flex: 1;
    min-width: var(--layout-content-main-min-width);
    max-width: var(--layout-content-main-max-width);
    margin: 0 auto;
  }

  .markdown-top-body {
    z-index: var(--docs-markdown-top-body-zindex);
    font-size: 14px;
    transition: all ease-in-out 0.3s;

    :deep(h1) {
      margin: 0;
      padding: 0;
      font-size: 24px;
      line-height: 40px;
    }
  }

  .version-tip {
    width: 100%;
  }

  .docs-header-spacer {
    flex: none;
    width: 200px;
  }
}
</style>
