
    import { renderless, api } from '@opentiny/vue-renderless/logout/vue'
    import '@opentiny/vue-theme/logout/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function logout(props) {
      const {guestRole,beforeLogout,getLogoutUrl,redirectUrl,isLocal,network,isMock,isGuestUser,showLogin} = props
      const defaultProps = {
        ...$props,
        ...props,
        guestRole,beforeLogout,getLogoutUrl,redirectUrl,isLocal,network,isMock,isGuestUser,showLogin
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,logout } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  onClick={logout} className="tiny-logout">    
{state.logout ? t('ui.logout.in') : t('ui.logout.out')}

  </div>


      );
    }
    