
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
      
      const { state, } = useSetup({
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
      'tiny-mobile-progress--' + type,
      status ? 'is-' + status : '',
      {
        'tiny-mobile-progress__without-text': !showText,
        'tiny-mobile-progress__inside-text': textInside
      }
    ],'tiny-mobile-progress')}>    
<div  style={{display:type === 'line'?'block':'none'}} className="tiny-mobile-progress-bar">      
<div  style={{ height: strokeWidth + 'px' }} className="tiny-mobile-progress-bar__outer">        
<div  style={state.barStyle} className="tiny-mobile-progress-bar__inner">          
<div  style={{display:showText && textInside && strokeWidth > 12?'block':'none'}} className="tiny-mobile-progress-bar__innerText">            
{state.content}

          </div>

        </div>

      </div>

    </div>

    
<div  style={{ height: width + 'px', width: width + 'px' }} style={{display:!(showText && textInside && strokeWidth > 12)?'block':'none'}} className="tiny-mobile-progress-circle">      
<svg viewBox="0 0 100 100">        
<path  d={state.trackPath} stroke="#e5e9f2" stroke-width={state.relativeStrokeWidth} fill="none" style={state.trailPathStyle} className="tiny-mobile-progress-circle__track"></path>

        
<path  d={state.trackPath} stroke={state.stroke} fill="none" stroke-linecap="round" stroke-width={percentage ? state.relativeStrokeWidth : 0} style={state.circlePathStyle} className="tiny-mobile-progress-circle__path"></path>

      </svg>

    </div>

    
<div  style={{display:showText && !textInside?'block':'none'}} style={{ fontSize: state.progressTextSize + 'px' }} className="tiny-mobile-progress-text">      
<template style={{display:!status?'block':'none'}}>{state.content}</template>

      
<Component style={{display:!(!status)?'block':'none'}} is={state.iconClass}></Component>

    </div>

  </div>


      );
    }
    