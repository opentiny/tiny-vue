
    import { renderless, api } from '@opentiny/vue-renderless/anchor/vue'
    import '@opentiny/vue-theme/anchor/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function anchor(props) {
      const {isAffix,links,containerId,markClass,type} = props
      const defaultProps = {
        ...$props,
        ...props,
        isAffix,links,containerId,markClass,type
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
        
      );
    }
    