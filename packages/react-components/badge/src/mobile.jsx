
    import { renderless, api } from '@opentiny/vue-renderless/badge/vue'
    import '@opentiny/vue-theme/badge/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function badge(props) {
      const {isDot,isFixed,isMini,hidden,max,type,value,modelValue,href,target} = props
      const defaultProps = {
        ...$props,
        ...props,
        isDot,isFixed,isMini,hidden,max,type,value,modelValue,href,target
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
          
<div  className="tiny-mobile-badge">    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    
<div style={{display:!hidden && (value > 0 || isDot)?'block':'none'}}   className={vc([
        {
          'is-dot': isDot,
          'is-fixed': isFixed,
          'is-mini': isMini
        },
        value < 10 ? 'is-circle' : '',
        type ? 'tiny-mobile-badge--' + type : ''
      ],'tiny-mobile-badge__content')}>      
<span style={{display:!isDot?'block':'none'}}>        
<Slot name="content" parent_children={props.children} slots={props.slots}>          
<a href={state.href} target={target} rel="noopener noreferrer"  className="tiny-mobile-badge__link">{state.content}</a>

        </Slot>

      </span>

    </div>

  </div>


      );
    }
    