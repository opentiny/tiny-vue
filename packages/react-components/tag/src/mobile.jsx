
    import { renderless, api } from '@opentiny/vue-renderless/tag/vue'
    import '@opentiny/vue-theme/tag/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tag(props) {
      const {text,color,width,mini,maxWidth} = props
      const defaultProps = {
        ...$props,
        ...props,
        text,color,width,mini,maxWidth
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
          
<div  style={{ maxWidth: state.maxWidth ? `${state.maxWidth}px` : null }} className={vc(['tiny-mobile-tag', 'tiny-mobile-tag-' + state.color, state.mini ? 'tiny-mobile-tag-mini' : null])}>    
<Slot  parent_children={props.children} slots={props.slots}>{state.text}</Slot>

  </div>


      );
    }
    