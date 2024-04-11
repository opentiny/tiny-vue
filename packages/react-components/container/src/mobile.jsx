
    import { renderless, api } from '@opentiny/vue-renderless/container/vue'
    import '@opentiny/vue-theme/container/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function container(props) {
      const {pattern,leftWidth,rightWidth} = props
      const defaultProps = {
        ...$props,
        ...props,
        pattern,leftWidth,rightWidth
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
          
<div   className={vc([pattern],'tiny-mobile-container')}>    
<div style={state.leftStyle}  className="tiny-mobile-container__left">      
<Slot name="left" parent_children={props.children} slots={props.slots}></Slot>

    </div>

    
<div  className="tiny-mobile-container__center">      
<Slot name="center" parent_children={props.children} slots={props.slots}></Slot>

    </div>

    
<div style={{display:state.showRight?'block':'none'}} style={state.rightStyle}  className="tiny-mobile-container__right">      
<Slot name="right" parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </div>


      );
    }
    