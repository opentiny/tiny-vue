
    import { renderless, api } from '@opentiny/vue-renderless/date-picker/vue'
    import '@opentiny/vue-theme/date-picker/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function datePicker(props) {
      const {_constants} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants
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
    