
    import { renderless, api } from '@opentiny/vue-renderless/signature/vue'
    import '@opentiny/vue-theme/signature/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function signature(props) {
      const {type,height,penColor,lineWidth,rewriteButtonText,resignButtonText,cancelButtonText,backgroundColor,submitButtonText,placeholder,showSubmitButton,value} = props
      const defaultProps = {
        ...$props,
        ...props,
        type,height,penColor,lineWidth,rewriteButtonText,resignButtonText,cancelButtonText,backgroundColor,submitButtonText,placeholder,showSubmitButton,value
      }
      const { ref, current: vm, parent } = useVm()
      const wrapRef=useRef()
const canvasRef=useRef()
      const { state,toggleFullscreen,rewrite,touchStart,touchMove,touchEnd,cancel,submit } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[wrapRef,canvasRef]
      })
      return (
          
<teleport to="body" data-tag="tiny-signature" disabled={!state.isFullscreen}  className="w-full h-full">    
<div ref={wrapRef} v-ref="wrapRef" style="transform-origin: calc(100vw / 2) center"  className={vc([
        'flex justify-center items-center bg-color-bg-2',
        state.isFullscreen ? 'fixed inset-0 z-[9999]' : 'relative',
        state.current === 'default' && state.isFullscreen ? 'rotate-90 w-[100vh] h-[100vw]' : 'w-full h-full'
      ])}>      
<div onClick={toggleFullscreen}  className="absolute cursor-pointer p-2 right-1 top-1">        
<iconMinscreen  style={{display:state.isFullscreen?'block':'none'}} className="w-6 h-6"></iconMinscreen>

        
<iconFullscreen  style={{display:!(state.isFullscreen)?'block':'none'}} className="w-6 h-6"></iconFullscreen>

      </div>

      
<div style={{display:state.value?'block':'none'}}  className="absolute w-full h-full flex align-middle justify-center z-[999] bg-color-bg-2">        
<img  draggable="false" src={value} className="block max-w-full h-auto select-none"></img>

        
<tinyButton onClick={rewrite} size="small" type="text" custom-class="absolute right-2 bottom-2 text-color-info-primary">{resignButtonText}</tinyButton>

      </div>

      
<div  data-tag="tiny-signature__content" className="w-full h-full">        
<canvas ref={canvasRef} v-ref="canvasRef" width={state.width} height={state.height} data-tiny-touch-simulate-container onTouchstart={touchStart} onTouchmove={touchMove} onTouchend={touchEnd}  className="w-full h-full"></canvas>

      </div>

      
<div data-tag="tiny-signature__footer"  className="absolute flex justify-end origin-top right-2 bottom-2">        
<tinyButton onClick={rewrite} size="small" type="text" custom-class="mt-2 -mr-1 text-color-info-primary">{rewriteButtonText}</tinyButton>

        
<tinyButton style={{display:state.current !== 'default' && state.isFullscreen?'block':'none'}} size="small" onClick={cancel} custom-class="mt-2">{cancelButtonText}</tinyButton>

        
<tinyButton style={{display:showSubmitButton?'block':'none'}} onClick={submit} size="small" type="primary" custom-class="mt-2 ml-1">{submitButtonText}</tinyButton>

      </div>

    </div>

  </teleport>


      );
    }
    