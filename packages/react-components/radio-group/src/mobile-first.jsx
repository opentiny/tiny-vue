
    import { renderless, api } from '@opentiny/vue-renderless/radio-group/vue'
    import '@opentiny/vue-theme/radio-group/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function radioGroup(props) {
      const {options,modelValue,type,size,fill,textColor,disabled,vertical,showTips,displayOnly} = props
      const defaultProps = {
        ...$props,
        ...props,
        options,modelValue,type,size,fill,textColor,disabled,vertical,showTips,displayOnly
      }
      const { ref, current: vm, parent } = useVm()
      const group=useRef()
      const { state,handleKeydown } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[group]
      })
      return (
          
<Component is={state.tag}  role="radiogroup" onKeydown={handleKeydown} ref={group} v-ref="group" data-tag="tiny-radio-group" className={vc(['inline-flex', vertical && 'flex-col'])}>    
<Slot  parent_children={props.children} slots={props.slots}>      
<template style={{display:type === 'radio'?'block':'none'}}>        

  {
    options.map((item, index)=>(
      <radio  display-only={displayOnly} key={index} item></radio>
    ))
  }
  

      </template>

      
<template style={{display:type === 'button'?'block':'none'}}>        

  {
    options.map((item, index)=>(
      <radioButton  key={index} item></radioButton>
    ))
  }
  

      </template>

    </Slot>

  </Component>


      );
    }
    