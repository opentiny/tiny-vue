
    import { renderless, api } from '@opentiny/vue-renderless/checkbox-group/vue'
    import '@opentiny/vue-theme/checkbox-group/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function checkboxGroup(props) {
      const {modelValue,type,options,disabled,min,max,size,fill,textColor,vertical,displayOnly,shape} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,type,options,disabled,min,max,size,fill,textColor,vertical,displayOnly,shape
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
          
<div   role="group" aria-label="checkbox-group" className={vc([vertical ? 'is-vertical' : '','tiny-checkbox-group]')}>    
<Slot  parent_children={props.children} slots={props.slots}>      
<template style={{display:type === 'checkbox'?'block':'none'}}>        

  {
    options.map((item, index)=>(
      <checkbox  key={index} item></checkbox>
    ))
  }
  

      </template>

      
<template style={{display:type === 'button'?'block':'none'}}>        

  {
    options.map((item, index)=>(
      <checkboxButton  key={index} item></checkboxButton>
    ))
  }
  

      </template>

    </Slot>

  </div>


      );
    }
    