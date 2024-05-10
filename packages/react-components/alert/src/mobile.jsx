
    import { renderless, api } from '@opentiny/vue-renderless/alert/vue'
    import '@opentiny/vue-theme/alert/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function alert(props) {
      const {icon,type,size,description,closable,showIcon,closeText,duration,offset,autoHide,target,center} = props
      const defaultProps = {
        ...$props,
        ...props,
        icon,type,size,description,closable,showIcon,closeText,duration,offset,autoHide,target,center
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleClose } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<transition name="tiny-mobile-alert-fade">    
<div style={{display:state.show?'block':'none'}}  style={state.alertStyle} className={vc([state.alertClass)}>      
<Component style={{display:showIcon?'block':'none'}} is={state.getIcon}  className="tiny-mobile-alert__icon"></Component>

      
<div  className={vc(['tiny-mobile-alert__content', { 'is-hideicon': !showIcon }])}>        
<Slot  parent_children={props.children} slots={props.slots}>{description}</Slot>

      </div>

      
<iconClose style={{display:!closeText && closable?'block':'none'}} onClick={handleClose}  className="tiny-mobile-alert__icon tiny-mobile-alert__close"></iconClose>

      
<span style={{display:!(!closeText && closable)?'block':'none'}} onClick={handleClose}  className="is-custom">{closeText}</span>

    </div>

  </transition>


      );
    }
    