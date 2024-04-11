
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
<div style={{display:state.visible?'block':'none'}} data-tag="tiny-loading"  style={{ backgroundColor: state.background || '' }}  className={vc([state.customClass, { 'is-fullscreen': state.fullscreen }],'tiny-loading tiny-loading__mask')}>      
<div  className={vc([
          'tiny-loading__spinner',
          {
            small: 'tiny-loading__spinner-small',
            medium: 'tiny-loading__spinner-medium',
            large: 'tiny-loading__spinner-large'
          }[size]
        ])}>        
<Component style={{display:state.spinner?'block':'none'}} is={state.spinner}  className="tiny-icon-loading"></Component>

        
<img style={{display:!(state.spinner)?'block':'none'}}  style={state.iconStyle} src={state.loadingImg} className="circular"></img>

        
<svg style={{display:!(!(state.spinner))?'block':'none'}}  viewBox="25 25 50 50" className="circular">          
<circle  cx="50" cy="50" r="24" fill="none" className="path"></circle>

        </svg>

        
<p style={{display:state.text?'block':'none'}}  className="tiny-loading__text">{state.text}</p>

      </div>

    </div>

  </transition>


      );
    }
    