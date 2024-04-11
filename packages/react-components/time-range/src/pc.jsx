
    import { renderless, api } from '@opentiny/vue-renderless/time-range/vue'
    import '@opentiny/vue-theme/time-range/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function timeRange(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      const minSpinner=useRef()
const maxSpinner=useRef()
      const { state,handleMinChange,setMinSelectionRange,handleMaxChange,setMaxSelectionRange,handleCancel,handleConfirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[minSpinner,maxSpinner]
      })
      return (
          
<transition name="tiny-zoom-in-top" onAfter={$emit('dodestroy')}>    
<div style={{display:state.visible?'block':'none'}}   className={vc([state.popperClass,'tiny-time-range-picker tiny-picker-panel tiny-popper]')}>      
<div  className="tiny-time-range-picker__content">        
<div  className="tiny-time-range-picker__cell">          
<div  className="tiny-time-range-picker__header">            
{t('ui.datepicker.startTime')}

          </div>

          
<div   className={vc({
              'has-seconds': state.showSeconds,
              'is-arrow': state.arrowControl
            },'tiny-time-range-picker__body tiny-time-panel__content')}>            
<timeSpinner ref={minSpinner} v-ref="minSpinner" show-seconds={state.showSeconds} am-pm-mode={state.amPmMode} onChange={handleMinChange} arrow-control={state.arrowControl} onSelect={setMinSelectionRange} date={state.minDate}>            </timeSpinner>

          </div>

        </div>

        
<div  className="tiny-time-range-picker__cell">          
<div  className="tiny-time-range-picker__header">            
{t('ui.datepicker.endTime')}

          </div>

          
<div   className={vc({
              'has-seconds': state.showSeconds,
              'is-arrow': state.arrowControl
            },'tiny-time-range-picker__body tiny-time-panel__content')}>            
<timeSpinner ref={maxSpinner} v-ref="maxSpinner" show-seconds={state.showSeconds} am-pm-mode={state.amPmMode} onChange={handleMaxChange} arrow-control={state.arrowControl} onSelect={setMaxSelectionRange} date={state.maxDate}>            </timeSpinner>

          </div>

        </div>

      </div>

      
<div  className="tiny-time-panel__footer">        
<button type="button"  onClick={handleCancel()} className="tiny-time-panel__btn cancel">          
{t('ui.datepicker.cancel')}

        </button>

        
<button type="button"  onClick={handleConfirm()} disabled={state.btnDisabled} className="tiny-time-panel__btn confirm">          
{t('ui.datepicker.confirm')}

        </button>

      </div>

    </div>

  </transition>


      );
    }
    