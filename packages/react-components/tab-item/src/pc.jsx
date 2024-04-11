
    import { renderless, api } from '@opentiny/vue-renderless/tab-item/vue'
    import '@opentiny/vue-theme/tab-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tabItem(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
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
          
<div style={{display:!lazy || state.loaded || state.active?'block':'none'}} style={{display:state.active?'block':'none'}} aria-hidden={!state.active} id={`pane-${state.paneName}`} aria-labelledby={`tab-${state.paneName}`}  role="tabpanel" className={vc(['tiny-tab-pane', state.animateShow ? 'active-item' : ''])}>    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    