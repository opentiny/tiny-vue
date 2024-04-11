
    import { renderless, api } from '@opentiny/vue-renderless/dynamic-scroller-item/vue'
    import '@opentiny/vue-theme/dynamic-scroller-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dynamicScroller(props) {
      const {item,watchData,active,index,sizeDependencies,emitResize,tag} = props
      const defaultProps = {
        ...$props,
        ...props,
        item,watchData,active,index,sizeDependencies,emitResize,tag
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
    