
    import { renderless, api } from '@opentiny/vue-renderless/river/vue'
    import '@opentiny/vue-theme/river/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function river(props) {
      const {data,config} = props
      const defaultProps = {
        ...$props,
        ...props,
        data,config
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
          
<div  style={state.canvasStyle} className="tiny-custom-river echarts-custom-river"></div>


      );
    }
    