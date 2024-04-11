
    import { renderless, api } from '@opentiny/vue-renderless/time-picker-mobile/vue'
    import '@opentiny/vue-theme/time-picker-mobile/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function timePicker(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,updateVisible,confirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-time-picker-mobile" style={{display:visible?'block':'none'}}>    
<tinyCascader value={state.dateArr} onChange={(e)=>state.dateArr = e.value} cycle-roll={cycleRoll} options={state.options} disabled={disabled} lock-scroll={lockScroll} custom-panel-class="px-4 pb-4" visible={state.visible} onUpdate:visible={updateVisible} onUpdate:modelValue={confirm}>      
<template slot>        
<div data-tag="tiny-time-picker-split"  className="h-full w-1 flex items-center justify-center absolute left-0 -ml-0.5 text-color-text-primary select-none">          :
        </div>

      </template>

    </tinyCascader>

  </div>


      );
    }
    