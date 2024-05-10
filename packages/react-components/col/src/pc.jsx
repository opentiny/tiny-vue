
    import { renderless, api } from '@opentiny/vue-renderless/col/vue'
    import '@opentiny/vue-theme/col/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function col(props) {
      const {span,offset,no,move,xs,sm,md,lg,xl,tag} = props
      const defaultProps = {
        ...$props,
        ...props,
        span,offset,no,move,xs,sm,md,lg,xl,tag
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
          
<Component is={tag}  style={state.style}  className={vc([state.className,'tiny-col')}>    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </Component>


      );
    }
    