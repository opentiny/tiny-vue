
    import { renderless, api } from '@opentiny/vue-renderless/action-sheet/vue'
    import '@opentiny/vue-theme/action-sheet/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function actionSheet(props) {
      const {modelValue,visible,title,showHeader,showFooter,showClose,fullscreen,customClass,menus,type,mask,maskClosable,lockScroll,flex,beforeClose} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,visible,title,showHeader,showFooter,showClose,fullscreen,customClass,menus,type,mask,maskClosable,lockScroll,flex,beforeClose
      }
      const { ref, current: vm, parent } = useVm()
      const drawer=useRef()
const header=useRef()
const body=useRef()
const footer=useRef()
      const { state,close,actionSelectOption,confirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[drawer,header,body,footer]
      })
      return (
          
<div data-tag="tiny-action-sheet"  className="text-sm">    
<tinyDrawer ref={drawer} v-ref="drawer" title={title} mask={mask} flex before-close={beforeClose} mask-closable={maskClosable} lock-scroll={lockScroll} show-header={false} custom-class={
        m(
          'rounded-t-lg',
          { 'h-full': fullscreen },
          { 'max-h-[90%]': !fullscreen },
          { 'min-h-[theme(spacing.64)]': type !== 'action' },
          { 'py-4': showHeader && type !== 'action' },
          customClass
        )
      } placement="bottom" visible={visible} onUpdate:visible={$emit('update:visible', $event)}>      


      
<div data-tag="action-sheet-header" ref={header} v-ref="header" style={{display:showHeader && type !== 'action'?'block':'none'}}  className="flex flex-none leading-6 pb-4 px-4 text-base items-center">        
<div  className="flex-1 flex items-center text-left">          
<Slot name="header-left" parent_children={props.children} slots={props.slots}></Slot>

        </div>

        
<div  className="min-w-[50%] max-w-[80%] px-4 text-center truncate font-bold">{title}</div>

        
<div  className="flex-1 flex items-center justify-end">          
<Slot name="header-right" parent_children={props.children} slots={props.slots}>            
<iconClose custom-class="h-5 w-5 cursor-pointer" style={{display:showClose?'block':'none'}} onClick={close}></iconClose>

          </Slot>

        </div>

      </div>

      
<Slot name="body-top" parent_children={props.children} slots={props.slots}></Slot>

      


      
<div data-tag="action-sheet-body" ref={body} v-ref="body"  className={vc(['flex-auto overflow-auto scrollbar-size-0', { 'flex flex-col': flex }])}>        
<template style={{display:type === 'action'?'block':'none'}}>          
<div data-tag="action-box"  className="flex flex-col h-full text-center">            
<div style={{display:title?'block':'none'}} data-tag="action-title"  className="flex-none flex items-center justify-center py-2.5 leading-5 text-sm text-color-none-hover border-b-0.5 border-color-bg-2">              
<span  className="px-4">{title}</span>

            </div>

            
<div  className="flex-auto min-h-[theme(spacing.12)]">              

  {
    menus.map((item, index)=>(
      <div  key={index}  onClick={actionSelectOption(item, index)} className="flex-none flex items-center justify-center h-12 text-base border-b-0.5 border-color-bg-2 cursor-pointer">                
<Slot data={item} index={index} parent_children={props.children} slots={props.slots}><span  className="truncate px-4">{item}</span></Slot>

              </div>
    ))
  }
  

            </div>

            
<div  onClick={close} className="flex-none flex items-center justify-center h-16 text-base border-t-8 border-color-bg-2 px-4 cursor-pointer">              
{t('ui.base.cancel')}

            </div>

          </div>

        </template>

        
<template style={{display:!(title)?'block':'none'}}>          
<Slot  parent_children={props.children} slots={props.slots}></Slot>

        </template>

      </div>

      
<Slot name="body-bottom" parent_children={props.children} slots={props.slots}></Slot>

      


      
<div data-tag="action-sheet-footer" ref={footer} v-ref="footer" style={{display:showFooter?'block':'none'}}  className="flex flex-none pt-2 justify-center">        
<Slot name="footer" before-close={beforeClose} parent_children={props.children} slots={props.slots}>          
<tinyButton tiny_mode="mobile-first"  type="primary" onClick={confirm} className="flex-1 mx-4 sm:mx-0">{t('ui.button.confirm')}</tinyButton>

        </Slot>

      </div>

    </tinyDrawer>

  </div>


      );
    }
    