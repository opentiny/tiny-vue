
    import { renderless, api } from '@opentiny/vue-renderless/time/vue'
    import '@opentiny/vue-theme/time/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function time(props) {
      const {show,timeArrowControl,emitter,value,step} = props
      const defaultProps = {
        ...$props,
        ...props,
        show,timeArrowControl,emitter,value,step
      }
      const { ref, current: vm, parent } = useVm()
      const spinner=useRef()
      const { state,handleChange,setSelectionRange,handleCancel,handleConfirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[spinner]
      })
      return (
          
<transition name="tiny-zoom-in-top" onAfter={$emit('dodestroy')}>    
<div style={{display:state.visible?'block':'none'}} data-tag="tiny-time-panel tiny-popper us"  className={vc([
        m(
          'my-1 bg-color-bg-1 shadow-md rounded absolute w-60 right-0 z-[1000] box-content select-none',
          state.popperClass
        )
      )}>      
<div data-tag="tiny-time-panel__content"  className={vc(['relative overflow-hidden', { 'has-seconds': state.showSeconds }])}>        
<timeSpinner ref={spinner} v-ref="spinner" step={step} onChange={handleChange} arrow-control={state.useArrow} show-seconds={state.showSeconds} am-pm-mode={state.amPmMode} onSelect={setSelectionRange} date={state.date}>        </timeSpinner>

      </div>

      
<div data-tag="tiny-time-panel__footer"  className="border-t border-t-color-bg-3 py-3 px-4 h-14 leading-7 box-border flex justify-between">        
<tinyButton data-tag="tiny-time-panel__btn cancel" type="text" custom-class="text-color-brand text-left p-0" onClick={handleCancel}>          
{t('ui.datepicker.cancel')}

        </tinyButton>

        
<tinyButton data-tag="tiny-time-panel__btn" type="primary" disabled={state.disabled} onClick={handleConfirm()}>          
{t('ui.datepicker.confirm')}

        </tinyButton>

      </div>

    </div>

  </transition>


      );
    }
    