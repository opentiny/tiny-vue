
    import { renderless, api } from '@opentiny/vue-renderless/card-group/vue'
    import '@opentiny/vue-theme/card-group/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cardGroup(props) {
      const {modelValue,customClass,height,autoWidth,size,status,checkType,type,disabled} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,customClass,height,autoWidth,size,status,checkType,type,disabled
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
          
<div data-tag="tiny-card-group"   className={vc([gcls(`size-${state.size}`),'w-full grid gap-4]')}>    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    