
    import { renderless, api } from '@opentiny/vue-renderless/user-account/vue'
    import '@opentiny/vue-theme/user-account/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function userAccount(props) {
      const {showArrow,guestRole,getUserInfo,getLangData,getUserImageUrl,getLogoutUrl,redirectUrl,isLocal,network,isMock,isGuestUser,showLogin,popperClass,popperAppendToBody,beforeLogout} = props
      const defaultProps = {
        ...$props,
        ...props,
        showArrow,guestRole,getUserInfo,getLangData,getUserImageUrl,getLogoutUrl,redirectUrl,isLocal,network,isMock,isGuestUser,showLogin,popperClass,popperAppendToBody,beforeLogout
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
          
<div  className="tiny-user-account">    
<userContact data={state} show-arrow={showArrow} popper-class={'tiny-user-account' + (popperClass ? ' ' + popperClass : '')} popper-append-to-body={popperAppendToBody}>      
<div  className="user-account-pop">        
<div  className="user-account-custom">          
<Slot  parent_children={props.children} slots={props.slots}></Slot>

        </div>

        
<logout guest-role={guestRole} get-logout-url={getLogoutUrl} is-local={isLocal} redirect-url={redirectUrl} network={network} is-mock={isMock} is-guest-user={isGuestUser} show-login={showLogin} before-logout={beforeLogout}></logout>

      </div>

    </userContact>

  </div>


      );
    }
    