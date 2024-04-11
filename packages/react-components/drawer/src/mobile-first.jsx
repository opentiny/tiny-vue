
    import { renderless, api } from '@opentiny/vue-renderless/drawer/vue'
    import '@opentiny/vue-theme/drawer/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function drawer(props) {
      const {visible,title,showHeader,showFooter,customClass,placement,width,mask,dragable,maskClosable,lockScroll,flex,beforeClose} = props
      const defaultProps = {
        ...$props,
        ...props,
        visible,title,showHeader,showFooter,customClass,placement,width,mask,dragable,maskClosable,lockScroll,flex,beforeClose
      }
      const { ref, current: vm, parent } = useVm()
      const mask=useRef()
const drawerBox=useRef()
const dragBar=useRef()
const header=useRef()
const body=useRef()
const footer=useRef()
      const { state,handleClose } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[mask,drawerBox,dragBar,header,body,footer]
      })
      return (
          
<div data-tag="tiny-drawer"  style={{display:visible?'block':'none'}} className="text-sm">    


    
<div ref={mask} v-ref="mask" style={{display:mask?'block':'none'}}  onClick={handleClose('mask')} className={vc([
        m('fixed z-50 left-0 right-0 top-0 bottom-0 w-full h-full transition-opacity ease-linear duration-200', {
          'bg-color-bg-7': state.toggle
        })
      )}></div>

    


    
<div data-tag="tiny-drawer-main" ref={drawerBox} v-ref="drawerBox"  style={{ width: ['left', 'right'].includes(placement) ? state.computedWidth : null }} className={vc([
        m(
          'fixed w-full max-w-full flex flex-col bg-color-bg-1 z-50 shadow-sm border-color-border-separator',
          { 'transition-all ease-linear duration-200': !state.dragEvent.isDrag },
          { 'h-full': ['left', 'right'].includes(placement) },
          { 'max-h-full': ['top', 'bottom'].includes(placement) },
          { 'left-0 bottom-0 translate-y-full border-t-0.5 rounded-t-lg': placement === 'bottom' },
          { 'left-0 top-0 -translate-y-full border-b-0.5 rounded-b-lg': placement === 'top' },
          { 'translate-y-0': ['top', 'bottom'].includes(placement) && state.toggle },
          { 'left-0 top-0 -translate-x-full border-r-0.5 rounded-r-lg': placement === 'left' },
          { 'right-0 top-0 translate-x-full border-l-0.5 rounded-l-lg': placement === 'right' },
          { 'translate-x-0': ['left', 'right'].includes(placement) && state.toggle },
          customClass
        )
      )}>      
<div data-tag="drawer-drag-bar" ref={dragBar} v-ref="dragBar" style={{display:dragable?'block':'none'}}  className={vc(['h-full absolute top-0 w-2 cursor-e-resize', placement === 'left' ? '-right-1' : '-left-1'])}></div>

      
<div  className={vc(['flex-auto flex-col flex max-h-full overflow-hidden'])}>        


        
<div data-tag="drawer-header" ref={header} v-ref="header" style={{display:showHeader?'block':'none'}}  className="flex-none flex leading-6 p-4 text-base items-center">          
<Slot name="header" parent_children={props.children} slots={props.slots}>            
<div style={{display:title?'block':'none'}}  className="max-w-[80%] pr-4 text-left truncate">{title}</div>

            
<div  className="flex-1 flex items-center justify-end">              
<Slot name="header-right" parent_children={props.children} slots={props.slots}>                
<IconClose custom-class="h-5 w-5 cursor-pointer" onClick={handleClose('close')}></IconClose>

              </Slot>

            </div>

          </Slot>

        </div>

        


        
<div data-tag="drawer-body" ref={body} v-ref="body"  className={vc(['flex-auto overflow-auto', { 'flex flex-col': flex }])}>          
<Slot  parent_children={props.children} slots={props.slots}></Slot>

        </div>

        


        
<div data-tag="drawer-footer" ref={footer} v-ref="footer" style={{display:showFooter?'block':'none'}}  className="px-4 py-3">          
<div  className="flex-1 text-right">            
<Slot name="footer" parent_children={props.children} slots={props.slots}>              
<tinyButton tiny_mode="mobile-first" onClick={handleClose('cancel')}>{t('ui.button.cancel')}</tinyButton>

              
<tinyButton tiny_mode="mobile-first"  type="primary" onClick={handleClose('confirm')} className="ml-2">{t('ui.button.confirm')}</tinyButton>

            </Slot>

          </div>

        </div>

      </div>

    </div>

  </div>


      );
    }
    