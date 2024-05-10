
    import { renderless, api } from '@opentiny/vue-renderless/label/vue'
    import '@opentiny/vue-theme/label/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function label(props) {
      const {label,color,size,type,wholeline,position,ellipsis,decimal,limit,isRequired,bold} = props
      const defaultProps = {
        ...$props,
        ...props,
        label,color,size,type,wholeline,position,ellipsis,decimal,limit,isRequired,bold
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
          
<div  style={state.labelStyle} className={vc(['tiny-mobile-label', state.labelClass])}>    
<span >{state.label}</span>

    
<span style={{display:state.isRequired?'block':'none'}}  className="tiny-mobile-label-isRequired">*</span>

  </div>


      );
    }
    