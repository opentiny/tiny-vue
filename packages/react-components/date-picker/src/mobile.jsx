
    import { renderless, api } from '@opentiny/vue-renderless/date-picker/vue'
    import '@opentiny/vue-theme/date-picker/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function datePicker(props) {
      const {modelValue,type,clearable,visible,minDate,maxDate,formatter} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,type,clearable,visible,minDate,maxDate,formatter
      }
      const { ref, current: vm, parent } = useVm()
      const refrence=useRef()
const picker=useRef()
      const { state,hookMounted,showPickerAndLockScroll,clearDisplayValue,onChange,onConfirm,onCancel } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[refrence,picker]
      })
      return (
          
<div >    
<tinyInput onHook={hookMounted} value={state.displayValue} onChange={(e)=>state.displayValue = e.value} ref={refrence} v-ref="refrence" onFocus={showPickerAndLockScroll} readOnly="true" _mode={_mode}>      
<iconClose slot="suffix" style={{display:!state.clearable?'block':'none'}} onClick={clearDisplayValue}></iconClose>

    </tinyInput>

    
<tinyMini value={state.visible} onChange={(e)=>state.visible = e.value} ref={picker} v-ref="picker" columns={state.columns} onChange={onChange} onConfirm={onConfirm} onCancel={onCancel}></tinyMini>

  </div>


      );
    }
    