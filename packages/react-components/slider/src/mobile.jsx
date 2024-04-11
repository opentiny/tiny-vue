
    import { renderless, api } from '@opentiny/vue-renderless/slider/vue'
    import '@opentiny/vue-theme/slider/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function slider(props) {
      const {modelValue,disabled,max,min,vertical,step,numPages,showTip,showInput,height,range,formatTooltip,changeCompat} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,disabled,max,min,vertical,step,numPages,showTip,showInput,height,range,formatTooltip,changeCompat
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,bindMouseDown,displayTip,hideTip,bindKeyDown,inputOnChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div style="position: relative">    
<div  style={{ height: vertical ? height : '' }} onTouchstart={bindMouseDown} className={vc(['tiny-mobile-slider', { 'tiny-mobile-slider__vertical': vertical, disabled }])}>      
<div  style={state.barStyle} className={vc(['tiny-mobile-slider__range', vertical ? 'tiny-mobile-slider__down' : 'tiny-mobile-slider__left'])}></div>

      
<div  tabindex="0" style={{display:state.leftBtnShow?'block':'none'}} style={state.leftBtnStyle}  onMouseenter={displayTip} onMouseleave={hideTip} onKeydown={bindKeyDown} className={vc({ 'handle-focus': state.activeIndex === 0 },'tiny-mobile-slider__handle')}></div>

      
<div  tabindex="0" style={{display:state.rightBtnShow?'block':'none'}} style={state.rightBtnStyle}  onMouseenter={displayTip} onMouseleave={hideTip} onKeydown={bindKeyDown} className={vc({ 'handle-focus': state.activeIndex === 1 },'tiny-mobile-slider__handle')}></div>

      
<div  style={{display:showTip && state.showTip?'block':'none'}} style={state.tipStyle} className="tiny-mobile-slider__tips">        
{state.tipValue}

      </div>

    </div>

    
<template style={{display:showInput && !state.isDouble?'block':'none'}}>      
<div  className="tiny-mobile-slider__input">        
<Slot slot-scope={state.activeValue} parent_children={props.children} slots={props.slots}>          
<input type="text" value={state.activeValue} onChange={(e)=>state.activeValue = e.value} disabled={disabled} onChange={inputOnChange}></input>

          
<span  className="tiny-mobile-slider__per">%</span>

        </Slot>

      </div>

    </template>

  </div>


      );
    }
    