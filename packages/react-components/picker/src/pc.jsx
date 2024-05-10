
    import { renderless, api } from '@opentiny/vue-renderless/picker/vue'
    import '@opentiny/vue-theme/picker/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function picker(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      const reference=useRef()
const label=useRef()
const picker=useRef()
      const { state,handleFocus,handleKeydown,handleInput,handleChange,handleMouseEnter,handleEnterPickerlabel,handleClickIcon,handleStartInput,handleStartChange,handleEndInput,handleEndChange,handleEnterDisplayOnlyContent,handlePick,handleSelectRange,handleSelectChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[reference,label,picker]
      })
      return (
          
<div ref={reference} v-ref="reference"  className="tiny-date-container">    
<tinyFilter style={{display:shape === 'filter'?'block':'none'}} clickoutside onClick={handleFocus} show-close={clearable} placeholder={placeholder} disabled={state.pickerDisabled} label={label} tip={tip} value={state.displayValue.toString()} drop-down-visible={state.pickerVisible} blank={blank}></tinyFilter>

    
<tinyInput tabindex={tabindex} style={{display:!(shape === 'filter')?'block':'none'}}   readonly={!editable || readonly || state.type === 'dates' || state.type === 'week'} disabled={state.pickerDisabled} size={state.pickerSize} name={name} state.firstInputId clickoutside placeholder={placeholder} onFocus={handleFocus} onKeydown={handleKeydown} model-value={state.displayValue} title={state.type === 'date' ? '' : state.displayValue} display-only={state.isDisplayOnly} display-only-content={state.displayValue} onInput={handleInput} onChange={handleChange} onMouseenter={handleMouseEnter} onMouseleave={state.showClose = false} validate-event={false} className={vc(['tiny-date-editor--' + state.type,'tiny-date-editor]')}>      
<template style={{display:label?'block':'none'}} slot>        
<tinyTooltip effect="light" content={state.labelTooltip} placement="top" onMouseenter={handleEnterPickerlabel}>          
<span  ref={label} v-ref="label" className="tiny-input__label"> 
{label}
 </span>

        </tinyTooltip>

      </template>

      
<template slot>        
<i  className="tiny-input__icon-container">          
<transition name="tiny-transition-icon-scale-in">            
<Component is={state.showClose ? clearIcon : null} onClick={handleClickIcon} onMouseenter={state.showClose = true} onMouseleave={state.showClose = false} style={{display:state.haveTrigger?'block':'none'}}  className="baseClearicon"></Component>

          </transition>

          
<Component is={state.triggerClass} onClick={handleFocus}  className="tiny-svg-size"></Component>

        </i>

      </template>

    </tinyInput>

    
<div   onClick={handleFocus} onMouseenter={handleMouseEnter} onMouseleave={state.showClose = false} onKeydown={handleKeydown} clickoutside style={{display:!(state.haveTrigger)?'block':'none'}} className={vc([
        'tiny-date-editor--' + state.type,
        state.pickerSize ? `tiny-range-editor--${state.pickerSize}` : '',
        state.pickerDisabled ? 'is-disabled' : '',
        state.pickerVisible ? 'is-active' : '',
        state.isDisplayOnly ? 'is-display-only' : ''
      ],'tiny-date-editor tiny-range-editor tiny-input tiny-input__inner')}>      
<tinyTooltip effect="light" content={state.labelTooltip} placement="top" onMouseenter={handleEnterPickerlabel}>        
<span style={{display:label?'block':'none'}}  ref={label} v-ref="label" className="tiny-input__label"> 
{label}
 </span>

      </tinyTooltip>

      
<input autocomplete="off" placeholder={startPlaceholder} value={state.displayValue && state.displayValue[0]} disabled={state.pickerDisabled} state.firstInputId readonly={!editable || readonly} name={name && name[0]} onInput={handleStartInput} onChange={handleStartChange} onFocus={handleFocus}  className="tiny-range-input"></input>

      
<Slot name="range-separator" parent_children={props.children} slots={props.slots}>        
<span style={{display:typeof rangeSeparator === 'string'?'block':'none'}}  className="tiny-range-separator">{rangeSeparator}</span>

        
<Component style={{display:!(typeof rangeSeparator === 'string')?'block':'none'}} is={rangeSeparator}></Component>

      </Slot>

      
<input autocomplete="off" placeholder={endPlaceholder} value={state.displayValue && state.displayValue[1]} disabled={state.pickerDisabled} state.secondInputId readonly={!editable || readonly} name={name && name[1]} onInput={handleEndInput} onChange={handleEndChange} onFocus={handleFocus}  className="tiny-range-input"></input>

      
<i onClick={handleClickIcon} style={{display:state.haveTrigger?'block':'none'}}  className="tiny-input__icon tiny-range__close-icon">        
<transition name="tiny-transition-icon-scale-in">          
<Component is={state.showClose ? clearIcon : null}></Component>

        </transition>

      </i>

      
<i  style={{display:!state.isDisplayOnly?'block':'none'}} className="tiny-input__icon tiny-range__icon tiny-input__suffix">        
<Component is={state.triggerClass}></Component>

      </i>

      
<tinyTooltip  style={{display:state.isDisplayOnly?'block':'none'}} content={state.displayOnlyTooltip} effect="light" placement="top" onMouseenter={handleEnterDisplayOnlyContent} className="tiny-range-editor-display-only">        
<span >{state.displayValue && state.displayValue.join(` ${t('ui.datepicker.to')} `)}</span>

      </tinyTooltip>

    </div>

    
<Component is={state.panel} step={step} show-week-number={showWeekNumber} time-editable={timeEditable} format-weeks={formatWeeks} ref={picker} v-ref="picker" visible={state.pickerVisible} onPick={handlePick} onSelect={handleSelectRange} onSelect={handleSelectChange}></Component>

  </div>


      );
    }
    