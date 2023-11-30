<template>
  <NodeViewWrapper class="code-block">
    <select contenteditable="false" v-model="selectedLanguage">
      <option value="null">auto</option>
      <option disabled>—</option>
      <option v-for="(item, index) in languages" :value="item" :key="index">{{ item }}</option>
    </select>
    <pre><code><NodeViewContent /></code></pre>
  </NodeViewWrapper>
</template>
<script>
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue'
import { defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: 'CodeHighlight',
  components: {
    NodeViewWrapper,
    NodeViewContent
  },
  props: nodeViewProps,
  data() {
    return {
      languages: this.extension.options.lowlight.listLanguages()
    }
  },
  computed: {
    selectedLanguage: {
      get() {
        return this.node.attrs.language
      },
      set(language) {
        this.updateAttributes({ language })
      }
    }
  }
})
</script>
