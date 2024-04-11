
    import { renderless, api } from '@opentiny/vue-renderless/radio-button/vue'
    import '@opentiny/vue-theme/radio-button/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function radioButton(props) {
      const {label,events,text,disabled,name,tipContent} = props
      const defaultProps = {
        ...$props,
        ...props,
        label,events,text,disabled,name,tipContent
      }
      const { ref, current: vm, parent } = useVm()
      const radio=useRef()
      const { state,keydownHandle,handleChange,handleFocus,handleBlur } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[radio]
      })
      return (
          
<label data-tag="tiny-radio-button"  role="radio" aria-checked={state.value === label} aria-disabled={state.isDisabled} tabindex={state.tabIndex} onKeydown={keydownHandle} className={vc([
      'relative outline-0 inline-flex rounded-none cursor-pointer items-center [&:first-of-type_span]:border-l-0.5 sm:[&:first-of-type_span]:border-l [&:first-of-type_span]:rounded-l-sm [&:last-of-type_span]:rounded-r-sm',
      state.size === 'small' ? 'sm:h-6 h-10 text-xs' : 'sm:h-7 sm:leading-7 h-11 text-sm sm:text-xs',
      !disabled &&
        !state.radioGroup.disabled &&
        state.value === label &&
        'sm:[&:not(:first-of-type)_span]:shadow-[calc(-1*theme(borderWidth.DEFAULT))_0_0_0_theme(colors.color.border.focus)] [&:not(:first-of-type)_span]:shadow-[calc(-1*theme(borderWidth[0.5]))_0_0_0_theme(colors.color.border.focus)]'
    ])}>    
<input ref={radio} v-ref="radio"  value={label} type="radio" value={state.value} onChange={(e)=>state.value = e.value} name={name} onChange={handleChange} disabled={state.isDisabled} tabindex="-1" onFocus={handleFocus} onBlur={handleBlur} className="opacity-0 outline-0 absolute -z-10"></input>

    
<span data-tag="tiny-radio-button-content"  style={state.value === label ? state.activeStyle : null}  className={vc([
        m(
          'relative sm:border-y border-y-0.5 sm:border-r border-r-0.5 border-solid inline-block leading-7 items-center min-w-[theme(spacing.10)] max-w-[theme(spacing.20)] sm:min-w-[theme(spacing.12)] sm:max-w-[theme(spacing.36)] text-center overflow-hidden text-ellipsis whitespace-nowrap px-3 cursor-pointer border-color-border box-border',
          state.radioGroup.disabled &&
            state.value === label &&
            'text-color-bg-1 bg-color-brand-disabled border-y-0 cursor-not-allowed border-transparent shadow-none',
          state.radioGroup.disabled &&
            state.value !== label &&
            'bg-color-bg-4 cursor-not-allowed border-color-border-disabled text-color-text-disabled',
          disabled && !state.radioGroup.disabled && 'text-color-text-disabled bg-none cursor-not-allowed',
          state.value === label &&
            !disabled &&
            !state.radioGroup.disabled &&
            'border-color-border-focus text-color-brand-focus',
          state.value !== label &&
            !disabled &&
            !state.radioGroup.disabled &&
            'text-color-text-secondary hover:text-color-brand-hover active:text-color-brand',
          state.size === 'small' ? 'sm:h-6 leading-6 px-2 h-6' : 'sm:h-7 h-7',
          state.showTips && 'sm:pr-7'
        )
      )}>      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

      
<template style={{display:!slots.default?'block':'none'}}>{text || label}

        
<tinyTooltip effect="light" content={tipContent} placement="top" style={{display:state.showTips?'block':'none'}}  className="sm:block hidden"><IconHelpCircle  className="absolute right-3 top-1.5 bottom-1.5 text-sm cursor-pointer w-3.5 h-3.5 fill-color-border hover:fill-color-brand-focus"></IconHelpCircle></tinyTooltip></template>

    </span>

  </label>


      );
    }
    