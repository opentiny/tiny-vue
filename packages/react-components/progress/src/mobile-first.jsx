
    import { renderless, api } from '@opentiny/vue-renderless/progress/vue'
    import '@opentiny/vue-theme/progress/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function progress(props) {
      const {type,percentage,status,strokeWidth,textInside,width,showText,color,format,size,info} = props
      const defaultProps = {
        ...$props,
        ...props,
        type,percentage,status,strokeWidth,textInside,width,showText,color,format,size,info
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
          
<div  role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" data-tag="tiny-progress" className={vc([type !== 'line' && 'inline-block text-center'])}>    
<div data-tag="tiny-progress-content"   className={vc([type === 'line' ? 'flex items-center' : 'inline-block'],'relative leading-none')}>      
<div data-tag="tiny-progress-line"   style={{display:type === 'line'?'block':'none'}} className={vc([!showText ? 'pr-0 mr-0 block' : '', textInside ? 'pr-0 mr-0' : ''],'box-border inline-block align-middle flex-1')}>        
<div data-tag="tiny-progress-strokewidth"   style={state.strokeWidth ? { height: state.strokeWidth + 'px' } : {}} className={vc([size === 'small' ? 'h-1' : '', size === 'medium' ? 'h-2' : '', size === 'large' ? 'h-4' : ''],'rounded-full bg-color-bg-3 overflow-hidden relative align-middle')}>          
<transition appear appear-class="custom-appear-class" onBefore={customBeforeAppearHook} onAppear={customAppearHook} onAfter={customAfterAppearHook}>            
<div data-tag="tiny-progress-bar"  style={state.barStyle} className={vc([
                m(
                  `absolute left-0 top-0 h-full bg-color-brand text-right rounded-full leading-none whitespace-nowrap transition-[width] duration-500 ease-in after:content-[''] after:h-full after:inline-block after:align-middle`,
                  status === 'success' && 'bg-color-success',
                  status === 'warning' && 'bg-color-warning',
                  status === 'exception' && 'bg-color-error'
                )
              )}>              
<div  style={{display:showText && textInside?'block':'none'}} className="text-color-text-inverse text-xs mr-3 inline-block align-middle">                
{state.content}

              </div>

            </div>

          </transition>

        </div>

      </div>

      
<div data-tag="tiny-progress-circle-style"   style={width ? state.circleStyle : {}} style={{display:!(showText && textInside)?'block':'none'}} className={vc([size === 'small' && 'w-12 h-12', size === 'medium' && 'w-24 h-24', size === 'large' && 'w-40 h-40'],'inline-block')}>        
<svg viewBox="0 0 100 100">          
<path d={state.trackPath} stroke="#E8EBEF" stroke-width={state.relativeStrokeWidth} fill="none" style={state.trailPathStyle}></path>

          
<transition appear appear-class="custom-appear-class" onBefore={customBeforeAppearHook} onAppear={customAppearHook} onAfter={customAfterAppearHook}>            
<path d={state.trackPath} stroke={state.stroke} fill="none" stroke-linecap="round" stroke-width={percentage ? state.relativeStrokeWidth : 0} style={state.circlePathStyle}></path>

          </transition>

        </svg>

      </div>

      
<div  style={{display:showText && !textInside?'block':'none'}} style={{ fontSize: state.progressTextSize + 'px' }} data-tag="tiny-progress-text" className={vc([
          m(
            'text-xs inline-block align-middle ml-3 leading-none',
            !showText && 'hidden',
            type !== 'line'
              ? 'text-color-text-primary absolute top-1/2 left-0 w-full text-center m-0 translate-x-0 -translate-y-1/2'
              : 'text-color-text-primary'
          )
        )}>        
<template style={{display:!status?'block':'none'}}>          
<span style={{display:type === 'line'?'block':'none'}}>            
{state.content}

          </span>

          
<div style={{display:!(type === 'line')?'block':'none'}}  className="text-[0]">            
<span style={{ fontSize: state.progressTextSize + 'px' }}>{typeof format === 'function' ? state.content : percentage}</span>

            
<span style={{display:typeof format !== 'function'?'block':'none'}} style={{ fontSize: state.percentTextSize + 'px' }}>%</span>

          </div>

        </template>

        
<Component style={{display:!(typeof format !== 'function')?'block':'none'}} is={state.iconClass}  style={state.iconStyle} className={vc([
            status === 'success' && 'fill-color-success',
            status === 'warning' && 'fill-color-warning',
            status === 'exception' && 'fill-color-error',
            size === 'small' ? (type === 'line' ? 'w-3 h-3' : 'w-6 h-6') : '',
            size === 'medium' ? (type === 'line' ? 'w-4 h-4' : 'w-10 h-10') : '',
            size === 'large' ? (type === 'line' ? 'w-6 h-6' : 'w-20 h-20') : ''
          ])}></Component>

      </div>

    </div>

    
<div data-tag="tiny-progress-info" style={{display:type !== 'line' && info?'block':'none'}}  className="mt-2 text-center text-sm text-color-text-secondary">      
{info}

    </div>

  </div>


      );
    }
    