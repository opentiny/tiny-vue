
    import { renderless, api } from '@opentiny/vue-renderless/checkbox/vue'
    import '@opentiny/vue-theme/checkbox/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function checkbox(props) {
      const {modelValue,text,events,label,indeterminate,disabled,checked,name,trueLabel,falseLabel,id,controls,size,border,validateEvent,customClass,displayOnly} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,text,events,label,indeterminate,disabled,checked,name,trueLabel,falseLabel,id,controls,size,border,validateEvent,customClass,displayOnly
      }
      const { ref, current: vm, parent } = useVm()
      const label=useRef()
      const { state,handleChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[label]
      })
      return (
          
<label data-tag="tiny-checkbox"  id={id} tabindex="-1" a($attrs, ['class', 'style', 'onClick'], true) className={vc([
      m(
        'inline-flex sm:items-center text-sm leading-5 cursor-pointer',
        state.size === 'medium' ? 'sm:text-sm' : 'sm:text-xs',
        { 'sm:py-2': state.vertical },
        state.isDisplayOnly || state.isGroupDisplayOnly
          ? state.isChecked
            ? `cursor-default after:content-[';'] after:inline-block last:after:content-['']`
            : 'hidden'
          : '',
        state.showLabel ? 'inline-flex' : '',
        customClass
      )
    )}>    
<span  role={indeterminate ? 'checkbox' : false} aria-checked={indeterminate ? 'mixed' : false} className={vc([
        'relative w-7 h-7 mr-2 sm:mr-0 sm:p-0',
        state.size === 'medium' ? 'sm:w-6 sm:h-6' : 'sm:h-4 sm:w-4',
        state.isDisplayOnly || state.isGroupDisplayOnly ? 'hidden' : ''
      ])}>      
<span tabindex="1">        
<iconCheck data-tag="icon-check"  className={vc([
            m(
              'w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0',
              state.size === 'medium' ? 'sm:w-6 sm:h-6' : 'sm:w-4 sm:h-4',
              state.isDisabled
                ? '[&_path:nth-of-type(2)]:fill-color-icon-disabled [&_path:nth-of-type(1)]:fill-color-bg-3 cursor-not-allowed'
                : '[&_path:nth-of-type(1)]:fill-color-icon-inverse [&_path:nth-of-type(2)]:fill-color-none-hover'
            )
          )}></iconCheck>

        
<iconHalfselect data-tag="icon-halfselect"  className={vc([
            m(
              'w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all [&_path:nth-of-type(2)]:fill-color-icon-inverse',
              indeterminate ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-0 z-0',
              state.isDisabled
                ? '[&_path:nth-of-type(1)]:fill-color-brand-disabled cursor-not-allowed'
                : '[&_path:nth-of-type(1)]:fill-color-brand [&_path:nth-of-type(1)]:shadow-xsm',
              state.size === 'medium' ? 'sm:w-6 sm:h-6' : 'sm:w-4 sm:h-4'
            )
          )}></iconHalfselect>

        
<iconChecked data-tag="icon-checked-sur"  className={vc([
            m(
              'w-5 h-5',
              state.size === 'medium' ? 'sm:w-6 sm:h-6' : 'sm:w-4 sm:h-4',
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all [&_path:nth-of-type(2)]:fill-color-icon-inverse',
              state.isChecked && !indeterminate ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-0 z-0',
              state.isDisabled
                ? '[&_path:nth-of-type(1)]:fill-color-brand-disabled cursor-not-allowed'
                : '[&_path:nth-of-type(1)]:fill-color-brand [&_path:nth-of-type(2)]:shadow-xsm'
            )
          )}></iconChecked>

      </span>

      
<input style={{display:trueLabel || falseLabel?'block':'none'}}  type="checkbox" aria-hidden={indeterminate ? 'true' : 'false'} name={name} disabled={state.inputDisabled} true-value={trueLabel} false-value={falseLabel} value={state.model} onChange={(e)=>state.model = e.value} onChange={handleChange} onFocus={state.focus = true} onBlur={state.focus = false}  className="absolute left-0 right-0 top-0 bottom-0 w-0 h-0 -z-10 opacity-0"></input>

      
<input style={{display:!(trueLabel || falseLabel)?'block':'none'}}  type="checkbox" aria-hidden={indeterminate ? 'true' : 'false'} disabled={state.inputDisabled} value={label} name={name} value={state.model} onChange={(e)=>state.model = e.value} onChange={handleChange} onFocus={state.focus = true} onBlur={state.focus = false}  className="absolute left-0 right-0 top-0 bottom-0 w-0 h-0 -z-10 opacity-0"></input>

    </span>

    
<span ref={label} v-ref="label"  style={{display:(slots.default && slots.default()) || text || label?'block':'none'}} className={vc([
        m(
          'py-0 pl-0 sm:pl-2 mr-5 flex-auto leading-7 sm:leading-none',
          state.isDisabled ? 'cursor-not-allowed text-color-text-disabled' : 'text-color-text-primary',
          state.isDisplayOnly || state.isGroupDisplayOnly ? 'p-0 sm:p-0 m-0 text-color-text-primary cursor-default' : ''
        )
      )}>      
<Slot  parent_children={props.children} slots={props.slots}>{text || label}</Slot>

    </span>

    
<template style={{display:!((slots.default && slots.default()) || text || label)?'block':'none'}}>      
<span style={{display:state.isDisplayOnly?'block':'none'}}  className="text-color-text-primary cursor-default"> 
{state.displayLabel}</span>

    </template>

  </label>


      );
    }
    