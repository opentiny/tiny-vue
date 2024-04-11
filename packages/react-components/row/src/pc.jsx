
    import { renderless, api } from '@opentiny/vue-renderless/row/vue'
    import '@opentiny/vue-theme/row/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function row(props) {
      const {flex,gutter,justify,align,order,tag,noSpace} = props
      const defaultProps = {
        ...$props,
        ...props,
        flex,gutter,justify,align,order,tag,noSpace
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
          
<Component is={tag}  style={state.style}  className={vc([state.className,'tiny-row')}>    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </Component>


      );
    }
    