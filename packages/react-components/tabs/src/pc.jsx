
    import { renderless, api } from '@opentiny/vue-renderless/tabs/vue'
    import '@opentiny/vue-theme/tabs/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tabs(props) {
      const {tabStyle,activeName,withClose,withAdd,size,modelValue,editable,position,beforeLeave,stretch,showMoreTabs,popperClass,popperAppendToBody,dropConfig,tooltipConfig,separator,beforeClose,overflowTitle,titleWidth} = props
      const defaultProps = {
        ...$props,
        ...props,
        tabStyle,activeName,withClose,withAdd,size,modelValue,editable,position,beforeLeave,stretch,showMoreTabs,popperClass,popperAppendToBody,dropConfig,tooltipConfig,separator,beforeClose,overflowTitle,titleWidth
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
    