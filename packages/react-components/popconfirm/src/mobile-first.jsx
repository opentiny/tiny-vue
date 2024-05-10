
    import { renderless, api } from '@opentiny/vue-renderless/popconfirm/vue'
    import '@opentiny/vue-theme/popconfirm/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function popconfirm(props) {
      const {_constants,message,customClass,trigger,cancelButton,title,placement,width,type,reference,events} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants,message,customClass,trigger,cancelButton,title,placement,width,type,reference,events
      }
      const { ref, current: vm, parent } = useVm()
      const popover=useRef()
      const { state,handleEmit,hide,confirm,show } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[popover]
      })
      return (
          
<div data-tag="tiny-popconfirm"  className="inline-block">    
<tinyPopover ref={popover} v-ref="popover" tiny_mode="mobile-first" value={state.showPopover} onChange={(e)=>state.showPopover = e.value} placement={placement} trigger="manual" width={width} title={title} popper-class={m('min-w-[theme(spacing.44)] max-w-[theme(spacing.96)]', customClass)} reference={reference} onShow={handleEmit('show')} onHide={handleEmit('hide')}>      
<template slot>        
<div data-tag="tiny-popconfirm-header"  className="flex items-center leading-6 sm:pt-1">          
<Component style={{display:type?'block':'none'}} is={state.getIcon}  className={vc([
              m(
                'h-6 w-6 mr-2',
                { 'fill-color-info-secondary': type === 'info' },
                { 'fill-color-error': type === 'error' },
                { 'fill-color-warning': type === 'warning' },
                { 'fill-color-success': type === 'success' }
              )
            )}>          </Component>

          
<div  className="flex-auto">{title}</div>

        </div>

      </template>

      
<template slot>        
<div data-tag="tiny-popconfirm-content">          
<div  className="sm:leading-6 sm:text-xs sm:text-color-text-secondary">{message}</div>

        </div>

      </template>

      
<template slot>        
<div data-tag="tiny-popconfirm-footer"  className="sm:pb-1">          
<div  className="hidden sm:flex mt-4 justify-end">            
<Slot name="footer" parent_children={props.children} slots={props.slots}>              
<tinyButton style={{display:cancelButton?'block':'none'}}  size="mini" tiny_mode="mobile-first" onClick={hide} className="mr-2 w-16">{t('ui.buttonMessage.cancel')}</tinyButton>

              
<tinyButton  size="mini" tiny_mode="mobile-first" type="primary" onClick={confirm} className="w-16">{t('ui.buttonMessage.confirm')}</tinyButton>

            </Slot>

          </div>

          
<div  className="flex sm:hidden text-base justify-center">            
<Slot name="footer" parent_children={props.children} slots={props.slots}>              
<tinyButton style={{display:cancelButton?'block':'none'}} custom-class="flex-1 text-color-text-secondary" tiny_mode="mobile-first" type="text" onClick={hide}>{t('ui.buttonMessage.cancel')}</tinyButton>

              
<span style={{display:cancelButton?'block':'none'}}  className="border-r border-r-color-border-separator"></span>

              
<tinyButton custom-class="flex-1 text-color-brand tiny-modal-mf-button" tiny_mode="mobile-first" type="text" onClick={confirm}>{t('ui.buttonMessage.confirm')}</tinyButton>

            </Slot>

          </div>

        </div>

      </template>

      
<template slot>        
<div  onClick={show('click')} onMouseover={show('hover')} className="inline-block">          
<Slot name="reference" parent_children={props.children} slots={props.slots}></Slot>

        </div>

      </template>

    </tinyPopover>

  </div>


      );
    }
    