
    import { renderless, api } from '@opentiny/vue-renderless/panel/vue'
    import '@opentiny/vue-theme/panel/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function panel(props) {
      const {expand,foot,head,iconOpen,iconClose,isToggle,transition} = props
      const defaultProps = {
        ...$props,
        ...props,
        expand,foot,head,iconOpen,iconClose,isToggle,transition
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,toggle } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-panel">    
<div  onClick={toggle} className={vc([
        'tiny-panel__head',
        {
          'tiny-panel__head-toggle': isToggle,
          'tiny-panel__collapse': !state.isShow
        }
      ])}>      
<Slot name="collapse" slot-scope={{ state, iconOpen, iconClose, isToggle }} parent_children={props.children} slots={props.slots}>        
<Component is={state.isShow ? iconOpen : iconClose}  className={vc(['panel-icon', 'tiny-svg-size', { 'head-span': state.isShow }])}></Component>

      </Slot>

      
<Slot name="header" parent_children={props.children} slots={props.slots}>        
<h3  className="tiny-panel__title">{head}</h3>

      </Slot>

    </div>

    
<transition name={transition}>      
<div  style={{display:state.isShow?'block':'none'}} className="tiny-panel__body">        
<Slot  parent_children={props.children} slots={props.slots}></Slot>

      </div>

    </transition>

    
<Slot name="footer" parent_children={props.children} slots={props.slots}>      
<div  className="tiny-panel__footer">{foot}</div>

    </Slot>

  </div>


      );
    }
    