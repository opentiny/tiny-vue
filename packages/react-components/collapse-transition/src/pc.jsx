
    import { renderless, api } from '@opentiny/vue-renderless/collapse-transition/vue'
    import '@opentiny/vue-theme/collapse-transition/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function collapseTransition(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,on } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<transition {...on}>    


    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </transition>


      );
    }
    