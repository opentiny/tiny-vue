
    import { renderless, api } from '@opentiny/vue-renderless/dialog-box/vue'
    import '@opentiny/vue-theme/dialog-box/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dialogBox(props) {
      const {resize,isFormReset,visible,title,modal,modalAppendToBody,appendToBody,lockScroll,closeOnClickModal,closeOnPressEscape,showClose,width,fullscreen,top,center,draggable,dragOutsideWindow,showHeader,rightSlide,destroyOnClose,dialogClass,beforeClose,maxHeight} = props
      const defaultProps = {
        ...$props,
        ...props,
        resize,isFormReset,visible,title,modal,modalAppendToBody,appendToBody,lockScroll,closeOnClickModal,closeOnPressEscape,showClose,width,fullscreen,top,center,draggable,dragOutsideWindow,showHeader,rightSlide,destroyOnClose,dialogClass,beforeClose,maxHeight
      }
      const { ref, current: vm, parent } = useVm()
      const dialog=useRef()
      const { state,afterEnter,afterLeave,handleWrapperClick,useMouseEventUp,useMouseEventDown,handleDrag,handleClose } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[dialog]
      })
      return (
          
<transition name={state.animationName} onAfter={afterEnter} onAfter={afterLeave}>    
<div style={{display:visible?'block':'none'}}  onClick={handleWrapperClick} onMouseup={useMouseEventUp} onMousedown={useMouseEventDown} className={vc(['tiny-dialog-box__wrapper', dialogClass])}>      
<div ref={dialog} v-ref="dialog" style={{display:destroyOnClose ? visible : true?'block':'none'}}  style={state.style}  key={state.key} className={vc([
          {
            'is-fullscreen': state.isFull,
            'is-center': center,
            'is-right-slide': rightSlide
          }
        ],'tiny-dialog-box')}>        
<div style={{display:showHeader?'block':'none'}}  onMousedown={handleDrag} className="tiny-dialog-box__header">          
<Slot name="title" parent_children={props.children} slots={props.slots}>            
<span  className="tiny-dialog-box__title">{title}</span>

          </Slot>

          
<button style={{display:showClose?'block':'none'}} type="button"  aria-label="Close" onClick={handleClose('close', $event)} className="tiny-dialog-box__headerbtn">            
<iconClose  className="tiny-svg-size tiny-dialog-box__close"></iconClose>

          </button>

          
<button style={{display:resize && !state.isFull?'block':'none'}} type="button"  aria-label="Resize" onClick={state.isFull = true} className="tiny-dialog-box__headerbtn">            
<iconFullscreen  className="tiny-svg-size tiny-dialog-box__close"></iconFullscreen>

          </button>

          
<button style={{display:resize && state.isFull?'block':'none'}} type="button"  aria-label="Resize" onClick={state.isFull = false} className="tiny-dialog-box__headerbtn">            
<iconMinscreen  className="tiny-svg-size tiny-dialog-box__close"></iconMinscreen>

          </button>

        </div>

        
<div  style={state.bodyStyle} className="tiny-dialog-box__body">          
<Slot  parent_children={props.children} slots={props.slots}></Slot>

        </div>

        
<div style={{display:slots.footer?'block':'none'}}  className="tiny-dialog-box__footer">          
<Slot name="footer" before-close={beforeClose} parent_children={props.children} slots={props.slots}></Slot>

        </div>

      </div>

    </div>

  </transition>


      );
    }
    