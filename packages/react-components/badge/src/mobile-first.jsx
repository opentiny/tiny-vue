
    import { renderless, api } from '@opentiny/vue-renderless/badge/vue'
    import '@opentiny/vue-theme/badge/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function badge(props) {
      const {showLeft,isDot,hidden,type,max,value,modelValue,href,target,data} = props
      const defaultProps = {
        ...$props,
        ...props,
        showLeft,isDot,hidden,type,max,value,modelValue,href,target,data
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
          
<div data-tag="tiny-badge"  className={vc([m(gcls('primary-status'), gcls({ 'dot-showleft': isDot && showLeft })))}>    
<span style={{display:data?'block':'none'}}>{data}</span>

    
<Slot style={{display:!(data)?'block':'none'}} parent_children={props.children} slots={props.slots}></Slot>

    
<div data-tag="tiny-badge-content" style={{display:!hidden && (state.content || state.content === 0 || isDot || showLeft)?'block':'none'}}  className={vc([
        m(
          gcls('primary-status-child'),
          gcls({ 'dot-showleft-child': showLeft && isDot }),
          gcls(`type-${type || 'default'}`),
          gcls({ 'circle': !isDot }),
          gcls({ 'dot-default-icon-label': !showLeft && isDot && ['icon', 'label'].includes(type) }),
          gcls({ 'dot-default': !showLeft && isDot && !['icon', 'label'].includes(type) }),
          gcls({ 'circle-icon-label': !isDot && ['icon', 'label'].includes(type) })
        )
      )}>      
<Slot name="content" parent_children={props.children} slots={props.slots}>        
<a style={{display:state.href?'block':'none'}}  href={state.href} target={target} rel="noopener noreferrer" className={vc([m(gcls('state-href')))}>{state.content}</a>

        
<span  style={{display:!(state.href)?'block':'none'}} className={vc([m(gcls('state-not-href')))}>{state.content}</span>

      </Slot>

    </div>

  </div>


      );
    }
    