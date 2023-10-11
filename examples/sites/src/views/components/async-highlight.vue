<template>
  <div class="code-preview-box">
    <pre v-if="highlightFinish" v-html="highlightCode"></pre>
    <pre v-else>{{ code }}</pre>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import hljs from 'highlight.js/lib/core'

export default defineComponent({
  name: 'AsyncHighlight',
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const highlightFinish = ref(false)
    const highlightCode = ref('')
    // highlight和其他同步任务叠加容易形成长任务，改成异步消除长任务。
    setTimeout(() => {
      highlightCode.value = hljs.highlightAuto(props.code).value
      highlightFinish.value = true
    }, 0)
    return {
      highlightFinish,
      highlightCode
    }
  }
})
</script>
<style lang="less">
.code-preview-box {
  max-height: 400px;
  overflow-y: auto;

  pre {
    line-height: 22px;
    font-family: monospace;
    font-size: 14px;
    font-weight: 400;
    padding: 0px 12px;
  }

  .hljs-tag {
    color: #170;
    font-weight: 400;

    .hljs-name {
      color: #170;
      font-weight: 400;
    }

    .hljs-attr {
      color: #00c;
    }
  }

  .hljs-string {
    color: #a11;
  }

  .hljs-keyword {
    color: #708;
    font-weight: 400;
  }

  .hljs-title {
    color: #00f;
    font-weight: 400;
  }

  .hljs-selector-class {
    color: #555;
  }

  .hljs-attribute {
    font-weight: 400;
  }

  .hljs-number {
    color: #164;
  }
}
</style>
