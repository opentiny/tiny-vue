<template>
  <div class="code-preview-box">
    <pre v-if="highlightFinish" v-html="highlightCode"></pre>
    <pre v-else>{{ code }}</pre>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/github.css'

export default defineComponent({
  name: 'AsyncHighlight',
  props: {
    code: {
      type: String,
      default: ''
    },
    filename: {
      type: String
    },
    type: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const highlightFinish = ref(false)
    const highlightCode = ref('')

    watch(
      props,
      () => {
        setTimeout(() => {
          // highlight和其他同步任务叠加容易形成长任务，改成异步消除长任务。
          if (props.filename && props.filename.endsWith('.vue')) {
            highlightCode.value = hljs.highlight(props.code, { language: 'html' }).value
          } else if (props.type === 'chart') {
            highlightCode.value = props.code
          } else {
            highlightCode.value = hljs.highlightAuto(props.code).value
          }
          highlightFinish.value = true
        }, 0)
      },
      { deep: true, immediate: true }
    )
    return {
      highlightFinish,
      highlightCode
    }
  }
})
</script>

<style lang="less">
/* 代码预览中的代码块高亮  */
.dark {
  .code-preview-box {
    .hljs-tag {
      color: #e1e4e8;
      .hljs-name {
        color: #85e89d;
      }
      .hljs-attr {
        color: #b392f0;
      }
      .hljs-string {
        color: #9ecbff;
      }
    }

    .language-javascript {
      color: #79b8ff;

      .hljs-keyword,
      .hljs-title {
        color: #f97583;
      }
      .hljs-string {
        color: #9ecbff;
      }
      .hljs-attr {
        color: #e1e4e8;
      }
      .hljs-variable {
        color: #b392f0;
      }
    }
    .language-css {
      .hljs-selector-class {
        color: #b392f0;
      }
      .hljs-attribute {
        color: #9ecbff;
      }
      .hljs-number {
        color: #e1e4e8;
      }
    }
  }
}
.code-preview-box {
  max-height: 400px;
  overflow-y: auto;

  pre {
    line-height: 22px;
    font-family: Consolas, 'Courier New', monospace !important;
    font-size: 14px;
    font-weight: 400;
    padding: 0px 12px;
    color: var(--tv-color-text);
  }

  .hljs-tag {
    color: #170;
    font-weight: 400;

    .hljs-name {
      color: #170;
      font-weight: 400;
    }

    .hljs-attr {
      color: rgb(20, 20, 219);
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
    color: #170;
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
