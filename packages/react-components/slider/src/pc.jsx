
    import { renderless, api } from '@opentiny/vue-renderless/slider/vue'
    import '@opentiny/vue-theme/slider/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function slider(props) {
      const {modelValue,disabled,max,min,vertical,step,numPages,showTip,marks,showInput,unit,height,range,formatTooltip,changeCompat} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,disabled,max,min,vertical,step,numPages,showTip,marks,showInput,unit,height,range,formatTooltip,changeCompat
      }
      const { ref, current: vm, parent } = useVm()
      const slider=useRef()
const sliderTip=useRef()
      const { state,bindMouseDown,customBeforeAppearHook,customAfterAppearHook,displayTip,hideTip,bindKeyDown,inputOnChange,handleSlotInputFocus,handleSlotInputBlur,handleSlotInput } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[slider,sliderTip]
      })
      return (
          
<div   className={vc([!vertical && 'tiny-slider-container__horizontal'],'tiny-slider-container')}>    
<div ref={slider} v-ref="slider" role="tiny-slider"  style={{ height: vertical ? height : '' }} onMousedown={bindMouseDown} className={vc([
        'tiny-slider',
        { 'tiny-slider__vertical': vertical, disabled: state.disabled },
        !showInput || state.isDouble ? (state.showAutoWidth ? 'show-auto-width' : '') : ''
      ])}>      
<transition appear appear-class="custom-appear-class" onBefore={customBeforeAppearHook} onAfter={customAfterAppearHook}>        
<div  style={state.barStyle} className={vc(['tiny-slider__range', vertical ? 'tiny-slider__down' : 'tiny-slider__left'])}></div>

      </transition>

      
<div  tabindex="0" style={{display:state.leftBtnShow?'block':'none'}} style={state.leftBtnStyle}  onMouseenter={displayTip} onMouseleave={hideTip} onKeydown={bindKeyDown} className={vc({ 'handle-focus': state.activeIndex === 0 },'tiny-slider__handle')}>        
<svg viewBox="0 0 1024 1024"  className="tiny-slider-left-svg">          
<path  d="M278.863 867.255c0 29.47 24.686 53.36 55.138 53.36s55.138-23.89 55.138-53.36v-838.511c0-29.47-24.686-53.36-55.138-53.36s-55.138 23.89-55.138 53.36v838.511zM3.17 791.027c0 29.47 24.686 53.36 55.138 53.36s55.138-23.89 55.138-53.36v-686.055c0-29.47-24.686-53.36-55.138-53.36s-55.138 23.89-55.138 53.36v686.055zM554.555 791.027c0 29.47 24.686 53.36 55.138 53.36s55.138-23.89 55.138-53.36v-686.055c0-29.47-24.686-53.36-55.138-53.36s-55.138 23.89-55.138 53.36v686.055z" className="tiny-slider-left-svg"></path>

        </svg>

      </div>

      
<div  tabindex="0" style={{display:state.rightBtnShow?'block':'none'}} style={state.rightBtnStyle}  onMouseenter={displayTip} onMouseleave={hideTip} onKeydown={bindKeyDown} className={vc({ 'handle-focus': state.activeIndex === 1 },'tiny-slider__handle')}>        
<svg viewBox="0 0 1024 1024"  className="tiny-slider-right-svg">          
<path  d="M278.863 867.255c0 29.47 24.686 53.36 55.138 53.36s55.138-23.89 55.138-53.36v-838.511c0-29.47-24.686-53.36-55.138-53.36s-55.138 23.89-55.138 53.36v838.511zM3.17 791.027c0 29.47 24.686 53.36 55.138 53.36s55.138-23.89 55.138-53.36v-686.055c0-29.47-24.686-53.36-55.138-53.36s-55.138 23.89-55.138 53.36v686.055zM554.555 791.027c0 29.47 24.686 53.36 55.138 53.36s55.138-23.89 55.138-53.36v-686.055c0-29.47-24.686-53.36-55.138-53.36s-55.138 23.89-55.138 53.36v686.055z" className="tiny-slider-right-svg"></path>

        </svg>

      </div>

      
<div ref={sliderTip} v-ref="sliderTip"  style={{display:showTip && state.showTip?'block':'none'}} style={state.tipStyle} className="tiny-slider__tips">        
{state.tipValue}

      </div>

      
<div style={{display:state.markList?'block':'none'}}>        

  {
    state.markList.map(mark=>(
      <template  key={mark.value}>          
<div  style={mark.positionStyle} className="tiny-slider__mark-point"></div>

          
<div  style={mark.positionStyle} className="tiny-slider__mark-label">{mark.label}</div>

        </template>
    ))
  }
  

      </div>

    </div>

    
<template style={{display:showInput?'block':'none'}}>      
<div  className="tiny-slider__input">        
<Slot slot-scope={state.slotValue} parent_children={props.children} slots={props.slots}>          
<input style={{display:!state.isDouble?'block':'none'}} type="text" value={state.slotValue} onChange={inputOnChange} onFocus={handleSlotInputFocus} onBlur={handleSlotInputBlur} onInput={handleSlotInput($event)} disabled={state.disabled}></input>

          
<template style={{display:!(!state.isDouble)?'block':'none'}}>            
<input value={state.slotValue[0]} onFocus={handleSlotInputFocus} onBlur={handleSlotInputBlur} onInput={handleSlotInput($event)} disabled={state.disabled}></input>

            
<span  className="tiny-slider__input__split">-</span>

            
<input value={state.slotValue[1]} onFocus={handleSlotInputFocus} onBlur={handleSlotInputBlur} onInput={handleSlotInput($event, false)} disabled={state.disabled}></input>

          </template>

          
<span  className="tiny-slider__input__unit">{unit}</span>

        </Slot>

      </div>

    </template>

  </div>


      );
    }
    