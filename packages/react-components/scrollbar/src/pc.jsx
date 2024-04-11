
    import { renderless, api } from '@opentiny/vue-renderless/scrollbar/vue'
    import '@opentiny/vue-theme/scrollbar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function scrollbar(props) {
      const {marginBottomAdjust,native,noresize,show,tag,viewClass,viewStyle,wrapClass,wrapStyle} = props
      const defaultProps = {
        ...$props,
        ...props,
        marginBottomAdjust,native,noresize,show,tag,viewClass,viewStyle,wrapClass,wrapStyle
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
    