
    import { renderless, api } from '@opentiny/vue-renderless/user-head/vue'
    import '@opentiny/vue-theme/user-head/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function userHead(props) {
      const {min,round,color,backgroundColor,type,value,modelValue,messageTotal,messageType,messageUpperLimit} = props
      const defaultProps = {
        ...$props,
        ...props,
        min,round,color,backgroundColor,type,value,modelValue,messageTotal,messageType,messageUpperLimit
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
          
<div  className="tiny-user-head">    
<div style={state.style}  className={vc(['tiny-user-head__portrait', { min, round }, type])}>      
<Slot  parent_children={props.children} slots={props.slots}>        
<Component style={{display:type === 'icon'?'block':'none'}} is={state.internalValue}  className="tiny-svg-size"></Component>

        
<span style={{display:type === 'label'?'block':'none'}} style={state.fontSize} title={state.internalValue}>{state.label}</span>

      </Slot>

    </div>

    
<div style={{display:messageTotal?'block':'none'}}  className={vc(['tiny-user-head__message', { min, round, basic: messageType === 'basic' || messageType === 'icon' }])}>      
{state.message}

    </div>

  </div>


      );
    }
    