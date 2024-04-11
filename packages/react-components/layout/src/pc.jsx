
    import { renderless, api } from '@opentiny/vue-renderless/layout/vue'
    import '@opentiny/vue-theme/layout/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function layout(props) {
      const {tag} = props
      const defaultProps = {
        ...$props,
        ...props,
        tag
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
          
<Component is={tag}  className="tiny-layout">    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </Component>


      );
    }
    