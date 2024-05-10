
    import { renderless, api } from '@opentiny/vue-renderless/drop-roles/vue'
    import '@opentiny/vue-theme/drop-roles/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dropRoles(props) {
      const {size,modelValue,placeholder,fetchRole,fetchCurrentRole,fields,popperClass,popperAppendToBody,displayOnly} = props
      const defaultProps = {
        ...$props,
        ...props,
        size,modelValue,placeholder,fetchRole,fetchCurrentRole,fields,popperClass,popperAppendToBody,displayOnly
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
          
<tinySelect size={size} value={state.selectedValue} onChange={(e)=>state.selectedValue = e.value} placeholder={placeholder} f(state.attrs) display-only={displayOnly} popper-class={'tiny-drop-roles' + (popperClass ? ' ' + popperClass : '')} popper-append-to-body={popperAppendToBody} onChange={change}>    

  {
    state.options.map(item=>(
      <tinyOption  key={item.value} label={item.label} value={item.value}>      
<span style="float: left">{item.label}</span>

      
<iconAdministrator  className="user-icon tiny-svg-size"></iconAdministrator>

    </tinyOption>
    ))
  }
  

  </tinySelect>


      );
    }
    