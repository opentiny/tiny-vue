export default function (NodeViewContent, nodeViewProps, NodeViewWrapper) {
  return {
    name: 'CodeHighlight',
    components: {
      NodeViewWrapper,
      NodeViewContent,
    },
    props: nodeViewProps,
    data() {
      return {
        languages: this.extension.options.lowlight.listLanguages(),
      }
    },
    computed: {
      selectedLanguage: {
        get() {
          return this.node.attrs.language
        },
        set(language) {
          this.updateAttributes({ language })
        },
      },
    },
    render() {
      return (
        <NodeViewWrapper class="code-block">
          <select contenteditable="false" v-model={this.selectedLanguage}>
            <option value="null">
              auto
            </option>
            <option disabled>
              —
            </option>
            {this.languages.map((item, index) => <option value={item} key={index}> {item} </option>)}
          </select>
          <pre><code><NodeViewContent /></code></pre>
        </NodeViewWrapper>
      )
    },
  }
}