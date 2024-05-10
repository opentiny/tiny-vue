
    import { renderless, api } from '@opentiny/vue-renderless/user-head-group/vue'
    import '@opentiny/vue-theme/user-head-group/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function userHead(props) {
      const {groupSize,list,horizontal,showMax,color,backgroundColor} = props
      const defaultProps = {
        ...$props,
        ...props,
        groupSize,list,horizontal,showMax,color,backgroundColor
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleClick,mouseEnter } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-user-head-group"  className="inline-block">    
<div style={{ 'width': state.width + 'px', 'min-height': state.minHeight + 'px' }}  style={{display:!horizontal?'block':'none'}} data-tag="tiny-user-head-group-horizontal" className={vc([state.list.length === 3 ? 'block text-center' : 'flex items-center justify-around flex-wrap'])}>      
<template style={{display:state.list.length === 3?'block':'none'}}>        
<div  data-tag="tiny-user-head-group-first" className="leading-[0] mb-px">          
<tinyUser background-color={state.list[0].backgroundColor} color={state.list[0].color} round={state.list[0].round} type={state.list[0].type} value={state.list[0].modelValue} onChange={(e)=>state.list[0].modelValue = e.value}></tinyUser>

        </div>

        
<div  data-tag="tiny-user-head-group-center" className="flex items-center justify-around">          

  {
    state.list.slice(1, 3).map((item, i)=>(
      <div  key={i}  className="inline-block leading-[0]">            
<tinyUser background-color={item.backgroundColor} color={item.color} round={item.round} type={item.type} value={item.modelValue} onChange={(e)=>item.modelValue = e.value}></tinyUser>

          </div>
    ))
  }
  

        </div>

      </template>

      
<template style={{display:!(state.list.length === 3)?'block':'none'}}>        

  {
    state.list.slice(0, 4).map((item, i)=>(
      <div data-tag="tiny-user-head-group-all"  key={i}  className="leading-[0]">          
<tinyUser background-color={item.backgroundColor} color={item.color} round={item.round} type={item.type} value={item.modelValue} onChange={(e)=>item.modelValue = e.value}></tinyUser>

        </div>
    ))
  }
  

      </template>

    </div>

    
<div data-tag="tiny-user-head-group-nothorizontal" style={{display:!(!(state.list.length === 3))?'block':'none'}}  className="flex items-center cursor-pointer">      

  {
    state.list.slice(
          0,
          state.list.length > 4 ? (showMax ? (state.list.length > 6 ? 5 : state.list.length) : 3) : state.list.length
        ).map((item, index)=>(
      <div data-tag="tiny-user-head-group-maxitem"  key={index} style={{ 'margin-left': index !== 0 && -state.horizontalLeft + 'px' }}  className="leading-[0]">        
<tinyUser  round={item.round} type={item.type} value={item.modelValue} onChange={(e)=>item.modelValue = e.value} onClick={handleClick} onMouseenter={mouseEnter} className="rounded-full border border-color-bg-1 border-solid"></tinyUser>

      </div>
    ))
  }
  

      
<div data-tag="tiny-user-head-group-maxitem" style={{ 'margin-left': -state.horizontalLeft + 'px' }}  className={vc([
          'leading-[0] z-10',
          state.list.length > 4 ? (showMax ? state.list.length <= 6 && 'hidden' : 'block') : 'hidden'
        ])}>        
<div data-tag="tiny-user-head-group-size"  style={{
            'height': `${groupSize}px`,
            'width': `${groupSize}px`,
            'lineHeight': `${groupSize}px`
          }} round={state.list[state.list.length - 1].round} type={state.list[state.list.length - 1].type} onClick={handleClick} onMouseenter={mouseEnter} className="rounded-full border border-color-bg-1 border-solid flex justify-center items-center text-color-text-primary bg-color-border-separator box-content">          
{'+' + (state.list.length - (showMax ? 6 : 3))}

        </div>

      </div>

    </div>

  </div>


      );
    }
    