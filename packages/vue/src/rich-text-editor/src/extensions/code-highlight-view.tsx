import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@opentiny/tiny-tiptap/vue'

export default defineComponent({
  name: $prefix + 'CodeHighlightView',
  props: nodeViewProps,
  components: {
    NodeViewWrapper,
    NodeViewContent
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

    return () => (
      <NodeViewWrapper class="code-block">
        <select contenteditable="false" value={selectedLanguage.value} onChange={(e) => handleChangeLanguage(e)}>
          <option value="null">auto</option>
          <option disabled>-</option>
          {languages.value.map((item, index) => (
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
  }
})
