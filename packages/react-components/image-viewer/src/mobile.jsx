
    import { renderless, api } from '@opentiny/vue-renderless/image-viewer/vue'
    import '@opentiny/vue-theme/image-viewer/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function imageViewer(props) {
      const {urlList,zIndex,onSwitch,onClose,previewVisible,closeShow,arrowShow,toolShow,showIndex,imageFullCurrent,startPosition,asyncClose,deleteButton} = props
      const defaultProps = {
        ...$props,
        ...props,
        urlList,zIndex,onSwitch,onClose,previewVisible,closeShow,arrowShow,toolShow,showIndex,imageFullCurrent,startPosition,asyncClose,deleteButton
      }
      const { ref, current: vm, parent } = useVm()
      const imagePreview=useRef()
      const { state,handleVisible,swipeRight,swipeLeft,handleActions,handleDelete,handleImgLoad,handleImgError,handleMouseDown,touchstart,touchmove,touchend } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[imagePreview]
      })
      return (
          
<transition name="viewer-fade">    
<div  ref={imagePreview} v-ref="imagePreview" style={{ 'z-index': zIndex }} style={{display:state.previewVisible?'block':'none'}} swipeleft swiperight onClick={handleVisible} className="tiny-mobile-image-viewer__wrapper">      
<div  className="tiny-mobile-image-viewer__mask"></div>

      


      
<span  style={{display:closeShow?'block':'none'}} onClick={handleVisible} className="tiny-mobile-image-viewer__btn tiny-mobile-image-viewer__close">        
<iconClose  className="tiny-svg-size"></iconClose>

      </span>

      


      
<div  style={{display:showIndex?'block':'none'}} className="tiny-mobile-image-viewer__btn tiny-mobile-image-viewer__index">        
<Slot name="index" value={state.index + 1} parent_children={props.children} slots={props.slots}>          
<span  className="tiny-mobile-image-viewer__index--curren">{state.index + 1}</span>

          
<span >/</span>

          
<span  className="tiny-mobile-image-viewer__index--total">{urlList.length}</span>

        </Slot>

      </div>

      


      
<template style={{display:!state.isSingle && arrowShow?'block':'none'}}>        
<span   onClick={swipeRight} className={vc({
            'is-disabled': !state.infinite && state.isFirst,
            'is-arrow-disabled': state.arrowStyle === 'N'
          },'tiny-mobile-image-viewer__btn tiny-mobile-image-viewer__prev')}>          
<iconChevron  className="tiny-svg-size"></iconChevron>

        </span>

        
<span   onClick={swipeLeft} className={vc({
            'is-disabled': !state.infinite && state.isLast,
            'is-arrow-disabled': state.arrowStyle === 'Y'
          },'tiny-mobile-image-viewer__btn tiny-mobile-image-viewer__next')}>          
<iconChevron  className="tiny-svg-size"></iconChevron>

        </span>

      </template>

      


      
<div  style={{display:toolShow?'block':'none'}} className="tiny-mobile-image-viewer__btn tiny-mobile-image-viewer__actions">        
<div  className="tiny-mobile-image-viewer__actions-inner">          
<Slot name="tool" parent_children={props.children} slots={props.slots}>            
<iconZoom  onClick={handleActions('zoomOut')} className="tiny-svg-size"></iconZoom>

            
<iconZoom  onClick={handleActions('zoomIn')} className="tiny-svg-size"></iconZoom>

            
<iconRepeat  onClick={handleActions('anticlocelise')} className="tiny-svg-size"></iconRepeat>

            
<iconRefres  onClick={handleActions('clocelise')} className="tiny-svg-size"></iconRefres>

            
<iconDel  style={{display:deleteButton?'block':'none'}} onClick={handleDelete()} className="tiny-svg-size"></iconDel>

          </Slot>

        </div>

      </div>

      


      
<div  className="tiny-mobile-image-viewer__canvas">        
<div  style={{
            width: `${state.iamgeAllWidth}px`,
            'transition-duration': `${state.imageTransition}ms`,
            transform: 'translateX(' + state.imageTransformSize + 'px)'
          }} className="tiny-mobile-image-viewer__wrap">          

  {
    state.urlList.map((url, i)=>(
      <div   key={i} style={Object.assign({ width: `${state.imageItemWidth}px` }, i === state.index ? state.imgStyle : '')} className="tiny-mobile-image-viewer__item">            
<div  style="transition-duration: 0.3s" className="tiny-mobile-image-viewer__detail">              
<img ref={`img_${i}`}   key={url} src={url} onLoad={handleImgLoad} onError={handleImgError} onMousedown={handleMouseDown} onTouchstart={touchstart} onTouchmove={touchmove} onTouchend={touchend} className={vc({ 'is-full-screen': state.fullScreen },'tiny-mobile-image-viewer__img')}></img>

            </div>

          </div>
    ))
  }
  

        </div>

      </div>

    </div>

  </transition>


      );
    }
    