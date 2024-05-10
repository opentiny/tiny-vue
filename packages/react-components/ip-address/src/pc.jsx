
    import { renderless, api } from '@opentiny/vue-renderless/ip-address/vue'
    import '@opentiny/vue-theme/ip-address/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function ipAddress(props) {
      const {size,modelValue,type,readonly,disabled,delimiter} = props
      const defaultProps = {
        ...$props,
        ...props,
        size,modelValue,type,readonly,disabled,delimiter
      }
      const { ref, current: vm, parent } = useVm()
      const inputs=useRef()
      const { state,select,focus,inputEvent,change,blur,keyup,keydown } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[inputs]
      })
      return (
          
<div  className="tiny-ip-address">    
<ul  style={state.heightStyle} className={vc({
        active: state.active,
        disabled: state.disabled,
        'tiny-ip-address__input': true
      })}>      

  {
    undefined.map((item, index) of state.address=>(
      <li  key={index} style={state.lineHeightStyle}>        
<input style={state.allHeightStyle} ref={inputs} v-ref="inputs" readonly={readonly} disabled={state.disabled} value={item.value} onChange={(e)=>item.value = e.value} type="text" onSelect={select({ value: item, index, event: $event })} onFocus={focus({ index, event: $event })} onInput={inputEvent({ item, index })} onChange={change} onBlur={blur({ item, index })} onKeyup={keyup({ item, index, event: $event })} onKeydown={keydown({ item, index, event: $event })} tabindex="1"></input>

        
<template style={{display:index < state.address.length - 1?'block':'none'}}>          
<Slot slot-scope={{ state, index, item }} parent_children={props.children} slots={props.slots}>            
<span style={{display:type === 'IPv6' && delimiter === 'icon-dot-ipv4'?'block':'none'}}  className="tiny-ip-address__input__ipv6-delimiter">:</span>

            
<Component style={{display:!(type === 'IPv6' && delimiter === 'icon-dot-ipv4')?'block':'none'}} is={delimiter}  className="tiny-svg-size"></Component>

          </Slot>

        </template>

      </li>
    ))
  }
  

    </ul>

  </div>


      );
    }
    