
    import { renderless, api } from '@opentiny/vue-renderless/carousel-item/vue'
    import '@opentiny/vue-theme/carousel-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function carouselItem(props) {
      const {name,title,label} = props
      const defaultProps = {
        ...$props,
        ...props,
        name,title,label
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleItemClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div style={{display:state.ready?'block':'none'}}  style={state.getTransform}  onClick={handleItemClick} className={vc({
      'is-active': state.active,
      'tiny-carousel__item--card': state.carouselParent.type === 'card',
      'is-in-stage': state.inStage,
      'is-hover': state.hover,
      'is-animating': state.animating,
      'tiny-oblique': state.isOblique,
      'tiny-oblique': state.carouselParent.type === 'card' && state.carouselParent.setUserCls
    },'tiny-carousel__item')}>    
<div style={{display:state.carouselParent.type === 'card'?'block':'none'}} style={{display:!state.active?'block':'none'}}  className="tiny-carousel__mask"></div>

    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    
<div style={{display:state.hasTitle?'block':'none'}}  className="item-title">      
<span >{title}</span>

    </div>

  </div>


      );
    }
    