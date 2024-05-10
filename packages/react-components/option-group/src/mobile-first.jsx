
    import { renderless, api } from '@opentiny/vue-renderless/option-group/vue'
    import '@opentiny/vue-theme/option-group/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function optionGroup(props) {
      const {label,disabled} = props
      const defaultProps = {
        ...$props,
        ...props,
        label,disabled
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
          
<div  style={{display:state.visible?'block':'none'}} className="relative m-0 p-0 pb-3 mb-3 border-b border-b-color-bg-2 last:border-none last:pb-0 last:mb-0">    
<div  className="relative pl-2 text-xs text-color-text-secondary leading-5">      
{label}

    </div>

    
<div >      
<div  className="m-0 p-0">        
<Slot  parent_children={props.children} slots={props.slots}></Slot>

      </div>

    </div>

  </div>


      );
    }
    