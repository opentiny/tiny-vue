
    import { renderless, api } from '@opentiny/vue-renderless/date-picker-mobile-first/vue'
    import '@opentiny/vue-theme/date-picker-mobile-first/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function datePicker(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="w-full flex">    
<Slot data={data} parent_children={props.children} slots={props.slots}>{data.value}</Slot>

  </div>


      );
    }
    