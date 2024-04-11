
    import { renderless, api } from '@opentiny/vue-renderless/column-list-group/vue'
    import '@opentiny/vue-theme/column-list-group/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function columnList(props) {
      const {modelValue,title,disabled,size,type,showCheckbox,checkboxDisabled} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,title,disabled,size,type,showCheckbox,checkboxDisabled
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
          
<div data-tag="tiny-column-list-group"   className={vc([type !== 'list' ? '[&_[role=column-list-item]]:mb-3 [&_[role=column-list-item]:last-child]:mb-0' : '','w-full]')}>    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    