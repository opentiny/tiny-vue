
    import { renderless, api } from '@opentiny/vue-renderless/floatbar/vue'
    import '@opentiny/vue-theme/floatbar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function floatbar(props) {
      const {position,data} = props
      const defaultProps = {
        ...$props,
        ...props,
        position,data
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
          
<div  style={position} className="tiny-float-bar tiny-toolbar">    
<Slot slot-scope={{ data: state.data }} parent_children={props.children} slots={props.slots}>      
<ul  className="navs">        

  {
    state.data.map((item, index)=>(
      <li  key={index}  className="nav-item">          
<a style={{display:item.url?'block':'none'}} href={item.url} target={item.target} rel="noopener noreferrer"  className="nav-link">{item.title}</a>

          
<span style={{display:!(item.url)?'block':'none'}}  className="nav-text">{item.title}</span>

        </li>
    ))
  }
  

      </ul>

    </Slot>

  </div>


      );
    }
    