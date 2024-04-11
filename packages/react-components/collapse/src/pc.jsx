
    import { renderless, api } from '@opentiny/vue-renderless/collapse/vue'
    import '@opentiny/vue-theme/collapse/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function collapse(props) {
      const {accordion,modelValue,beforeClose} = props
      const defaultProps = {
        ...$props,
        ...props,
        accordion,modelValue,beforeClose
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
          
<div  role="tablist" aria-multiselectable="true" className="tiny-collapse">    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    