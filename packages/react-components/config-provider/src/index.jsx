
    import { renderless, api } from '@opentiny/vue-renderless/config-provider/vue'
    import '@opentiny/vue-theme/config-provider/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function configProvider(props) {
      const {design,default,direction,tag,default} = props
      const defaultProps = {
        ...$props,
        ...props,
        design,default,direction,tag,default
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
    