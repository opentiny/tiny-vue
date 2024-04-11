
    import { renderless, api } from '@opentiny/vue-renderless/slider-button/vue'
    import '@opentiny/vue-theme/slider-button/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function sliderButton(props) {
      const {label,events,text,disabled} = props
      const defaultProps = {
        ...$props,
        ...props,
        label,events,text,disabled
      }
      const { ref, current: vm, parent } = useVm()
      const sliderButton=useRef()
const sliderInput=useRef()
      const { state,handleChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[sliderButton,sliderInput]
      })
      return (
          
<label data-tag="tiny-slider-button" ref={sliderButton} v-ref="sliderButton"  role="radio" aria-checked={state.value === (label || text)} tabindex={state.tabIndex} className={vc([
      'inline-flex relative outline-0 cursor-pointer items-center',
      { 'hover:bg-color-fill-1 hover:rounded hover:shadow-sm': (state.value !== (label || text)) & !state.disabled },
      state.size === 'large' ? 'm-1' : 'm-0.5'
    ])}>    
<input  value={label || text} type="radio" value={state.value} onChange={(e)=>state.value = e.value} onChange={handleChange} tabindex="-1" ref={sliderInput} v-ref="sliderInput" className="opacity-0 outline-0 absolute -z-10"></input>

    
<span data-tag="tiny-slider-button-text"   className={vc([
        m(
          'relative items-center text-center overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer box-border',
          state.value !== (label || text)
            ? !state.disabled && 'shadow-none text-color-text-secondary hover:text-color-text-primary'
            : !state.disabled && 'text-color-brand active:text-color-brand',
          state.type === 'icon'
            ? 'flex items-center justify-center w-6 h-6 p-1 [&_svg]:w-6 [&_svg]:h-6'
            : 'inline-block',
          state.size === 'large'
            ? state.type === 'icon'
              ? 'w-10 h-10 p-2'
              : 'h-10 px-4 min-w-[theme(spacing.12)] max-w-[theme(spacing.32)] text-sm leading-10'
            : state.type !== 'icon' && 'h-6 px-2 min-w-[theme(spacing.10)] max-w-[theme(spacing.28)] text-xs leading-6',
          state.size === 'medium'
            ? state.type === 'icon'
              ? 'p-1 w-7 h-7 [&_svg]:w-4.5 [&_svg]:h-4.5'
              : 'text-sm h-7 leading-7'
            : '',
          state.type === 'icon' && state.value === (label || text)
            ? 'fill-color-brand active:fill-color-brand'
            : 'fill-color-none-hover active:fill-color-none-hover hover:fill-color-icon-secondary',
          state.value === (label || text) && state.disabled
            ? state.type === 'icon'
              ? 'fill-color-brand-disabled cursor-not-allowed'
              : 'text-color-brand-disabled cursor-not-allowed'
            : '',
          state.value !== (label || text) && state.disabled
            ? state.type === 'icon'
              ? 'fill-color-icon-disabled cursor-not-allowed'
              : 'text-color-text-disabled cursor-not-allowed'
            : ''
        )
      )}>      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

      
<template style={{display:!slots.default?'block':'none'}}>{text || label}
 </template>

    </span>

  </label>


      );
    }
    