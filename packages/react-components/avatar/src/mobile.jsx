
    import { renderless, api } from '@opentiny/vue-renderless/avatar/vue'
    import '@opentiny/vue-theme/avatar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function avatar(props) {
      const {_constants,alt,error,fit,icon,shape,size,src,srcSet} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants,alt,error,fit,icon,shape,size,src,srcSet
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
    