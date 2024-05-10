
    import { renderless, api } from '@opentiny/vue-renderless/color-picker/vue'
    import '@opentiny/vue-theme/color-picker/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function colorPicker(props) {
      const {modelValue} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue
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
          
<div ></div>


      );
    }
    