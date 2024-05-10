
    import { renderless, api } from '@opentiny/vue-renderless/dialog-box/vue'
    import '@opentiny/vue-theme/dialog-box/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dialogBox(props) {
      const {visible,title,modal,closeOnClickModal,modalAppendToBody,appendToBody,width,top,showHeader,destroyOnClose} = props
      const defaultProps = {
        ...$props,
        ...props,
        visible,title,modal,closeOnClickModal,modalAppendToBody,appendToBody,width,top,showHeader,destroyOnClose
      }
      const { ref, current: vm, parent } = useVm()
      const dialog=useRef()
      const { state,handleWrapperClick,handleCancel,handleConfirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[dialog]
      })
      return (
          
<transition name="dialog-fade">    
<div style={{display:visible?'block':'none'}}  onClick={handleWrapperClick} className="tiny-mobile-dialog-box__wrapper">      
<div ref={dialog} v-ref="dialog"   key={state.key} className={vc({ 'is-hide-header': !showHeader },'tiny-mobile-dialog-box')}>        
<div style={{display:showHeader?'block':'none'}}  className="tiny-mobile-dialog-box__header">          
<Slot name="title" parent_children={props.children} slots={props.slots}>            
<span  className="tiny-mobile-dialog-box__title">{title}</span>

          </Slot>

        </div>

        
<div  className="tiny-mobile-dialog-box__body">          
<Slot  parent_children={props.children} slots={props.slots}></Slot>

        </div>

        
<div  className="tiny-mobile-dialog-box__footer">          
<Slot name="footer" parent_children={props.children} slots={props.slots}>            
<button type="button" onClick={handleCancel}  className="tiny-mobile-dialog-box__button cancel-button">              
{t('ui.dialogBox.cancel')}

            </button>

            
<button type="button" onClick={handleConfirm}  className="tiny-mobile-dialog-box__button confirm-button">              
{t('ui.dialogBox.confirm')}

            </button>

          </Slot>

        </div>

      </div>

    </div>

  </transition>


      );
    }
    