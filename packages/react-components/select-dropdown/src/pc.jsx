
    import { renderless, api } from '@opentiny/vue-renderless/select-dropdown/vue'
    import '@opentiny/vue-theme/select-dropdown/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function selectDropdown(props) {
      const {placement,boundariesPadding,popperOptions,visibleArrow,appendToBody,transformOrigin,reference,popper,offset,modelValue,arrowOffset,isDropInheritWidth} = props
      const defaultProps = {
        ...$props,
        ...props,
        placement,boundariesPadding,popperOptions,visibleArrow,appendToBody,transformOrigin,reference,popper,offset,modelValue,arrowOffset,isDropInheritWidth
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
          
<div    style={{
      minWidth: state.minWidth,
      width: isDropInheritWidth ? state.minWidth : 'auto'
    }} className={vc([{ 'is-multiple': state.multiple }, state.popperClass],'tiny-select-dropdown tiny-popper')}>    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    