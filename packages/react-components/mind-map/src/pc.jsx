
    import { renderless, api } from '@opentiny/vue-renderless/mind-map/vue'
    import '@opentiny/vue-theme/mind-map/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function mindMap(props) {
      const {modelValue,options} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,options
      }
      const { ref, current: vm, parent } = useVm()
      const mindmap=useRef()
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[mindmap]
      })
      return (
          
<div ref={mindmap} v-ref="mindmap"  className="tiny-mind-map"></div>


      );
    }
    