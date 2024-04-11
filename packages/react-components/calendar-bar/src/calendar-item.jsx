
    import { renderless, api } from '@opentiny/vue-renderless/calendar-bar/vue'
    import '@opentiny/vue-theme/calendar-bar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function calendarBar(props) {
      const {text,day,config} = props
      const defaultProps = {
        ...$props,
        ...props,
        text,day,config
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
    