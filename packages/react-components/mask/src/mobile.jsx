
    import { renderless, api } from '@opentiny/vue-renderless/mask/vue'
    import '@opentiny/vue-theme/mask/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function mask(props) {
      const {visible,zIndex,cancelTouch} = props
      const defaultProps = {
        ...$props,
        ...props,
        visible,zIndex,cancelTouch
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleTouch } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<transition name="mask-fade">    
<div style={{display:visible?'block':'none'}}  style={state.calcStyle} onMousedown={handleTouch} onTouchmove={handleTouch} onTouchstart={handleTouch} className="tiny-mobile-mask">      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </transition>


      );
    }
    