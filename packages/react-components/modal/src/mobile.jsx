
    import { renderless, api } from '@opentiny/vue-renderless/modal/vue'
    import '@opentiny/vue-theme/modal/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function modal(props) {
      const {_constants,animat,beforeClose,duration,escClosable,events,fullscreen,height,id,isFormReset,lockScroll,lockView,marginSize,mask,maskClosable,message,minHeight,minWidth,modelValue,resize,showFooter,showHeader,title,top,type,vSize,width,zIndex} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants,animat,beforeClose,duration,escClosable,events,fullscreen,height,id,isFormReset,lockScroll,lockView,marginSize,mask,maskClosable,message,minHeight,minWidth,modelValue,resize,showFooter,showHeader,title,top,type,vSize,width,zIndex
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
    