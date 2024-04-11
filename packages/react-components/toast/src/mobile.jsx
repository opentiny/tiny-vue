
    import { renderless, api } from '@opentiny/vue-renderless/toast/vue'
    import '@opentiny/vue-theme/toast/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function toast(props) {
      const {type,zIndex,text,time,timeout} = props
      const defaultProps = {
        ...$props,
        ...props,
        type,zIndex,text,time,timeout
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
          
<div  className="tiny-mobile-toast">    
<div  className={vc(['tiny-mobile-toast-content', 'tiny-mobile-toast-content-' + state.type])}>      
<div  style={{display:state.type !== 'text'?'block':'none'}} className="tiny-mobile-toast-icon">        
<iconMobile style={{display:state.type === 'error'?'block':'none'}}></iconMobile>

        
<iconMobile style={{display:state.type === 'correct'?'block':'none'}}></iconMobile>

      </div>

      
<div  className="tiny-mobile-toast-text">{state.text}</div>

    </div>

  </div>


      );
    }
    