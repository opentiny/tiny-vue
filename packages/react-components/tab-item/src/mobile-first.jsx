
    import { renderless, api } from '@opentiny/vue-renderless/tab-item/vue'
    import '@opentiny/vue-theme/tab-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tabItem(props) {
      const {title,name,selected,renderTitle,renderSetting,lazy} = props
      const defaultProps = {
        ...$props,
        ...props,
        title,name,selected,renderTitle,renderSetting,lazy
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
    