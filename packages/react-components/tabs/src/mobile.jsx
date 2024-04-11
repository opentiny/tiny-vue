
    import { renderless, api } from '@opentiny/vue-renderless/tabs/vue'
    import '@opentiny/vue-theme/tabs/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tabs(props) {
      const {activeName,position,withClose,withAdd,activeColor,modelValue,beforeLeave,editable,showExpandTabs,childrenTabs,swipeable,expandTabsTitle,expandTabsMode,stretch,size} = props
      const defaultProps = {
        ...$props,
        ...props,
        activeName,position,withClose,withAdd,activeColor,modelValue,beforeLeave,editable,showExpandTabs,childrenTabs,swipeable,expandTabsTitle,expandTabsMode,stretch,size
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
    