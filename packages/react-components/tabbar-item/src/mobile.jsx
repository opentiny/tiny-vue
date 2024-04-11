
    import { renderless, api } from '@opentiny/vue-renderless/tabbar-item/vue'
    import '@opentiny/vue-theme/tabbar-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tabbarItem(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,onClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div   style={{ color: state.renderColor }} onClick={onClick} className={vc({ 'is-active': state.renderActive },'tiny-mobile-tabbar-item')}>    
<div  className="tiny-mobile-tabbar-item__icon">      
<Slot name="icon" active={state.renderActive} parent_children={props.children} slots={props.slots}>        
<Component is={icon} style={{ fill: state.renderColor }}></Component>

      </Slot>

      
<div style={{display:badge || dot?'block':'none'}}  className={vc(['tiny-mobile-info', dot ? 'tiny-mobile-info--dot' : ''])}>        
{state.info}

      </div>

    </div>

    
<div  style={{ color: state.renderColor, 'pointerEvents': 'none' }} className="tiny-mobile-tabbar-item__text">      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </div>


      );
    }
    