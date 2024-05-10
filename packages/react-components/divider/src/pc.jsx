
    import { renderless, api } from '@opentiny/vue-renderless/divider/vue'
    import '@opentiny/vue-theme/divider/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function divider(props) {
      const {direction,color,borderStyle,contentPosition,contentColor,contentBackgroundColor} = props
      const defaultProps = {
        ...$props,
        ...props,
        direction,color,borderStyle,contentPosition,contentColor,contentBackgroundColor
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
          
<div  style={{
      'border-top-style': direction === 'horizontal' ? borderStyle : '',
      'border-left-style': direction === 'vertical' ? borderStyle : '',
      'border-color': color
    }} className={vc(['tiny-divider', 'tiny-divider--' + direction])}>    
<div style={{display:slots.default?'block':'none'}}  style={{
        color: contentColor,
        'background-color': contentBackgroundColor
      }} className={vc(['tiny-divider__text', 'is-' + contentPosition])}>      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </div>


      );
    }
    