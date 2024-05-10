
    import { renderless, api } from '@opentiny/vue-renderless/rich-text-editor/vue'
    import '@opentiny/vue-theme/rich-text-editor/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function richText(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<NodeViewWrapper  className="code-block">    
<select contenteditable="false" value={selectedLanguage} onChange={(e)=>selectedLanguage = e.value}>      
<option value="null">auto</option>

      
<option disabled>—</option>

      

  {
    languages.map((item, index)=>(
      <option  value={item} key={index}>{item}</option>
    ))
  }
  

    </select>

    
<pre ><code ><NodeViewContent ></NodeViewContent></code></pre>

  </NodeViewWrapper>


      );
    }
    