
    import { renderless, api } from '@opentiny/vue-renderless/watermark/vue'
    import '@opentiny/vue-theme/watermark/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function watermark(props) {
      const {_constants} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants
      }
      const { ref, current: vm, parent } = useVm()
      const parentRef=useRef()
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[parentRef]
      })
      return (
          
<div  ref={parentRef} v-ref="parentRef" className="tiny-watermark-wrapper">    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    