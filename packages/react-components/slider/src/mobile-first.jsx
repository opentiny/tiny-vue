
    import { renderless, api } from '@opentiny/vue-renderless/slider/vue'
    import '@opentiny/vue-theme/slider/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function slider(props) {
      const {modelValue,disabled,max,min,step,numPages,showTip,showInput,height,range,formatTooltip,showSteps,showLabel,formatLabel,vertical,unit,changeCompat} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,disabled,max,min,step,numPages,showTip,showInput,height,range,formatTooltip,showSteps,showLabel,formatLabel,vertical,unit,changeCompat
      }
      const { ref, current: vm, parent } = useVm()
      const slider=useRef()
const sliderTip=useRef()
      const { state,bindMouseDown,displayTip,hideTip,bindKeyDown,inputValueChange,inputOnChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[slider,sliderTip]
      })
      return (
          
<div data-tag="tiny-slider"  className="relative flex h-auto flex-row w-full">    
<div data-tag="tiny-slider-left"  className="self-center mr-2 block sm:hidden text-sm">      
<Slot name="left" parent_children={props.children} slots={props.slots}>        
{min}

      </Slot>

    </div>

    
<div ref={slider} v-ref="slider" role="tiny-slider"   onTouchstart={bindMouseDown} onMousedown={bindMouseDown} className={vc([state.disabled ? 'cursor-default' : 'cursor-pointe'],'relative w-full h-1 flex-1 my-4 mx-0 bg-color-none-disabled')}>      
<div data-tag="tiny-slider-range" role="tiny-slider__range"   style={state.barStyle} className={vc([state.disabled ? 'bg-color-none' : 'bg-color-brand'],'absolute rounded left-0 h-1')}></div>

      
<div data-tag="tiny-slider-handle" role="tiny-slider__handle" tabindex="0" style={{display:state.leftBtnShow?'block':'none'}}   style={state.leftBtnStyle} onMouseenter={displayTip} onMouseleave={hideTip} onTouchstart={displayTip} onTouchend={hideTip} onKeydown={bindKeyDown} className={vc([
          state.disabled
            ? 'border-color-none-hover cursor-not-allowed'
            : 'cursor-grab hover:border-color-brand-hover hover:border-solid hover:border-2 active:border-2 active:border-solid active:border-color-brand-active',
          state.activeIndex === 0 ? 'z-20' : 'z-10'
        ],'absolute w-6 h-6 sm:w-5 sm:h-5 box-border shadow-xsm rounded-full bg-color-bg-1 -translate-x-2.5 -translate-y-1/2 left-0 top-0.5')}></div>

      
<div data-tag="tiny-slider-handle" role="tiny-slider__handle" tabindex="0" style={{display:state.rightBtnShow?'block':'none'}}   style={state.rightBtnStyle} onMouseenter={displayTip} onMouseleave={hideTip} onTouchstart={displayTip} onTouchend={hideTip} onKeydown={bindKeyDown} className={vc([
          state.disabled
            ? 'border-color-none-hover cursor-not-allowed'
            : 'cursor-grab hover:border-color-brand-hover hover:border-solid hover:border-2 active:border-2 active:border-solid active:border-color-brand-active',
          state.activeIndex === 1 ? 'z-20' : 'z-10'
        ],'absolute w-6 h-6 sm:w-5 sm:h-5 box-border shadow-xsm rounded-full bg-color-bg-1 -translate-x-2.5 -translate-y-1/2 left-0 top-0.5')}></div>

      
<div ref={sliderTip} v-ref="sliderTip" data-tag="tiny-slider-showtips" style={{display:showTip && state.showTip?'block':'none'}}  style={state.tipStyle} className={vc([
          'absolute bottom-6 px-4 py-1.5 bg-color-bg-1 shadow-lg rounded select-none z-10 whitespace-nowrap text-sm sm:text-xs',
          'after:content-[\'\'] after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:w-0 after:h-2',
          'after:border-t-8 after:border-r-8 after:border-l-8 after:border-t-color-bg-1 after:border-x-transparent'
        ])}>        
{state.tipValue}

      </div>

      
<div data-tag="tiny-slider-showsteps" style={{display:showSteps?'block':'none'}}>        

  {
    state.points.map((p, i)=>(
      <div data-tag="tiny-slider-points"    key={p.position + i} style={{ 'left': p.position }} className={vc([
            p.value >= Math.min(state.rightBtnValue, state.leftBtnValue) &&
            p.value <= Math.max(state.rightBtnValue, state.leftBtnValue)
              ? 'bg-color-brand'
              : 'bg-color-bg-3',
            state.disabled ? 'bg-color-border-disabled' : ''
          ],'w-0.5 h-0.5 rounded-full sm:rounded absolute sm:h-1 bottom-1.5 sm:bottom-1')}></div>
    ))
  }
  

      </div>

      
<div data-tag="tiny-slider-label" style={{display:showLabel?'block':'none'}}  className="hidden sm:block w-full h-4 mt-4">        

  {
    state.labels.map((p, i)=>(
      <div    key={p.position + i} style={{ 'left': p.position, 'max-width': `calc( ${max / step}% - 20px )` }} className={vc([state.disabled ? 'text-color-text-disabled' : 'text-color-text-primary'],'absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full')}>          
{p.label}

        </div>
    ))
  }
  

      </div>

    </div>

    
<div data-tag="tiny-slider-right"  className="self-center ml-2 block text-sm sm:hidden">      
<Slot name="right" parent_children={props.children} slots={props.slots}>        
{max}

      </Slot>

    </div>

    
<template style={{display:showInput?'block':'none'}}>      
<div data-tag="tiny-slider-isdouble" style={{display:state.isDouble?'block':'none'}}  className="relative flex justify-between items-center ml-5">        
<Slot slot-scope={state.inputValue} parent_children={props.children} slots={props.slots}>          
<input type="text" value={state.inputValue[0]} onChange={(e)=>state.inputValue[0] = e.value} disabled={state.disabled} onChange={inputValueChange($event, 'left')}  className="h-8 w-12 outline-0 px-2 py-0 text-center border border-color-bg-3 hover:border-color-border-hover focus:border-color-brand-focus disabled:border-color-border rounded"></input>

          
<div   className={vc([state.disabled ? 'bg-color-border-disabled' : 'bg-color-text-primary'],'h-px w-4 mx-2 my-0')}></div>

          
<input type="text" value={state.inputValue[1]} onChange={(e)=>state.inputValue[1] = e.value} disabled={state.disabled} onChange={inputValueChange($event, 'right')}  className="h-8 w-12 outline-0 px-2 py-0 text-center border border-color-bg-3 hover:border-color-border-hover focus:border-color-brand-focus disabled:border-color-border rounded"></input>

          
<span  className="ml-2">{unit}</span>

        </Slot>

      </div>

      
<div data-tag="tiny-slider-active-value" style={{display:!(state.isDouble)?'block':'none'}}  className="ml-5 self-center">        
<Slot slot-scope={state.activeValue} parent_children={props.children} slots={props.slots}>          
<input type="text" value={state.activeValue} onChange={(e)=>state.activeValue = e.value} onChange={inputOnChange}  disabled={state.disabled} className="h-8 w-12 outline-0 px-2 py-0 text-center border border-color-bg-3 hover:border-color-border-hover focus:border-color-brand-focus disabled:border-color-border rounded"></input>
<span  className="ml-2">{unit}</span>

        </Slot>

      </div>

    </template>

  </div>


      );
    }
    