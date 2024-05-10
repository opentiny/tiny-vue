
    import { renderless, api } from '@opentiny/vue-renderless/index-bar-anchor/vue'
    import '@opentiny/vue-theme/index-bar-anchor/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function indexBar(props) {
      const {index} = props
      const defaultProps = {
        ...$props,
        ...props,
        index
      }
      const { ref, current: vm, parent } = useVm()
      const indexBarAnchor=useRef()
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[indexBarAnchor]
      })
      return (
          
<div ref={indexBarAnchor} v-ref="indexBarAnchor"  className="tiny-mobile-index-bar-anchor">    
<Slot  parent_children={props.children} slots={props.slots}>      
<div  className="tiny-mobile-index-bar-anchor__label">{index}</div>

    </Slot>

  </div>


      );
    }
    