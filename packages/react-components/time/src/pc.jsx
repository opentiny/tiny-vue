
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
<div style={{display:state.visible?'block':'none'}}   className={vc([state.popperClass,'tiny-time-panel tiny-popper]')}>      
<div   className={vc({ 'has-seconds': state.showSeconds },'tiny-time-panel__content')}>        
<timeSpinner ref={spinner} v-ref="spinner" step={step} onChange={handleChange} arrow-control={state.useArrow} show-seconds={state.showSeconds} am-pm-mode={state.amPmMode} onSelect={setSelectionRange} date={state.date}>        </timeSpinner>

      </div>

      
<div  className="tiny-time-panel__footer">        
<button type="button"  onClick={handleCancel} className="tiny-time-panel__btn cancel">          
{t('ui.datepicker.cancel')}

        </button>

        
<button type="button"   onClick={handleConfirm()} className={vc({ confirm: !state.disabled },'tiny-time-panel__btn')}>          
{t('ui.datepicker.confirm')}

        </button>

      </div>

    </div>

  </transition>


      );
    }
    