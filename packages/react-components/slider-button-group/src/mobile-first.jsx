
    import { renderless, api } from '@opentiny/vue-renderless/slider-button-group/vue'
    import '@opentiny/vue-theme/slider-button-group/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function sliderButton(props) {
      const {options,modelValue,type,size,pageTurn,duration,nameField,iconField,noArrow,flex,delay,disabled} = props
      const defaultProps = {
        ...$props,
        ...props,
        options,modelValue,type,size,pageTurn,duration,nameField,iconField,noArrow,flex,delay,disabled
      }
      const { ref, current: vm, parent } = useVm()
      const slideBar=useRef()
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[slideBar]
      })
      return (
          
<div data-tag="tiny-slider-button-group">    
<Component style={{display:!pageTurn?'block':'none'}} is={state.tag}  role="sliderButtonGroup" className="inline-flex">      
<div  className="bg-color-bg-3 inline-flex h-auto rounded-md relative box-border">        
<div  style={{
            'transition': 'left 0.25s,width 0.25s',
            'left': state.sliderSpace + 'px',
            'width': state.sliderWidth + 'px',
            'height': state.sliderHeight + 'px'
          }} className={vc(['absolute bg-color-bg-1 shadow-sm h-6 rounded', size === 'large' ? 'top-1' : 'top-0.5'])}></div>

        
<Slot style={{display:options && options.length !== 0?'block':'none'}} parent_children={props.children} slots={props.slots}>          

  {
    options.map((item, index)=>(
      <sliderButton  key={index} item></sliderButton>
    ))
  }
  

        </Slot>

        
<Slot style={{display:!(options && options.length !== 0)?'block':'none'}} parent_children={props.children} slots={props.slots}></Slot>

      </div>

    </Component>

    
<Component style={{display:!(!(options && options.length !== 0))?'block':'none'}} is={state.tag}  role="sliderButtonGroup" className="flex">      
<SlideBar ref={slideBar} v-ref="slideBar" data={options} duration={duration} no-arrow={noArrow} flex={flex} size={size} slider-space={state.sliderSpace} slider-width={state.sliderWidth} slider-height={state.sliderHeight} type={type} sliderCount={state.sliderCount} currentIndex={state.currentIndex} delay={delay}>        
<template slot></template>

        
<template slot></template>

        
<template style={{display:options && options.length !== 0?'block':'none'}} slot>          
<Slot style={{display:type !== 'icon'?'block':'none'}} name="item" slot-scope={node} index={index} parent_children={props.children} slots={props.slots}>            
<sliderButton label={node[nameField]} node></sliderButton>

          </Slot>

          
<Slot style={{display:!(type !== 'icon')?'block':'none'}} index={index} parent_children={props.children} slots={props.slots}>            
<sliderButton node><Component is={node[iconField]}></Component></sliderButton>

          </Slot>

        </template>

      </SlideBar>

    </Component>

  </div>


      );
    }
    