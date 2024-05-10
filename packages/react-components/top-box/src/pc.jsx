
    import { renderless, api } from '@opentiny/vue-renderless/top-box/vue'
    import '@opentiny/vue-theme/top-box/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function topBox(props) {
      const {emitter} = props
      const defaultProps = {
        ...$props,
        ...props,
        emitter
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleAfterLeave,clearTimer,startTimer,item.onClick,close } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<transition name="tiny-top-box-fade" onAfter={handleAfterLeave}>    
<div  style={state.positionStyle} style={{display:state.visible?'block':'none'}} onMouseenter={clearTimer} onMouseleave={startTimer} role="alert" className={vc([
        'tiny-top-box',
        state.type && !state.iconClass ? `tiny-top-box--${state.type}` : '',
        state.center ? 'is-center' : '',
        state.showClose ? 'is-closable' : '',
        state.customClass
      ])}>      
<Component is={state.iconClass} style={{display:state.iconClass?'block':'none'}}  className="tiny-svg-size"></Component>

      
<Component is={state.typeClass} style={{display:!(state.iconClass)?'block':'none'}}  className="tiny-svg-size tiny-top-box__icon"></Component>

      
<Slot  parent_children={props.children} slots={props.slots}>        
<p style={{display:!state.dangerouslyUseHTMLString?'block':'none'}}  className="tiny-top-box__content">          
{state.message}

        </p>

        
<p style={{display:!(!state.dangerouslyUseHTMLString)?'block':'none'}} html  className="tiny-top-box__content"></p>

      </Slot>

      
<div style={{display:state.buttons && state.buttons.length?'block':'none'}}  className="tiny-top-box__toolbar">        

  {
    state.buttons.map((item, key)=>(
      <tinyButton  key={key} type={item.type || ''} onClick={item.onClick}>{item.text}</tinyButton>
    ))
  }
  

      </div>

      
<iconClose style={{display:state.showClose?'block':'none'}} onClick={close}  className="tiny-svg-size tiny-top-box__closeBtn"></iconClose>

    </div>

  </transition>


      );
    }
    