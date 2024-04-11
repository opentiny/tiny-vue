
    import { renderless, api } from '@opentiny/vue-renderless/fullscreen/vue'
    import '@opentiny/vue-theme/fullscreen/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function fullscreen(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      const wrapper=useRef()
      const { state,shadeClick,exit } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[wrapper]
      })
      return (
          
<div ref={wrapper} v-ref="wrapper"  $attrs style={state.wrapperStyle}  onClick={shadeClick($event)} onKeyup={exit} className={vc({ [fullscreenClass]: state.isFullscreen },'tiny-fullscreen')}>    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    