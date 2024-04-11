
    import { renderless, api } from '@opentiny/vue-renderless/image-viewer/vue'
    import '@opentiny/vue-theme/image-viewer/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function imageViewer(props) {
      const {urlList,zIndex,onSwitch,onClose} = props
      const defaultProps = {
        ...$props,
        ...props,
        urlList,zIndex,onSwitch,onClose
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,hide,prev,next,handleActions,toggleMode,handleImgError,handleMouseDown,handleImgLoad } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<transition name="viewer-fade">    
<div  style={{ 'z-index': state.zIndex }}  className="tiny-image-viewer tiny-image-viewer__wrapper">      
<div  className="tiny-image-viewer__mask"></div>

      


      
<span  onClick={hide} className="tiny-image-viewer__btn tiny-image-viewer__close">        
<iconClose  className="tiny-svg-size"></iconClose>

      </span>

      


      
<template style={{display:!state.isSingle?'block':'none'}}>        
<span   onClick={prev} className={vc({ 'is-disabled': !state.infinite && state.isFirst },'tiny-image-viewer__btn tiny-image-viewer__prev')}>          
<iconChevron  className="tiny-svg-size"></iconChevron>

        </span>

        
<span   onClick={next} className={vc({ 'is-disabled': !state.infinite && state.isLast },'tiny-image-viewer__btn tiny-image-viewer__next')}>          
<iconChevron  className="tiny-svg-size"></iconChevron>

        </span>

      </template>

      


      
<div  className="tiny-image-viewer__btn tiny-image-viewer__actions">        
<div  className="tiny-image-viewer__actions-inner">          
<iconZoom  onClick={handleActions('zoomOut')} className="tiny-svg-size"></iconZoom>

          
<iconZoom  onClick={handleActions('zoomIn')} className="tiny-svg-size"></iconZoom>

          
<i  className="tiny-image-viewer__actions-divider"></i>

          
<Component is={state.mode.icon}  onClick={toggleMode} className="tiny-svg-size"></Component>

          
<i  className="tiny-image-viewer__actions-divider"></i>

          
<iconRepeat  onClick={handleActions('anticlocelise')} className="tiny-svg-size"></iconRepeat>

          
<iconRefres  onClick={handleActions('clocelise')} className="tiny-svg-size"></iconRefres>

        </div>

      </div>

      


      
<div  className="tiny-image-viewer__canvas">        
          
<img style={{display:i === state.index?'block':'none'}} ref={`img_${i}`}  key={url} src={state.currentImg} style={state.imgStyle} onError={handleImgError} onMousedown={handleMouseDown} onLoad={handleImgLoad} className="tiny-image-viewer__img"></img>

        

      </div>

    </div>

  </transition>


      );
    }
    