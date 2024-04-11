
    import { renderless, api } from '@opentiny/vue-renderless/country/vue'
    import '@opentiny/vue-theme/country/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function country(props) {
      const {modelValue,placeholder,size,clearable,disabled,fetchCountry,fields,popperClass,popperAppendToBody} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,placeholder,size,clearable,disabled,fetchCountry,fields,popperClass,popperAppendToBody
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,change,emit } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<tinySelect value={state.selectedValue} onChange={(e)=>state.selectedValue = e.value} filterable size={size} clearable={clearable} disabled={disabled} placeholder={placeholder} onChange={change} a($attrs, ['^on[A-Z]']) onClear={emit('clear')} onVisible={emit('visible-change', $event)}>    

  {
    state.options.map(item=>(
      <tinyOption  key={item.value} label={item.label} value={item.value}> </tinyOption>
    ))
  }
  

  </tinySelect>


      );
    }
    