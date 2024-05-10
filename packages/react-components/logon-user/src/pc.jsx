
    import { renderless, api } from '@opentiny/vue-renderless/logon-user/vue'
    import '@opentiny/vue-theme/logon-user/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function logonUser(props) {
      const {getUserInfo} = props
      const defaultProps = {
        ...$props,
        ...props,
        getUserInfo
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
          
<div  className="tiny-logon-user">{state.userName}</div>


      );
    }
    