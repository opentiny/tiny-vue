
    import { renderless, api } from '@opentiny/vue-renderless/container/vue'
    import '@opentiny/vue-theme/container/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function container(props) {
      const {pattern,headerHeight,asideWidth,footerHeight} = props
      const defaultProps = {
        ...$props,
        ...props,
        pattern,headerHeight,asideWidth,footerHeight
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
          
<div   className={vc([pattern],'tiny-container')}>    
<div style={{display:state.showHeader?'block':'none'}} style={state.headerStyle}  className="tiny-container__header">      
<Slot name="header" parent_children={props.children} slots={props.slots}></Slot>

    </div>

    
<div style={{display:state.showAside?'block':'none'}} style={state.asideStyle}  className="tiny-container__aside">      
<Slot name="aside" parent_children={props.children} slots={props.slots}></Slot>

    </div>

    
<div style={state.mainStyle}  className="tiny-container__main">      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </div>

    
<div style={{display:state.showFooter?'block':'none'}} style={state.footerStyle}  className="tiny-container__footer">      
<Slot name="footer" parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </div>


      );
    }
    