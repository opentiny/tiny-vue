
    import { renderless, api } from '@opentiny/vue-renderless/guide/vue'
    import '@opentiny/vue-theme/guide/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function guide(props) {
      const {showStep,domData,mainAxis,crossAxis,alignmentAxis,popPosition,modalOverlayOpeningPadding,modalOverlayOpeningRadius,arrow,lightClass,width,height} = props
      const defaultProps = {
        ...$props,
        ...props,
        showStep,domData,mainAxis,crossAxis,alignmentAxis,popPosition,modalOverlayOpeningPadding,modalOverlayOpeningRadius,arrow,lightClass,width,height
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
          
<div  className="tiny-guide">    
<Slot name="main" parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    