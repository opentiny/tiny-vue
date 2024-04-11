
    import { renderless, api } from '@opentiny/vue-renderless/drop-times/vue'
    import '@opentiny/vue-theme/drop-times/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dropTimes(props) {
      const {size,tabindex,modelValue,placeholder,start,end,step,popperClass,popperAppendToBody} = props
      const defaultProps = {
        ...$props,
        ...props,
        size,tabindex,modelValue,placeholder,start,end,step,popperClass,popperAppendToBody
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,change } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<tinySelect tabindex={tabindex} size={size} value={state.selectedValue} onChange={(e)=>state.selectedValue = e.value} placeholder={placeholder} onChange={change} popper-class={'tiny-drop-times' + (popperClass ? ' ' + popperClass : '')} popper-append-to-body={popperAppendToBody} a($attrs, ['^on[A-Z]']) onClear={$emit('clear')} onVisible={$emit('visible-change', $event)}>    

  {
    state.options.map((item, index)=>(
      <tinyOption  key={index} label={item.label} value={item.value}>    </tinyOption>
    ))
  }
  

  </tinySelect>


      );
    }
    