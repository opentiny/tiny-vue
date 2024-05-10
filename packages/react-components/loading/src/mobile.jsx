
    import { renderless, api } from '@opentiny/vue-renderless/loading/vue'
    import '@opentiny/vue-theme/loading/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function loading(props) {
      const {_constants,loadingImg,size} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants,loadingImg,size
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleAfterLeave } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<transition name="tiny-loading-fade" onAfter={handleAfterLeave}>    
<div  style={{display:state.visible?'block':'none'}} style={`background-color:${state.background}`} className={vc(['tiny-mobile-loading', state.customClass])}>      
<div  className={vc(['tiny-mobile-loading__body', { [`tiny-mobile-loading-${size}`]: size }])}>        
<img style={{display:!state.spinner?'block':'none'}}  src={state.loadingImg} style={state.iconStyle} className="tiny-mobile-loading__icon"></img>

        
<Component style={{display:!(!state.spinner)?'block':'none'}} is={state.spinner}  className="tiny-mobile-loading__spinner"></Component>

        
<span style={{display:state.text?'block':'none'}}  className="tiny-mobile-loading__text">{state.text}</span>

      </div>

    </div>

  </transition>


      );
    }
    