
    import { renderless, api } from '@opentiny/vue-renderless/tag/vue'
    import '@opentiny/vue-theme/tag/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tag(props) {
      const {text,closable,type,hit,disabled,color,size,effect,value,beforeDelete} = props
      const defaultProps = {
        ...$props,
        ...props,
        text,closable,type,hit,disabled,color,size,effect,value,beforeDelete
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
    