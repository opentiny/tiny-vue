
    import { renderless, api } from '@opentiny/vue-renderless/user-head/vue'
    import '@opentiny/vue-theme/user-head/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function userHead(props) {
      const {min,round,color,backgroundColor,type,value,modelValue,messageTotal,messageType,messageUpperLimit,size} = props
      const defaultProps = {
        ...$props,
        ...props,
        min,round,color,backgroundColor,type,value,modelValue,messageTotal,messageType,messageUpperLimit,size
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleClick,mouseEnter } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  data-tag="tiny-user-head" onClick={handleClick} onMouseenter={mouseEnter} className="inline-block relative">    


    
<div data-tag="tiny-user-head-body" style={[state.style, { height: `${state.size}px`, width: `${state.size}px`, lineHeight: `${state.size}px` }]}  className={vc([
        'overflow-hidden w-10 h-10  text-center  bg-center bg-no-repeat bg-cover',
        round ? 'rounded-full' : 'rounded',
        { 'h-8 w-8 leading-8': min },
        {
          '[&_span]:overflow-hidden [&_span]:flex [&_span]:justify-center [&_span]:h-full px-0.5': type === 'label'
        },
        {
          '[&_svg]:top-1/2  [&_svg]:absolute [&_svg]:left-1/2  [&_svg]:-translate-y-1/2 [&_svg]:-translate-x-1/2':
            type === 'icon'
        },
        { 'text-sm': type === 'icon' && min }
      ])}>      
<Slot  parent_children={props.children} slots={props.slots}>        
<Component style={{display:type === 'icon'?'block':'none'}} is={state.internalValue}  style={[
            {
              height: `${state.size / 1.5}px`,
              width: `${state.size / 1.5}px`,
              lineHeight: `${state.size / 1.5}px`,
              top: `${state.size / 2}`
            }
          ]} className="inline-block w-6 h-6"></Component>

        
<span style={{display:type === 'label'?'block':'none'}} style={state.fontSize} title={state.internalValue}>{state.label}</span>

      </Slot>

    </div>

    
<div data-tag="tiny-user-head-message" style={{display:messageTotal?'block':'none'}}  className={vc([
        'absolute rounded-lg text-color-text-primary text-center box-content bg-color-error',
        messageType === 'basic'
          ? 'w-0 h-1 px-0.5 border-2 -right-1.5 border-color-bg-1 border-solid -top-1 left-9'
          : 'min-w-[0.625rem] w-auto left-7 flex items-center -top-2.5 px-0.5 text-xs h-3.5 border-2 border-color-bg-1 border-solid',
        { '-top-1 h-2 min-w-2 leading-none rounded': messageType === 'icon' },
        { 'top-0 -right-1.5': (messageType === 'basic' || messageType === 'icon') && round },
        { '-top-1.5 left-8 -right-1.5 w-3 h-3': (messageType === 'basic' || messageType === 'icon') && min },
        { 'top-0': (messageType === 'basic' || messageType === 'icon') && round && min }
      ])}>      
{state.message}

    </div>

  </div>


      );
    }
    