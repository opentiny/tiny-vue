
    import { renderless, api } from '@opentiny/vue-renderless/breadcrumb-item/vue'
    import '@opentiny/vue-theme/breadcrumb-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function breadcrumbItem(props) {
      const {to,replace,label,option,size} = props
      const defaultProps = {
        ...$props,
        ...props,
        to,replace,label,option,size
      }
      const { ref, current: vm, parent } = useVm()
      const link=useRef()
      const { state,linkClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[link]
      })
      return (
          
<span  className={vc(['tiny-breadcrumb__item', state.size ? 'tiny-breadcrumb__item--' + state.size : ''])}>    
<span  ref={link} v-ref="link" role="link" onClick={linkClick} className={vc(['tiny-breadcrumb__inner', to ? 'is-link' : ''])}>      
<Slot  parent_children={props.children} slots={props.slots}>        
<span >{label}</span>

      </Slot>

    </span>

    
<Component style={{display:breadcrumb.separatorIcon?'block':'none'}} is={breadcrumb.separatorIcon}  className="tiny-svg-size tiny-breadcrumb__separator-cls"></Component>

    
<span style={{display:!(breadcrumb.separatorIcon)?'block':'none'}}  className="tiny-breadcrumb__separator">{breadcrumb.separator}</span>

  </span>


      );
    }
    