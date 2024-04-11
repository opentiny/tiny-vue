
    import { renderless, api } from '@opentiny/vue-renderless/roles/vue'
    import '@opentiny/vue-theme/roles/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function roles(props) {
      const {fetchRole,getEnvInfoSync,getChangeRoleUrl,getCustomized,pushCustomized} = props
      const defaultProps = {
        ...$props,
        ...props,
        fetchRole,getEnvInfoSync,getChangeRoleUrl,getCustomized,pushCustomized
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,show,hide,changeRole } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-roles">    
<tinyPopover popper-class="tiny-roles__selector" disabled={state.roleList.length === 1} value={state.showPopover} onChange={(e)=>state.showPopover = e.value} placement="bottom-start" trigger="hover" onShow={show} onHide={hide}>      
<template slot>        
<span >          
{state.currentRole}

          
<Component style={{display:state.roleList.length > 1?'block':'none'}} is={state.showIcon ? 'icon-chevron-down' : 'icon-chevron-up'}></Component>

        </span>

      </template>

      
<div  className="tiny-roles tiny-roles__selector-body">        
<ul  className="tiny-roles__poplist">          

  {
    state.roleList.map((item, key)=>(
      <li   key={key} data-value={item.roleId} current-scope={item.currentScope}  onClick={changeRole(item)} className={vc([state.currentId === item.roleId ? 'is-selected' : ''],'tiny-roles__poplist-item')}>            
<span >{item.roleName}</span>

          </li>
    ))
  }
  

        </ul>

      </div>

    </tinyPopover>

  </div>


      );
    }
    