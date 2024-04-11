
    import { renderless, api } from '@opentiny/vue-renderless/svg-icon/vue'
    import '@opentiny/vue-theme/svg-icon/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function svgIcon(props) {
      const {src,width,height,fill} = props
      const defaultProps = {
        ...$props,
        ...props,
        src,width,height,fill
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,$listeners } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<i style={styleExternalIcon}  {...$listeners} className="tiny-svg"></i>


      );
    }
    