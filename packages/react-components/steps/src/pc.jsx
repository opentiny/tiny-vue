
    import { renderless, api } from '@opentiny/vue-renderless/steps/vue'
    import '@opentiny/vue-theme/steps/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function steps(props) {
      const {nameField,countField,statusField,data,space,active,visibleNum,descriptionField,vertical,advanced,line,duration,size,noArrow,flex} = props
      const defaultProps = {
        ...$props,
        ...props,
        nameField,countField,statusField,data,space,active,visibleNum,descriptionField,vertical,advanced,line,duration,size,noArrow,flex
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
    