
    import { renderless, api } from '@opentiny/vue-renderless/drawer/vue'
    import '@opentiny/vue-theme/drawer/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function drawer(props) {
      const {visible,title,showHeader,showFooter,customClass,placement,width,mask,dragable,maskClosable,lockScroll,flex,showClose,zIndex,beforeClose,tipsProps} = props
      const defaultProps = {
        ...$props,
        ...props,
        visible,title,showHeader,showFooter,customClass,placement,width,mask,dragable,maskClosable,lockScroll,flex,showClose,zIndex,beforeClose,tipsProps
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
          
<div data-tag="tiny-drawer"  className="tiny-drawer">    


    
<transition name="drawer-fade">      
<div ref={mask} v-ref="mask" style={{display:mask && visible?'block':'none'}}  style={{ zIndex }} onClick={handleClose('mask')} className={vc(['tiny-drawer__mask', { 'show-bg-color': state.toggle }])}></div>

    </transition>


    


    
<transition name={`drawer-slide-${placement}`}>      
<div data-tag="tiny-drawer-main" ref={drawerBox} v-ref="drawerBox"  style={{
          width: ['left', 'right'].includes(placement) ? state.computedWidth : null,
          zIndex
        }} style={{display:visible?'block':'none'}} className={vc([
          'tiny-drawer__main',
          {
            'is-left': placement === 'left',
            'is-right': placement === 'right',
            'is-top': placement === 'top',
            'is-bottom': placement === 'bottom',
            'drag-effects': !state.dragEvent.isDrag,
            'toggle': state.toggle
          },
          'tiny-drawer-main',
          customClass
        ])}>        
<div data-tag="drawer-drag-bar" ref={dragBar} v-ref="dragBar" style={{display:dragable?'block':'none'}}  className={vc(['tiny-drawer__drag-bar'])}></div>


        
<div  className="tiny-drawer__box">          


          
<div data-tag="drawer-header" ref={header} v-ref="header" style={{display:showHeader?'block':'none'}}  className="tiny-drawer__header-wrapper">            
<Slot name="header" parent_children={props.children} slots={props.slots}>              
<div  className="tiny-drawer__header">                
<div  className="tiny-drawer__header-left">                  
<div style={{display:title?'block':'none'}}  className="tiny-drawer__title">{title}</div>

                  
<tinyTooltip style={{display:tipsProps?'block':'none'}} tipsProps>                    
<iconHelp  className="tiny-drawer__help-icon"></iconHelp>

                  </tinyTooltip>

                </div>

                
<div  className="tiny-drawer__header-right">                  
<Slot name="header-right" parent_children={props.children} slots={props.slots}></Slot>

                </div>

              </div>

            </Slot>

            
<button style={{display:showClose?'block':'none'}} type="button"  aria-label="Close" onClick={handleClose('close')} className="tiny-drawer__headerbtn">              
<iconClose  className="tiny-svg-size tiny-drawer__close"></iconClose>

            </button>

          </div>


          


          
<div data-tag="drawer-body" ref={body} v-ref="body"  className={vc(['tiny-drawer__body', { 'flex flex-col': flex }, 'drawer-body'])}>            
<Slot  parent_children={props.children} slots={props.slots}></Slot>

          </div>


          


          
<div data-tag="drawer-footer" ref={footer} v-ref="footer" style={{display:showFooter?'block':'none'}}  className="tiny-drawer__footer">            
<Slot name="footer" parent_children={props.children} slots={props.slots}>              
<tinyButton type="primary"  onClick={handleClose('confirm')} className={vc(['tiny-drawer__confirm-btn', { reverse: state.btnOrderReversed }])}>{t('ui.button.confirm')}</tinyButton>

              
<tinyButton plain  onClick={handleClose('cancel')} className={vc(['tiny-drawer__cancel-btn', { reverse: state.btnOrderReversed }])}>{t('ui.button.cancel')}</tinyButton>

            </Slot>

          </div>

        </div>

      </div>

    </transition>

  </div>


      );
    }
    