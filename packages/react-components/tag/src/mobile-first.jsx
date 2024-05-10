
    import { renderless, api } from '@opentiny/vue-renderless/tag/vue'
    import '@opentiny/vue-theme/tag/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tag(props) {
      const {text,closable,operable,selectable,type,theme,hit,disabled,color,size,effect,customClass,value} = props
      const defaultProps = {
        ...$props,
        ...props,
        text,closable,operable,selectable,type,theme,hit,disabled,color,size,effect,customClass,value
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
    