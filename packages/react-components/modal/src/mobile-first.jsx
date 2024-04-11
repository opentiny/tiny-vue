
    import { renderless, api } from '@opentiny/vue-renderless/modal/vue'
    import '@opentiny/vue-theme/modal/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function modal(props) {
      const {_constants,default,beforeClose,escClosable,events,fullscreen,height,id,isFormReset,lockScroll,maskClosable,message,modelValue,resize,showFooter,status,title,width,zIndex,description,options,confirmContent,cancelContent,position,customClass,slots} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants,default,beforeClose,escClosable,events,fullscreen,height,id,isFormReset,lockScroll,maskClosable,message,modelValue,resize,showFooter,status,title,width,zIndex,description,options,confirmContent,cancelContent,position,customClass,slots
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
    