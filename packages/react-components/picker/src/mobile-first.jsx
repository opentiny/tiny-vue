
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
const datePickerMobile=useRef()
      const { state,handleFocus,handleKeydown,handleInput,handleChange,handleMouseEnter,handleEnterPickerlabel,handleClickIcon,handleStartInput,handleStartChange,handleEndInput,handleEndChange,handleEnterDisplayOnlyContent,handlePick,handleSelectRange,handleSelectChange,emitInput,dateMobileToggle,timeMobileConfirm,timeMobileToggle } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[reference,label,picker,datePickerMobile]
      })
      return (
          
<div ref={reference} v-ref="reference" data-tag="tiny-date-container"  className={vc([state.isDisplayOnly ? 'inline' : '')}>    
<tinyFilter style={{display:shape === 'filter'?'block':'none'}} clickoutside onClick={handleFocus} show-close={clearable} placeholder={placeholder} disabled={state.pickerDisabled} label={label} tip={tip} value={state.displayValue.toString()} drop-down-visible={state.pickerVisible} blank={blank}></tinyFilter>

    
<tinyInput tabindex={tabindex} style={{display:!(shape === 'filter')?'block':'none'}} data-tag="tiny-date-editor" readonly={state.isMobileScreen || !editable || readonly || state.type === 'dates' || state.type === 'week'} disabled={state.pickerDisabled} size={state.pickerSize} name={name} state.firstInputId clickoutside placeholder={placeholder} onFocus={handleFocus} onKeydown={handleKeydown} model-value={state.displayValue} title={state.type === 'date' ? '' : state.displayValue} display-only={state.isDisplayOnly} display-only-content={state.displayValue} onInput={handleInput} onChange={handleChange} onMouseenter={handleMouseEnter} onMouseleave={state.showClose = false} validate-event={false} custom-class={'sm:border ' + gcls(state.type)}>      
<template style={{display:label?'block':'none'}} slot>        
<tinyTooltip effect="light" content={state.labelTooltip} placement="top" onMouseenter={handleEnterPickerlabel}>          
<span data-tag="tiny-input__label"  ref={label} v-ref="label" className={vc([gcls('input-label'))}> 
{label}
 </span>

        </tinyTooltip>

      </template>

      
<template slot>        
<i data-tag="icon"  className="flex items-center cursor-pointer">          
<transition style={{display:!state.isMobileScreen?'block':'none'}} name="tiny-transition-icon-scale-in">            
<Component is={state.showClose ? clearIcon : null} onClick={handleClickIcon} onMouseenter={state.showClose = true} onMouseleave={state.showClose = false} style={{display:state.haveTrigger?'block':'none'}}  className="fill-color-text-placeholder hover:fill-color-text-primary"></Component>

          </transition>

          
<Component is={state.triggerClass} onClick={handleFocus} custom-class="h-5 w-5 sm:h-4 sm:w-4"  className={vc([
              !state.isDisplayOnly && state.pickerDisabled
                ? 'fill-color-icon-placeholder sm:fill-color-icon-secondary'
                : 'fill-color-icon-secondary sm:fill-color-text-placeholder'
            )}></Component>

        </i>

      </template>

    </tinyInput>

    
<div data-tag="tiny-date-editor tiny-range-editor tiny-input tiny-input__inner"  onClick={handleFocus} onMouseenter={handleMouseEnter} onMouseleave={state.showClose = false} onKeydown={handleKeydown} clickoutside style={{display:!(state.haveTrigger)?'block':'none'}} className={vc([
        m(
          gcls('range-editor'),
          gcls(state.type),
          state.pickerVisible && gcls('is-active'),
          !state.isDisplayOnly && state.pickerDisabled && gcls('is-disabled'),
          state.isDisplayOnly && gcls('is-display-only')
        )
      )}>      
<tinyTooltip effect="light" content={state.labelTooltip} placement="top" onMouseenter={handleEnterPickerlabel}>        
<span style={{display:label?'block':'none'}} data-tag="tiny-input__label" ref={label} v-ref="label"> 
{label}
 </span>

      </tinyTooltip>

      
<template style={{display:!state.isDisplayOnly?'block':'none'}}>        
<input autocomplete="off" placeholder={startPlaceholder} value={state.displayValue && state.displayValue[0]} title={state.displayValue && state.displayValue[0]} disabled={state.pickerDisabled} state.firstInputId readonly={state.isMobileScreen || !editable || readonly} name={name && name[0]} onInput={handleStartInput} onChange={handleStartChange} onFocus={handleFocus} data-tag="tiny-range-input"  className={vc([gcls('range-input'))}></input>

        
<Slot name="range-separator" parent_children={props.children} slots={props.slots}>          
<span style={{display:typeof rangeSeparator === 'string'?'block':'none'}} data-tag="tiny-range-separator"  className={vc([
              m(
                gcls('range-separator'),
                { 'text-center': type === 'datetimerange' },
                { 'text-color-icon-placeholder': !state.isDisplayOnly && state.pickerDisabled }
              )
            )}>{rangeSeparator}</span>

          
<Component style={{display:!(typeof rangeSeparator === 'string')?'block':'none'}} is={rangeSeparator}></Component>

        </Slot>

        
<input autocomplete="off" placeholder={endPlaceholder} value={state.displayValue && state.displayValue[1]} title={state.displayValue && state.displayValue[1]} disabled={state.pickerDisabled} state.secondInputId readonly={state.isMobileScreen || !editable || readonly} name={name && name[1]} onInput={handleEndInput} onChange={handleEndChange} onFocus={handleFocus} data-tag="tiny-range-input"  className={vc([gcls('range-input'))}></input>

        
<i onClick={handleClickIcon} style={{display:!state.isMobileScreen && state.haveTrigger?'block':'none'}} data-tag="tiny-input__icon tiny-range__close-icon"  className={vc([gcls('close-icon'))}>          
<transition name="tiny-transition-icon-scale-in">            
<Component is={state.showClose ? clearIcon : null} custom-class="fill-color-text-placeholder"></Component>

          </transition>

        </i>

        
<i data-tag="tiny-input__icon tiny-range__icon tiny-input__suffix" style={{display:!state.isDisplayOnly?'block':'none'}}  className={vc([gcls('suffix'))}>          
<Component is={state.triggerClass} custom-class="h-5 w-5 sm:h-4 sm:w-4"  className={vc([
              !state.isDisplayOnly && state.pickerDisabled
                ? 'fill-color-icon-placeholder sm:fill-color-icon-secondary'
                : 'fill-color-icon-secondary sm:fill-color-text-placeholder'
            )}></Component>

        </i>

      </template>

      
<tinyTooltip data-tag="tiny-range-editor-display-only" style={{display:state.isDisplayOnly?'block':'none'}} content={state.displayOnlyTooltip} effect="light" placement="top" onMouseenter={handleEnterDisplayOnlyContent}>        
<span >{state.displayValue && state.displayValue.join(` ${t('ui.datepicker.to')} `)}</span>

      </tinyTooltip>

    </div>

    


    
<Component style={{display:!state.isMobileScreen?'block':'none'}} is={state.panel} step={step} show-week-number={showWeekNumber} format-weeks={formatWeeks} ref={picker} v-ref="picker" visible={state.pickerVisible}  onPick={handlePick} onSelect={handleSelectRange} onSelect={handleSelectChange} className="tiny-tw"></Component>

    


    
<tinyDate style={{display:state.isMobileScreen && state.isDateMobileComponent?'block':'none'}} ref={datePickerMobile} v-ref="datePickerMobile" value={state.dateMobileOption.value} onChange={(e)=>state.dateMobileOption.value = e.value} title={title} clearable={clearable} step={step} show-time-second={state.showSeconds} range-separator={rangeSeparator} end-placeholder={endPlaceholder} custom-class="max-h-[80%]" type={state.dateMobileOption.type} visible={state.dateMobileOption.visible} picker-options={pickerOptions} onConfirm={emitInput} onClear={emitInput} onUpdate:visible={dateMobileToggle}>    </tinyDate>

    


    
<tinyTime style={{display:state.isMobileScreen && state.isTimeMobileComponent?'block':'none'}} ref={datePickerMobile} v-ref="datePickerMobile" value={state.timeMobileOption.value} onChange={(e)=>state.timeMobileOption.value = e.value} title={title} clearable={clearable} step={step} show-seconds={state.showSeconds} custom-class="max-h-[80%]" type={state.timeMobileOption.type} visible={state.timeMobileOption.visible} onConfirm={timeMobileConfirm} onUpdate:visible={timeMobileToggle}>    </tinyTime>

  </div>


      );
    }
    