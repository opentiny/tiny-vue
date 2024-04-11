
    import { renderless, api } from '@opentiny/vue-renderless/popconfirm/vue'
    import '@opentiny/vue-theme/popconfirm/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function popconfirm(props) {
      const {_constants} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants
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
          
<div  className="tiny-popconfirm">    
<div >      
<tinyPopover ref={popover} v-ref="popover" value={state.showPopover} onChange={(e)=>state.showPopover = e.value} placement={placement} trigger="manual" width={width} title={title} popper-class={m('tiny-popconfirm-popover', customClass)} popper-options={popperOptions} reference={reference} onShow={handleEmit('show')} onHide={handleEmit('hide')}>        
<div  className="tiny-popconfirm-popover__container">          
<div  className="tiny-popconfirm-popover__header">            
<Component style={{display:type?'block':'none'}} is={state.getIcon}  className={vc(['tiny-popconfirm-popover__icon', type ? `tiny-popconfirm-popover--${type}` : ''])}>            </Component>

            
<div  className="tiny-popconfirm-popover__title">              
{title}

            </div>

          </div>

          
<div  className="tiny-popconfirm-popover__content">            
{message}

          </div>

          
<div  className="tiny-popconfirm-popover__footer">            
<Slot name="footer" parent_children={props.children} slots={props.slots}>              
<tinyButton style={{display:cancelButton?'block':'none'}}  size="mini" onClick={hide} className="tiny-popconfirm-popover__cancel-button">                
{t('ui.button.cancel')}

              </tinyButton>

              
<tinyButton  size="mini" type="primary" onClick={confirm} className="tiny-popconfirm-popover__confirm-button">                
{t('ui.button.confirm')}

              </tinyButton>

            </Slot>

          </div>

        </div>

        
<template slot>          
<div  onClick={show('click')} onMouseenter={show('hover')} className="tiny-popconfirm__reference">            
<Slot name="reference" parent_children={props.children} slots={props.slots}></Slot>

          </div>

        </template>

      </tinyPopover>

    </div>

  </div>


      );
    }
    