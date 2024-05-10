
    import { renderless, api } from '@opentiny/vue-renderless/link/vue'
    import '@opentiny/vue-theme/link/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function link(props) {
      const {disabled,href,icon,type,underline,value,size} = props
      const defaultProps = {
        ...$props,
        ...props,
        disabled,href,icon,type,underline,value,size
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<a  href={state.disabled ? null : state.href} a($attrs, ['^on[A-Z]']) rel="noopener noreferrer" onClick={handleClick} className={vc([
      'tiny-link',
      'tiny-link--additional',
      type ? `tiny-link--${type}` : '',
      state.disabled && 'is-disabled',
      underline && !state.disabled && 'is-underline',
      size === 'medium' ? `tiny-link--${size}` : 'tiny-link--base'
    ])}>    
<Component is={icon} style={{display:icon?'block':'none'}}   className={vc({ 'tiny-link-svg-only': !(slots.default || value) },'tiny-svg-size tiny-link-svg')}></Component>


    
<span style={{display:value?'block':'none'}}  className="tiny-link__inner">      
{value}

    </span>


    
<span style={{display:!(value)?'block':'none'}}  className="tiny-link__inner">      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </span>


    
<Slot style={{display:slots.icon?'block':'none'}} name="icon" parent_children={props.children} slots={props.slots}></Slot>

  </a>


      );
    }
    