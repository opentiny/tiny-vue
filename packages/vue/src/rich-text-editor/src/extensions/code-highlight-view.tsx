import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue'
import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'CodeHighlight',
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
        return this.node.attrs.language ?? 'null'
      },
      set(language) {
        this.updateAttributes({ language })
      }
    }
  },
  render() {
    const { languages, selectedLanguage, handleChangeLanguage } = this
    return (
      <NodeViewWrapper class="code-block">
        <select contenteditable="false" value={selectedLanguage} onChange={(e) => handleChangeLanguage(e)}>
          <option value="null">auto</option>
          <option disabled>-</option>
          {languages.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <pre>
          <code>
            <NodeViewContent />
          </code>
        </pre>
      </NodeViewWrapper>
    )
  },
  methods: {
    handleChangeLanguage(e: Event) {
      this.selectedLanguage = (e.target as HTMLSelectElement).value
    }
  }
})
