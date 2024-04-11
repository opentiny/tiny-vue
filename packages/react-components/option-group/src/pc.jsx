
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
          


  
<ul  style={{display:state.visible?'block':'none'}} className="tiny-option-group tiny-select-group__wrap">    
<li  className="tiny-option-group__title tiny-select-group__title">      
{label}

    </li>

    
<li >      
<ul  className="tiny-option-group__list tiny-select-group">        
<Slot  parent_children={props.children} slots={props.slots}></Slot>

      </ul>

    </li>

  </ul>


      );
    }
    