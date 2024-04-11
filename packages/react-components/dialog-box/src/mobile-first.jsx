
    import { renderless, api } from '@opentiny/vue-renderless/dialog-box/vue'
    import '@opentiny/vue-theme/dialog-box/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dialogBox(props) {
      const {resize,isFormReset,visible,title,modal,modalAppendToBody,appendToBody,lockScroll,closeOnClickModal,closeOnPressEscape,showClose,width,fullscreen,top,center,draggable,showHeader,rightSlide,destroyOnClose,dialogClass,beforeClose,maxHeight} = props
      const defaultProps = {
        ...$props,
        ...props,
        resize,isFormReset,visible,title,modal,modalAppendToBody,appendToBody,lockScroll,closeOnClickModal,closeOnPressEscape,showClose,width,fullscreen,top,center,draggable,showHeader,rightSlide,destroyOnClose,dialogClass,beforeClose,maxHeight
      }
      const { ref, current: vm, parent } = useVm()
      const dialog=useRef()
      const { state,afterEnter,afterLeave,handleWrapperClick,handleDrag,handleClose } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[dialog]
      })
      return (
          
<div >    
<div style={{display:state.current !== 'default'?'block':'none'}}>      
<transition name={state.animationName} onAfter={afterEnter} onAfter={afterLeave}>        
<div style={{display:visible?'block':'none'}}  data-tag="tiny-dialog-box__wrapper" onClick={handleWrapperClick} className={vc(['fixed inset-0 m-0 flex items-center', dialogClass])}>          
<div ref={dialog} v-ref="dialog" data-tag="tiny-dialog-box" style={{display:destroyOnClose ? visible : true?'block':'none'}}  style={state.style}  key={state.key} className={vc([
              {
                'left-0 top-0 w-screen h-screen': state.isFull,
                'text-center': center,
                'flex flex-col rounded-none': rightSlide
              }
            ],'absolute bg-color-bg-1 border-none overflow-hidden shadow-xl rounded flex flex-col')}>            
<div style={{display:showHeader?'block':'none'}} data-tag="tiny-dialog-box__header"  onMousedown={handleDrag} className="px-6 py-4 h-12 leading-4 bg-color-bg-1 flex justify-between items-center border-b border-b-color-bg-3">              
<Slot name="title" parent_children={props.children} slots={props.slots}>                
<span data-tag="tiny-dialog-box__title"  className="text-sm text-color-text-primary mr-4 flex-1 font-bold">{title}</span>

              </Slot>

              
<button style={{display:showClose?'block':'none'}} type="button" data-tag="tiny-dialog-box__headerbtn"  aria-label="Close" onClick={handleClose('close', $event)} className="border-none p-0 leading-none cursor-pointer focus:outline-0">                
<iconClose data-tag="tiny-svg-size tiny-dialog-box__close"  className="fill-color-text-primary text-base hover:fill-color-brand"></iconClose>

              </button>

              
<button style={{display:resize && !state.isFull?'block':'none'}} type="button" data-tag="tiny-dialog-box__headerbtn"  aria-label="Resize" onClick={state.isFull = true} className="border-none p-0 leading-none cursor-pointer focus:outline-0">                
<iconFullscreen data-tag="tiny-svg-size tiny-dialog-box__close"  className="fill-color-text-primary text-base hover:fill-color-brand"></iconFullscreen>

              </button>

              
<button style={{display:resize && state.isFull?'block':'none'}} type="button" data-tag="tiny-dialog-box__headerbtn"  aria-label="Resize" onClick={state.isFull = false} className="border-none p-0 leading-none cursor-pointer focus:outline-0">                
<iconMinscreen data-tag="tiny-svg-size tiny-dialog-box__close"  className="fill-color-text-primary text-base hover:fill-color-brand"></iconMinscreen>

              </button>

            </div>

            
<div data-tag="tiny-dialog-box__body"   style={state.bodyStyle} className={vc([
                state.isFull ? 'max-h-[calc(100vh-theme(spacing.28))]' : 'max-h-[65vh]',
                rightSlide ? 'max-h-[none] flex-auto' : ''
              ],'text-left pt-0 pr-6 pb-0 pl-6 mb-6 mt-6 text-color-text-primary leading-5 text-sm overflow-auto')}>              
<Slot  parent_children={props.children} slots={props.slots}></Slot>

            </div>

            
<div style={{display:slots.footer?'block':'none'}} data-tag="tiny-dialog-box__footer"  className="pt-4 pr-6 pb-4 pl-6 text-right box-border border-t border-t-color-bg-3 [&_[data-tag=tiny-button]]:mx-1 [&_[data-tag=tiny-button]]:my-0 [&_[data-tag=tiny-toolbar]_[data-tag=tiny-button]]:my-0 [&_[data-tag=tiny-toolbar]_[data-tag=tiny-button]]:mx-1">              
<Slot name="footer" before-close={beforeClose} parent_children={props.children} slots={props.slots}></Slot>

            </div>

          </div>

        </div>

      </transition>

    </div>


    
<div style={{display:state.current === 'default'?'block':'none'}}>      
<tinyAction ref={dialog} v-ref="dialog" style={{display:destroyOnClose ? visible : true?'block':'none'}} $props show-footer={true} mask={modal} mask-closable={closeOnClickModal} before-close={beforeClose} onUpdate:visible={$emit('update:visible', $event)}>        

  {
    slots.map((value, name)=>(
      <template  slot>          
<div  key={name} className={vc({
              'flex w-full justify-between px-4 [&_[data-tag=tiny-button]]:flex-grow [&_[data-tag=tiny-button]:nth-child(2)]:ml-2':
                name === 'footer',
              'px-4 min-h-[250px]': name === 'default'
            })}>            
<Slot name={name} scopeData parent_children={props.children} slots={props.slots}></Slot>

          </div>

        </template>
    ))
  }
  

      </tinyAction>

    </div>

  </div>


      );
    }
    