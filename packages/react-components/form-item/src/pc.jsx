
    import { renderless, api } from '@opentiny/vue-renderless/form-item/vue'
    import '@opentiny/vue-theme/form-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function formItem(props) {
      const {_constants,appendToBody,error,for,inlineMessage,messageType,label,labelWidth,manual,popperOptions} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants,appendToBody,error,for,inlineMessage,messageType,label,labelWidth,manual,popperOptions
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
    