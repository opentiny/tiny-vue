
    import { renderless, api } from '@opentiny/vue-renderless/user-head/vue'
    import '@opentiny/vue-theme/user-head/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function userHead(props) {
      const {min,round,color,backgroundColor,type,modelValue,messageTotal,messageType,messageUpperLimit,size} = props
      const defaultProps = {
        ...$props,
        ...props,
        min,round,color,backgroundColor,type,modelValue,messageTotal,messageType,messageUpperLimit,size
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
          
<div  className="tiny-mobile-user-head">    
<div style={{ ...state.style, width: `${state.size}px`, height: `${state.size}px` }}  className={vc(['tiny-mobile-user-head__portrait', { min, round }, type])}>      
<Slot  parent_children={props.children} slots={props.slots}>        
<Component style={{display:type === 'icon'?'block':'none'}} is={state.internalValue}  className="tiny-mobile-svg-size"></Component>

        
<span style={{display:type === 'label'?'block':'none'}} style={{ fontSize: `${state.size * 0.3}px` }} title={state.internalValue}>{state.label}</span>

      </Slot>

    </div>

    
<div style={{display:messageTotal?'block':'none'}} style={{ left: `${state.size * 0.9}px` }}  className={vc([
        'tiny-mobile-user-head__message',
        { min, round, basic: messageType === 'basic' || messageType === 'icon' }
      ])}>      
{state.message}

    </div>

  </div>


      );
    }
    