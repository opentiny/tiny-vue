
    import { renderless, api } from '@opentiny/vue-renderless/progress/vue'
    import '@opentiny/vue-theme/progress/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function progress(props) {
      const {type,percentage,status,strokeWidth,textInside,width,showText,color,format} = props
      const defaultProps = {
        ...$props,
        ...props,
        type,percentage,status,strokeWidth,textInside,width,showText,color,format
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,customBeforeAppearHook,customAppearHook,customAfterAppearHook } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div   role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" className={vc([
      'tiny-progress--' + type,
      status ? 'is-' + status : '',
      {
        'tiny-progress--without-text': !showText,
        'tiny-progress--text-inside': textInside
      }
    ],'tiny-progress')}>    
<div  style={{display:type === 'line'?'block':'none'}} className="tiny-progress-bar">      
<div  style={{ height: state.strokeWidth + 'px', borderRadius: `${state.strokeWidth / 2}px` }} className="tiny-progress-bar__outer">        
<transition appear appear-class="custom-appear-class" onBefore={customBeforeAppearHook} onAppear={customAppearHook} onAfter={customAfterAppearHook}>          
<div  style={{ ...state.barStyle, borderRadius: `${state.strokeWidth / 2}px` }} className="tiny-progress-bar__inner">            
<div  style={{display:showText && textInside?'block':'none'}} className="tiny-progress-bar__innerText">              
{state.content}

            </div>

          </div>

        </transition>

      </div>

    </div>

    
<div  style={{ height: state.width + 'px', width: state.width + 'px' }} style={{display:!(showText && textInside)?'block':'none'}} className="tiny-progress-circle">      
<svg viewBox="0 0 100 100">        
<path  d={state.trackPath} stroke="#e5e9f2" stroke-width={state.relativeStrokeWidth} fill="none" style={state.trailPathStyle} className="tiny-progress-circle__track"></path>

        
<transition appear appear-class="custom-appear-class" onBefore={customBeforeAppearHook} onAppear={customAppearHook} onAfter={customAfterAppearHook}>          
<path  d={state.trackPath} stroke={state.stroke} fill="none" stroke-linecap="round" stroke-width={percentage ? state.relativeStrokeWidth : 0} style={state.circlePathStyle} className="tiny-progress-circle__path"></path>

        </transition>

      </svg>

    </div>

    
<div  style={{display:showText && !textInside?'block':'none'}} style={{ fontSize: state.progressTextSize + 'px' }} className="tiny-progress__text">      
<template style={{display:!status?'block':'none'}}>        
{state.content}

      </template>

      
<Component style={{display:!(!status)?'block':'none'}} is={state.iconClass}  className="tiny-svg-size"></Component>

    </div>

  </div>


      );
    }
    