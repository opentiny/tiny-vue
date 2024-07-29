import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue'
import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'CodeHighlight',
  props: nodeViewProps,
  components: {
    NodeViewWrapper,
    NodeViewContent
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
  setup(props) {
    const languages = hooks.computed(() => {
      const { extension } = props
      return extension?.options?.lowlight?.listLanguages() ?? []
    })

    const selectedLanguage = hooks.computed({
      get: () => props.node?.attrs?.language ?? 'null',
      set: (language) => props.updateAttributes?.({ language })
    })

    const handleChangeLanguage = (e: Event) => {
      selectedLanguage.value = (e.target as HTMLSelectElement).value
    }

    return {
      languages,
      selectedLanguage,
      handleChangeLanguage
    }
  }
})
