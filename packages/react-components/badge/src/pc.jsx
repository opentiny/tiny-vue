
    import { renderless, api } from '@opentiny/vue-renderless/badge/vue'
    import '@opentiny/vue-theme/badge/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function badge(props) {
      const {isDot,hidden,type,max,value,modelValue,href,target,badgeClass,offset,data} = props
      const defaultProps = {
        ...$props,
        ...props,
        isDot,hidden,type,max,value,modelValue,href,target,badgeClass,offset,data
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
          
<div  className="tiny-badge__wrapper">    
<span style={{display:data?'block':'none'}}>{data}</span>

    
<Slot style={{display:!(data)?'block':'none'}} parent_children={props.children} slots={props.slots}></Slot>

    
<div style={{display:!hidden && (state.content || state.content === 0 || isDot)?'block':'none'}}   style={state.transform} className={vc([
        isDot ? 'tiny-badge--default' : '',
        state.isOverstep ? 'tiny-badge--max' : '',
        type ? 'tiny-badge--' + type : '',
        badgeClass || ''
      ],'tiny-badge')}>      
<Slot name="content" parent_children={props.children} slots={props.slots}>        
<a style={{display:state.href?'block':'none'}} href={state.href} target={target} rel="noopener noreferrer">{state.content}</a>

        
<span  style={{display:!state.href?'block':'none'}} className="tiny-badge__content-text">{state.content}</span>

      </Slot>

    </div>

  </div>


      );
    }
    