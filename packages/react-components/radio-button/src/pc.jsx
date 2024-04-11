
    import { renderless, api } from '@opentiny/vue-renderless/radio-button/vue'
    import '@opentiny/vue-theme/radio-button/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function radioButton(props) {
      const {label,events,text,disabled,name} = props
      const defaultProps = {
        ...$props,
        ...props,
        label,events,text,disabled,name
      }
      const { ref, current: vm, parent } = useVm()
      const radio=useRef()
      const { state,handleChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[radio]
      })
      return (
          
<label   role="radio" aria-checked={state.value === label} aria-disabled={state.isDisabled} tabindex={state.tabIndex} onKeydown={state.value = state.isDisabled ? state.value : label} className={vc([
      state.size ? 'tiny-radio-button--' + state.size : '',
      { 'is-active': state.value === label },
      { 'is-disabled': state.isDisabled },
      { 'is-focus': state.focus }
    ],'tiny-radio-button')}>    
<input ref={radio} v-ref="radio"  value={label} type="radio" value={state.value} onChange={(e)=>state.value = e.value} name={name} onChange={handleChange} disabled={state.isDisabled} tabindex="-1" onFocus={state.focus = true} onBlur={state.focus = false} className="tiny-radio-button__orig-radio"></input>

    
<span  style={state.value === label ? state.activeStyle : undefined}  className="tiny-radio-button__inner">      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

      
<template style={{display:!slots.default?'block':'none'}}>{text || label}</template>

    </span>

  </label>


      );
    }
    